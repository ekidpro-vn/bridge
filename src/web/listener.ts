import {Emitter} from './emitter/emitter';

declare let window: Window;

export class Listener {
  public onShakeDevice?: () => void;
  public onNetworkChange?: (event: NetworkChange) => void;
  public onOrientationChange?: (orientation: DeviceOrientation) => void;
  public onLocationChange?: () => void;

  public startLocationService?: () => void;
  public stopLocationService?: () => void;

  static start = (): Listener => {
    if (typeof window.ekp === 'undefined' || window.ekp === null) {
      window.ekp = {};
    }

    window.ekp.listener = new Listener();
    window.ekp.emitter = new Emitter();
    return window.ekp.listener;
  };

  public stop = () => {
    window.ekp.listener = undefined;
    if (window.ekp.emitter) {
      window.ekp.emitter.destroy();
    }
  };
}

export type DeviceOrientation = 'portrait' | 'landscape';

export type NetworkChange = {
  isConnected: boolean;
  isInternetReachable: boolean;
  type:
    | 'unknown'
    | 'none'
    | 'cellular'
    | 'wifi'
    | 'bluetooth'
    | 'ethernet'
    | 'wimax'
    | 'vpn'
    | 'other';
};
