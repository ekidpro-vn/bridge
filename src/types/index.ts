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
import {
  GetUserInfoRequest,
  GetUserInfoResponse,
  SetSettingRequest,
  SetSettingResponse,
} from './user-info';
import {
  SetMiniAppInfoRequest,
  SetMiniAppInfoResponse,
  SetListWorkspaceStatusRequest,
  SetListWorkspaceStatusResponse,
  SetScreenNavigateRequest,
  SetScreenNavigateResponse,
} from './mini-app-info';
import {ScanQRRequest, ScanQRResponse} from './scan-qr';
import {
  SelectImageVideoRequest,
  SelectImageVideoResponse,
  RecordVideoRequest,
  RecordVideoResponse,
} from './select-image-video';

export type Request =
  | GetDeviceInfoRequest
  | GetUserInfoRequest
  | ScanQRRequest
  | SetBackButtonStatusRequest
  | SetStatusBarRequest
  | SetNavigationGoBackRequest
  | SetMiniAppInfoRequest
  | SetListWorkspaceStatusRequest
  | SetSettingRequest
  | SelectImageVideoRequest
  | RecordVideoRequest
  | SetScreenNavigateRequest;

export type Response =
  | GetDeviceInfoResponse
  | GetUserInfoResponse
  | ScanQRResponse
  | SetBackButtonStatusResponse
  | SetStatusBarResponse
  | SetNavigationGoBackResponse
  | SetMiniAppInfoResponse
  | SetListWorkspaceStatusResponse
  | SetSettingResponse
  | SelectImageVideoResponse
  | RecordVideoResponse
  | SetScreenNavigateResponse;

export {RequestType, ResponseType} from './base-type';
export * from './device-info';
export * from './user-info';
export * from './scan-qr';
export * from './mini-app-info';
export * from './select-image-video';
