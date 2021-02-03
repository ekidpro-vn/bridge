import {controller} from '../controller';
import {v4 as uuid} from 'uuid';
import {SelectImageVideoChannel, RecordVideoChannel} from '../../types';

export const selectImageVideo = async (): Promise<string> => {
  const data = await controller.request({
    id: uuid(),
    channel: SelectImageVideoChannel,
  });

  if (typeof data.data === 'string') {
    return data.data as string;
  } else {
    throw new Error('Invalid type of select image/video Result');
  }
};

export const recordVideo = async (): Promise<string> => {
  const data = await controller.request({
    id: uuid(),
    channel: RecordVideoChannel,
  });

  if (typeof data.data === 'string') {
    return data.data as string;
  } else {
    throw new Error('Invalid type of record video Result');
  }
};
