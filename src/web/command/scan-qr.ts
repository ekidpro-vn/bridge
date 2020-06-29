import {controller} from '../controller';
import {v4 as uuid} from 'uuid';
import {ScanQRChannel} from '../../types';

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
