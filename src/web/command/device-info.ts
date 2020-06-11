import {controller} from '../controller';
import {v4 as uuid} from 'uuid';
import {GetDeviceInfoChannel, DeviceInfo} from '../../types';

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
