import React, {useEffect, useState} from 'react';
import QrCodeReact from 'qrcode.react';

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

  if (localIp === '') {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const {protocol, port, hash, pathname} = window.location;
  const localPath = `${protocol}//${localIp}:${port}${pathname}${hash}`;
  const qrUrl = `ekpapp://debug?url=${localPath}`;

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
