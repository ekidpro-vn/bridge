import {controller} from '../controller';
import {v4 as uuid} from 'uuid';
import {GetUserInfoChannel, SetSettingChannel, UserInfo} from '../../types';

export const getUserInfo = async (): Promise<UserInfo> => {
  const data = await controller.request({
    id: uuid(),
    channel: GetUserInfoChannel,
  });

  const tmp = data?.data as UserInfo;
  if (tmp) {
    return tmp;
  } else {
    throw new Error("Can't get user info");
  }
};

export const setSetting = async (input: string): Promise<string> => {
  const data = await controller.request({
    id: uuid(),
    channel: SetSettingChannel,
    data: input,
  });

  const tmp = data?.data as string;
  return tmp;
};
