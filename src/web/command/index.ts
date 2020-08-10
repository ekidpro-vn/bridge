import {
  getDeviceInfo,
  setButtonStatus,
  setStatusBarStyle,
  goBack,
} from './device-info';
import {getUserInfo} from './user-info';
import {scanQr} from './scan-qr';
import {login, getUserInfo as fetchUserInfo, reset} from './remote';

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
  remote: {
    login,
    fetchUserInfo,
    reset,
  },
};
