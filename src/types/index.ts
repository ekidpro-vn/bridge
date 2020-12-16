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
import {
  SetMiniAppInfoRequest,
  SetMiniAppInfoResponse,
  SetListWorkspaceStatusRequest,
  SetListWorkspaceStatusResponse,
} from './mini-app-info';
import {ScanQRRequest, ScanQRResponse} from './scan-qr';

export type Request =
  | GetDeviceInfoRequest
  | GetUserInfoRequest
  | ScanQRRequest
  | SetBackButtonStatusRequest
  | SetStatusBarRequest
  | SetNavigationGoBackRequest
  | SetMiniAppInfoRequest
  | SetListWorkspaceStatusRequest;

export type Response =
  | GetDeviceInfoResponse
  | GetUserInfoResponse
  | ScanQRResponse
  | SetBackButtonStatusResponse
  | SetStatusBarResponse
  | SetNavigationGoBackResponse
  | SetMiniAppInfoResponse
  | SetListWorkspaceStatusResponse;

export {RequestType, ResponseType} from './base-type';
export * from './device-info';
export * from './user-info';
export * from './scan-qr';
export * from './mini-app-info';
