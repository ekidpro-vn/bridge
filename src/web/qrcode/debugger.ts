import io, {Socket} from 'socket.io-client';

let socket: typeof Socket | undefined;

export const startDebugger = (ip: string) => {
  stopDebugger();

  socket = io(`http://${ip}:8899`, {
    reconnection: true,
    reconnectionDelay: 5000,
    reconnectionDelayMax: 15000,
  });

  socket.on('connect', () => {
    console.log = (...rest: any[]) => {
      socket?.emit('debug-web', {log: rest});
    };

    console.debug = (...rest: any[]) => {
      socket?.emit('debug-web', {debug: rest});
    };

    console.error = (...rest: any[]) => {
      socket?.emit('debug-web', {error: rest});
    };
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnect');
  });
};

export const stopDebugger = () => {
  if (socket) {
    socket.close();
  }
};
