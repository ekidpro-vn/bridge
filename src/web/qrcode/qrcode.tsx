import React, {useEffect, useState} from 'react';
import QrCodeReact from 'qrcode.react';
import io, {Socket} from 'socket.io-client';

declare let window: Window;
import {getLocalIP} from './get-local-ip';

export const QrGenerator: React.FC = () => {
  const [localIp, setLocalIp] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getLocalIP()
      .then(val => {
        if (val) {
          setLocalIp(val);
        } else {
          throw new Error('Invalid ip address');
        }
      })
      .catch(err => setError(err));
  }, []);

  useEffect(() => {
    if (
      localIp === '' ||
      typeof window.ekp.isMobile === 'undefined' ||
      !window.ekp.isMobile
    ) {
      return () => {};
    }

    const socket = io(`http://${localIp}:8899`, {
      reconnection: true,
      reconnectionDelay: 5000,
      reconnectionDelayMax: 15000,
    });

    socket.on('connect', () => {
      console.log = (...rest: any[]) => {
        socket.emit('debug-web', {log: rest});
      };

      console.debug = (...rest: any[]) => {
        socket.emit('debug-web', {debug: rest});
      };

      console.error = (...rest: any[]) => {
        socket.emit('debug-web', {error: rest});
      };
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnect');
    });

    return () => {
      socket.close();
    };
  }, [localIp]);

  if (localIp === '') {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const {protocol, port, hash, pathname} = window.location;
  const localPath = `${protocol}//${localIp}:${port}${pathname}${hash}`;
  const qrUrl = `ekpapp://debug?url=${localPath}&debugger=${localIp}:8899`;

  console.log(64, qrUrl);

  return (
    <div>
      <QrCodeReact
        value={qrUrl}
        style={{backgroundColor: 'white', padding: 12}}
      />
      <br />
      Scan on your mobile app to debug
    </div>
  );
};
