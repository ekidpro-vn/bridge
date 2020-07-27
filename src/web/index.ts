import {Listener} from './listener';
import {Emitter} from './emitter/emitter';

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
      emitter?: Emitter;
      deeplink?: string;
    };
    webkitRTCPeerConnection: any;
    mozRTCPeerConnection: any;
  }
}

export {EmitterEvents} from './emitter/emitter-events';
export {Listener, NetworkChange} from './listener';
export {controller} from './controller';
export {default as command} from './command';
export {QrGenerator} from './qrcode';
export {Link} from './link';
