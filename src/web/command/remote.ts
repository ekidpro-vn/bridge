import {UserInfo} from '../../types';
import md5 from 'blueimp-md5';

declare let window: Window;

const BASE_URL = 'https://api.ekidhub.com/api/v1';

const isValid =
  typeof window.localStorage !== 'undefined' && window.localStorage !== null;

export const login = async (
  username: string,
  password: string
): Promise<UserInfo> => {
  if (!isValid) {
    return Promise.reject(new Error('Do not have any storage'));
  }

  let deviceId = window.localStorage.getItem('device_id');
  if (typeof deviceId === 'undefined' || deviceId === null) {
    deviceId = Math.random().toString(36).substring(7);
    window.localStorage.setItem('device_id', deviceId);
  }

  const result = await window
    .fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password: md5(password),
        device_id: deviceId,
      }), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(json => {
      const {data, message, success, token, expired_at} = json;
      if (success) {
        const {fullname: fullName, workplaces: workspace, ...rest} = data;
        const finalObject = {
          ...rest,
          workspace,
          token,
          fullName,
          expired_at,
        };

        const decodedString = btoa(
          unescape(encodeURIComponent(JSON.stringify(finalObject)))
        );
        window.localStorage.setItem('app-ekp-info', decodedString);

        return finalObject;
      } else {
        throw new Error(message);
      }
    });

  return result;
};

export const getUserInfo = async (
  forceReload: boolean = false
): Promise<UserInfo> => {
  if (!isValid) {
    return Promise.reject(new Error('Do not have any storage'));
  }

  const encoded = window.localStorage.getItem('app-ekp-info');

  if (typeof encoded === 'undefined' || encoded === null || encoded === '') {
    throw new Error('Invalid token');
  }

  const json = JSON.parse(decodeURIComponent(escape(window.atob(encoded))));
  const {expired_at, token} = json;
  if (
    expired_at < new Date().getTime() ||
    typeof token === 'undefined' ||
    token === null ||
    token === ''
  ) {
    throw new Error('Token expired! Please login then do it again');
  }

  if (!forceReload) {
    return Promise.resolve(json);
  }

  return window
    .fetch(`${BASE_URL}/user-info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => response.json());
};

export const reset = () => {
  if (window && window.localStorage) {
    window.localStorage.removeItem('app-ekp-info');
  }
};
