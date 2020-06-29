import {GetDeviceInfoRequest, GetDeviceInfoResponse} from './device-info';
import {GetUserInfoRequest, GetUserInfoResponse} from './user-info';
import {ScanQRRequest, ScanQRResponse} from './scan-qr';

export type Request = GetDeviceInfoRequest | GetUserInfoRequest | ScanQRRequest;
export type Response =
  | GetDeviceInfoResponse
  | GetUserInfoResponse
  | ScanQRResponse;

export {RequestType, ResponseType} from './base-type';
export * from './device-info';
export * from './user-info';
export * from './scan-qr';
