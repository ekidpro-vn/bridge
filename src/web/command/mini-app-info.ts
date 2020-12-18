import {controller} from '../controller';
import {v4 as uuid} from 'uuid';
import {
  SetMiniAppInfoChannel,
  MiniAppInfo,
  ListWorkspaceStatus,
  SetListWorkspaceStatusChannel,
} from '../../types';

export const setMiniAppInfo = async (
  input: MiniAppInfo
): Promise<MiniAppInfo> => {
  const data = await controller.request({
    id: uuid(),
    channel: SetMiniAppInfoChannel,
    data: input,
  });

  const tmp = data?.data as MiniAppInfo;
  if (tmp) {
    return tmp;
  } else {
    throw new Error("Can't set mini app info");
  }
};

export const setListWorkspaceStatus = async (
  input: ListWorkspaceStatus
): Promise<ListWorkspaceStatus> => {
  const data = await controller.request({
    id: uuid(),
    channel: SetListWorkspaceStatusChannel,
    data: input,
  });

  const tmp = data?.data as ListWorkspaceStatus;
  if (tmp) {
    return tmp;
  } else {
    throw new Error("Can't get data");
  }
};
