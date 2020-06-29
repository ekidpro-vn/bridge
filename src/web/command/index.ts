import {getDeviceInfo} from './device-info';
import {getUserInfo} from './user-info';
import {scanQr} from './scan-qr';

export default {
  device: {
    getDeviceInfo,
    scanQr,
  },
  userinfo: {
    getUserInfo,
  },
};
