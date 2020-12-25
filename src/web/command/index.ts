import {
  getDeviceInfo,
  setButtonStatus,
  setStatusBarStyle,
  goBack,
} from './device-info';
import {setMiniAppInfo, setListWorkspaceStatus} from './mini-app-info';
import {getUserInfo, setSetting} from './user-info';
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
    setSetting,
  },
  remote: {
    login,
    fetchUserInfo,
    reset,
  },
  miniappinfo: {
    setMiniAppInfo,
    setListWorkspaceStatus,
  },
};
