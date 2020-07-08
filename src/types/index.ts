import {
  GetDeviceInfoRequest,
  GetDeviceInfoResponse,
  SetBackButtonStatusRequest,
  SetBackButtonStatusResponse,
  SetStatusBarRequest,
  SetStatusBarResponse,
  SetNavigationGoBackRequest,
  SetNavigationGoBackResponse,
} from './device-info';
import {GetUserInfoRequest, GetUserInfoResponse} from './user-info';
import {ScanQRRequest, ScanQRResponse} from './scan-qr';

export type Request =
  | GetDeviceInfoRequest
  | GetUserInfoRequest
  | ScanQRRequest
  | SetBackButtonStatusRequest
  | SetStatusBarRequest
  | SetNavigationGoBackRequest;

export type Response =
  | GetDeviceInfoResponse
  | GetUserInfoResponse
  | ScanQRResponse
  | SetBackButtonStatusResponse
  | SetStatusBarResponse
  | SetNavigationGoBackResponse;

export {RequestType, ResponseType} from './base-type';
export * from './device-info';
export * from './user-info';
export * from './scan-qr';
