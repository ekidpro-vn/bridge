import {Request, Response} from '../types';

declare let window: Window;

type RequestMap = {
  [id: string]: (data: Response | undefined, error?: Error) => void;
};

type TimeoutMap = {
  [id: string]: ReturnType<typeof setTimeout>;
};

class Controller {
  requests: RequestMap;
  timeouts: TimeoutMap;

  constructor() {
    this.requests = {};
    this.timeouts = {};
  }

  public start = () => {
    window.addEventListener('ekp.message', this.obseve);
  };

  public stop = () => {
    window.removeEventListener('ekp.message', this.obseve);
  };

  public request<T extends Response>(request: Request): Promise<T> {
    return new Promise((resolve, reject) => {
      const error = this.add(request, data => {
        if (data instanceof Error) {
          reject(data as Error);
        } else {
          resolve(data as T);
        }
      });

      if (error instanceof Error) {
        reject(error);
      } else {
        error.catch((error: Error) => reject(error));
      }
    });
  }

  private obseve = (input: Event) => {
    console.log(49, input);
    const tmp = input as CustomEvent;
    const {detail} = tmp;

    if (typeof detail === 'undefined' || detail === null) {
      return;
    }

    const id = detail.id as string;

    delete this.timeouts[id];
    const callback = this.requests[id];
    if (callback) {
      callback(detail as Response);
      delete this.requests[id];
    }
  };

  private add = (
    request: Request,
    callback: (data: Response | undefined, error?: Error) => void
  ): Error | Promise<void> => {
    const {id} = request;

    if (this.requests[id]) {
      return new Error(`Request Id is exist. Please choose another one: ${id}`);
    }

    this.timeouts[id] = setTimeout(() => {
      const currentCallback = this.requests[id];
      if (currentCallback) {
        currentCallback(undefined, new Error(`Request timeout for id: ${id}`));
        delete this.requests[id];
      }

      const timeoutChecking = this.timeouts[id];
      if (timeoutChecking) {
        clearTimeout(timeoutChecking);
        delete this.timeouts[id];
      }
    }, 30000);

    this.requests[id] = callback;

    return this.postMessage(request);
  };

  private postMessage = (data: Request): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const message = JSON.stringify(data);

          if (window && window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(message);
          }

          resolve();
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
  };
}

export const controller = new Controller();
