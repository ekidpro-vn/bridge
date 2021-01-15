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
  setting?: string | undefined;
}

export type UserInfo = {
  token: string;
  fullName?: string;
  username?: string;
  email?: string;
  avatar?: string;
  mobile?: string | undefined;
  birthday?: string | undefined;
  uid?: number | undefined;
  type?: string | undefined;
  metadata?: string | undefined;
  workspace?: Workspace;
  language?: string | 'vi';
};

export const GetUserInfoChannel = 'CHANNEL_GET_USER_INFO';

export type GetUserInfoRequest = RequestType<typeof GetUserInfoChannel>;

export type GetUserInfoResponse = ResponseType<
  typeof GetUserInfoChannel,
  UserInfo | undefined
>;

export const SetSettingChannel = 'CHANNEL_SET_SETTING';
export type SetSettingRequest = RequestType<typeof SetSettingChannel, string>;
export type SetSettingResponse = ResponseType<typeof SetSettingChannel, string>;
