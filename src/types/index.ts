import {GetDeviceInfoRequest, GetDeviceInfoResponse} from './device-info';
import {GetUserInfoRequest, GetUserInfoResponse} from './user-info';

export type Request = GetDeviceInfoRequest | GetUserInfoRequest;
export type Response = GetDeviceInfoResponse | GetUserInfoResponse;

export {RequestType, ResponseType} from './base-type';
export * from './device-info';
export * from './user-info';
