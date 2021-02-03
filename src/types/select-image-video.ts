import {ResponseType, RequestType} from './base-type';

export const SelectImageVideoChannel = 'CHANNEL_GET_IMAGE_VIDEO_INFO';

export type SelectImageVideoRequest = RequestType<
  typeof SelectImageVideoChannel
>;

export type SelectImageVideoResponse = ResponseType<
  typeof SelectImageVideoChannel,
  string
>;

export const RecordVideoChannel = 'CHANNEL_GET_RECORD_VIDEO_INFO';

export type RecordVideoRequest = RequestType<typeof RecordVideoChannel>;

export type RecordVideoResponse = ResponseType<
  typeof RecordVideoChannel,
  string
>;
