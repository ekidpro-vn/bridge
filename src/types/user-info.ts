import {ResponseType, RequestType} from './base-type';

export interface Workspace {
  id: number;
  // uid: number;
  name: string;
  code: string;
  is_public: number;
  authen_api_url?: string;
  manual_authen_url?: string;
  icon: string | undefined;
  cover: string | undefined;
  status: 'ACTIVE' | 'INACTIVE';
  group_name: string | undefined;
  w_role?: string;
}

export type UserInfo = {
  token: string;
  fullName?: string;
  email?: string;
  avatar?: string;
  workspace?: Workspace;
};

export const GetUserInfoChannel = 'CHANNEL_GET_USER_INFO';

export type GetUserInfoRequest = RequestType<typeof GetUserInfoChannel>;

export type GetUserInfoResponse = ResponseType<
  typeof GetUserInfoChannel,
  UserInfo | undefined
>;
