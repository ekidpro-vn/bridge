import {ResponseType, RequestType} from './base-type';

export type UserInfo = {
  token: string;
  fullName?: string;
  email?: string;
  avatar?: string;
};

export const GetUserInfoChannel = 'CHANNEL_GET_USER_INFO';

export type GetUserInfoRequest = RequestType<typeof GetUserInfoChannel>;

export type GetUserInfoResponse = ResponseType<
  typeof GetUserInfoChannel,
  UserInfo | undefined
>;
