import {Listener} from './listener';

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (_: string) => void;
    };
    ekp: {
      listener?: Listener;
    };
  }
}

export {Listener, NetworkChange} from './listener';
export {controller} from './controller';
export {default as command} from './command';
