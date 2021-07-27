import {ResponseType, RequestType} from './base-type';

export const ScanQRChannel = 'CHANNEL_GET_SCAN_QR_INFO';

export type ScanQRRequest = RequestType<typeof ScanQRChannel>;

export type ScanQRResponse = ResponseType<typeof ScanQRChannel, string>;

export const CheckinSelfiChannel = 'CHANNEL_GET_CHECKIN_SELFI';

export type CheckinSelfiRequest = RequestType<typeof CheckinSelfiChannel>;

export type CheckinSelfiResponse = ResponseType<
  typeof CheckinSelfiChannel,
  string
>;

export const CameraTypeChannel = 'CHANNEL_GET_CAMERA_TYPE';

export type CameraTypeRequest = RequestType<typeof CameraTypeChannel>;

export type CameraTypeResponse = ResponseType<
  typeof CameraTypeChannel,
  string | 'back'
>;
