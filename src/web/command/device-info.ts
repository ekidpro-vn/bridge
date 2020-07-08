import {controller} from '../controller';
import {v4 as uuid} from 'uuid';
import {
  GetDeviceInfoChannel,
  DeviceInfo,
  SetStatusBarChannel,
  StatusBarType,
  BackButtonStatus,
  SetBackButtonStatusChannel,
  GoBackChannel,
} from '../../types';

export const getDeviceInfo = async (): Promise<DeviceInfo> => {
  const data = await controller.request({
    id: uuid(),
    channel: GetDeviceInfoChannel,
  });

  const tmp = data.data as DeviceInfo;
  if (tmp) {
    return tmp;
  } else {
    throw new Error("Can't get device info");
  }
};

export const setStatusBarStyle = async (
  input: StatusBarType
): Promise<StatusBarType> => {
  const data = await controller.request({
    id: uuid(),
    channel: SetStatusBarChannel,
    data: input,
  });

  const tmp = data.data as StatusBarType;
  return tmp;
};

export const setButtonStatus = async (
  input: BackButtonStatus
): Promise<BackButtonStatus> => {
  const data = await controller.request({
    id: uuid(),
    channel: SetBackButtonStatusChannel,
    data: input,
  });

  const tmp = data.data as BackButtonStatus;
  return tmp;
};

export const goBack = async (): Promise<boolean> => {
  const data = await controller.request({
    id: uuid(),
    channel: GoBackChannel,
  });

  const tmp = data.data as boolean;
  return tmp;
};
