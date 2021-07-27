import {controller} from '../controller';
import {v4 as uuid} from 'uuid';
import {
  CameraTypeChannel,
  CheckinSelfiChannel,
  ScanQRChannel,
} from '../../types';

export const scanQr = async (): Promise<string> => {
  const data = await controller.request({
    id: uuid(),
    channel: ScanQRChannel,
  });

  if (typeof data.data === 'string') {
    return data.data as string;
  } else {
    throw new Error('Invalid type of Qr Result');
  }
};

export const checkinSelfi = async (): Promise<string> => {
  const data = await controller.request({
    id: uuid(),
    channel: CheckinSelfiChannel,
  });

  if (typeof data.data === 'string') {
    return data.data as string;
  } else {
    throw new Error('Invalid type of CheckinSelfi result');
  }
};

export const getCameraType = async (): Promise<string> => {
  const data = await controller.request({
    id: uuid(),
    channel: CameraTypeChannel,
  });

  if (typeof data.data === 'string') {
    return data.data as string;
  } else {
    throw new Error('Invalid type of CameraType result');
  }
};
