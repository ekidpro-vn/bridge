import {
  getDeviceInfo,
  setButtonStatus,
  setStatusBarStyle,
  goBack,
} from './device-info';
import {getUserInfo} from './user-info';
import {scanQr} from './scan-qr';

export default {
  device: {
    getDeviceInfo,
    scanQr,
    setButtonStatus,
    setStatusBarStyle,
    goBack,
  },
  userinfo: {
    getUserInfo,
  },
};
