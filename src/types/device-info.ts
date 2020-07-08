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

export const SetStatusBarChannel = 'CHANNEL_SET_STATUS_BAR';
export type StatusBarType = 'default' | 'light-content' | 'dark-content';
export type SetStatusBarRequest = RequestType<
  typeof SetStatusBarChannel,
  StatusBarType
>;
export type SetStatusBarResponse = ResponseType<
  typeof SetStatusBarChannel,
  StatusBarType
>;

export const SetBackButtonStatusChannel = 'CHANNEL_SET_BACK_BUTTON_STATUS';
export type BackButtonStatus = 'show' | 'hidden';
export type SetBackButtonStatusRequest = RequestType<
  typeof SetBackButtonStatusChannel,
  BackButtonStatus
>;
export type SetBackButtonStatusResponse = ResponseType<
  typeof SetBackButtonStatusChannel,
  BackButtonStatus
>;

export const GoBackChannel = 'CHANNEL_NAVIGATION_GO_BACK';
export type SetNavigationGoBackRequest = RequestType<typeof GoBackChannel>;
export type SetNavigationGoBackResponse = ResponseType<
  typeof GoBackChannel,
  boolean
>;
