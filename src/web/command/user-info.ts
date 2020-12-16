import {controller} from '../controller';
import {v4 as uuid} from 'uuid';
import {GetUserInfoChannel, UserInfo} from '../../types';

export const getUserInfo = async (): Promise<UserInfo> => {
  const data = await controller.request({
    id: uuid(),
    channel: GetUserInfoChannel,
  });

  const tmp = data.data as UserInfo;
  if (tmp) {
    return tmp;
  } else {
    throw new Error("Can't get user info");
  }
};
