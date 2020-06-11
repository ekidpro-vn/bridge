import {ResponseType, RequestType} from './base-type';

export type DeviceInfo = {
  name: string;
  buildId?: string;
  batteryLevel?: number;
  brand: string;
  buildNumber: string;
  carrier?: string;
  vendorId: string;
  deviceType: string;
  deviceName?: string;
  freeDiskStorage?: number;
  ipAddress?: string;
  macAddress?: string;
  manufacturer?: string;
  model: string;
  systemName: string;
  systemVersion: string;
  uniqueId: string;
  hasNotch: boolean;
  isCharging?: boolean;
  isLandscape?: boolean;
  isHeadphoneConntected?: boolean;
  isTablet?: boolean;
};

export const GetDeviceInfoChannel = 'CHANNEL_GET_DEVICE_INFO';

export type GetDeviceInfoRequest = RequestType<typeof GetDeviceInfoChannel>;
export type GetDeviceInfoResponse = ResponseType<
  typeof GetDeviceInfoChannel,
  DeviceInfo
>;
