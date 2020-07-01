import {Listener} from './listener';

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (_: string) => void;
    };
    ekp: {
      listener?: Listener;
      inset?: {
        top: number;
        left: number;
        bottom: number;
        right: number;
      };
    };
    webkitRTCPeerConnection: any;
    mozRTCPeerConnection: any;
  }
}

export {Listener, NetworkChange} from './listener';
export {controller} from './controller';
export {default as command} from './command';
export {QrGenerator} from './qrcode';
export {Link} from './link';
