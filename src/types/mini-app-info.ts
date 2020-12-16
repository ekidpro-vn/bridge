import {ResponseType, RequestType} from './base-type';

export type MiniAppInfo = {
  id: number;
  name: string | undefined;
  icon: string | undefined;
  icon_featured: string | undefined;
  bundle_id: string;
  version: string;
  url: string;
  status: 'ACTIVE' | 'INACTIVE';
  category: string;
  is_featured: number;
  order: number | undefined | null;
};

export const SetMiniAppInfoChannel = 'CHANNEL_SET_MINI_APP_INFO';

export type SetMiniAppInfoRequest = RequestType<
  typeof SetMiniAppInfoChannel,
  MiniAppInfo
>;
export type SetMiniAppInfoResponse = ResponseType<
  typeof SetMiniAppInfoChannel,
  MiniAppInfo
>;

export const SetListWorkspaceStatusChannel =
  'CHANNEL_SET_LIST_WORKSPACE_STATUS';
export type ListWorkspaceStatus = 'show' | 'hidden';
export type SetListWorkspaceStatusRequest = RequestType<
  typeof SetListWorkspaceStatusChannel,
  ListWorkspaceStatus
>;
export type SetListWorkspaceStatusResponse = ResponseType<
  typeof SetListWorkspaceStatusChannel,
  ListWorkspaceStatus
>;
