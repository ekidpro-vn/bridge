import {ResponseType, RequestType} from './base-type';

export const ScanQRChannel = 'CHANNEL_GET_SCAN_QR_INFO';

export type ScanQRRequest = RequestType<typeof ScanQRChannel>;

export type ScanQRResponse = ResponseType<typeof ScanQRChannel, string>;
