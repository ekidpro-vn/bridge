import {EmitterEvents} from './emitter-events';

type Callback = (data: any) => void;

export class Emitter {
  handlers: {[key: string]: Callback[]};

  constructor() {
    this.handlers = {};
  }

  events = (): string[] => {
    return Object.keys(this.handlers);
  };

  add = (channel: EmitterEvents, func: Callback) => {
    const currentArray = this.handlers[channel] || [];
    if (currentArray.includes(func)) {
      return;
    }

    this.handlers = {
      ...this.handlers,
      [channel]: [...currentArray, func],
    };
  };

  remove = (channel: EmitterEvents, func: Callback) => {
    const currentArray = this.handlers[channel] || [];

    if (!currentArray.includes(func)) {
      return;
    }

    this.handlers = {
      ...this.handlers,
      [channel]: currentArray.filter(obj => obj !== func),
    };
  };

  emit = (channel: EmitterEvents, data: any) => {
    const current = this.handlers[channel] || [];
    current.forEach(func => {
      if (typeof func === 'function') {
        func(data);
      }
    });
  };

  destroy = () => {
    this.handlers = {};
  };
}
