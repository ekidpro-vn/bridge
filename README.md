![ekidpro](./documents/image.png 'eKidPro Logo')

# Bridge to communicate with mobile application.

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts) [![npm version](https://img.shields.io/npm/v/@ekidpro/bridge)](https://www.npmjs.com/package/@ekidpro/bridge)

## Mục lục

- Tạo application trong app
- Cấu hình CRA
- Cài đặt SDK
- Test tích hợp với app
- Usage

## Tạo application trong app

// TODO

1. Cho phép tạo workspace với cms
2. Cho phép tạo, invite, assign role cho new user
3. Gắn application cho workspace
4. Tạo application, set app public hoặc visible cho các workspace cụ thể
5. ...

## Cấu hình CRA

1. Tạo mới project

- Tạo mới project với CRA theo [LINK](https://www.google.com)

- Thêm homepage vào trong package.json thành:

  ```
  {
    ...
    "homepage": "."
    ...
  }
  ```

- Nếu trong project đang sử dụng [React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) vui lòng sử dụng `HashRouter` thay cho `BrowserRouter`

```
$ import { HashRouter } from "react-router-dom";
```

- Xuất project để upload lên cms:

```
$ npm run build

OR

$ yarn build
```

Sau đó zip folder build rồi up lên CMS

// TODO: Hướng dẫn up build lên cms

## Cài đặt SDK

```
$ npm install --save @ekidpro/web
```

Hoặc

```
$ yarn add @ekidpro/web
```

## Test tích hợp với app

// TODO:

- Download application từ AppStore/PlayStore
- Nhập link đường dẫn vào trong app

## Usage

1. Lắng nghe sự kiện từ app truyền vào

```js
import { controller } from '@ekidpro/web'
...
controller.start()

...
controller.stop()

...
```

Example:

```
useEffect(() => {
  controller.start();

  return () => {
    controller.stop();
  };
}, []);
```

2. Lắng nghe event

// TODO: Danh sách event sẽ được cập nhật sau

```js
import {Listener} from '@ekidpro/web';

const listener = Listener.start();

listener.onNetworkChange = e => {
  console.log(e);
};

listener.onOrientationChange = e => {
  console.log(e);
};
```

Example:

```
useEffect(() => {
  const listener = Listener.start();

  listener.onNetworkChange = (e) => {
    console.log(e);
  };

  listener.onOrientationChange = (e) => {
    console.log(e);
  };

  return () => listener.stop();
}, []);
```

3. Gửi yêu cầu lấy dữ liệu

```js
import {command} from '@ekidpro/web';
```

- command.device.getDeviceInfo() => Promise<DeviceInfo>

- command.userinfo.getUserInfo() => Promise<UserInfo>

- command.userinfo.scanQr() => Promise<string>

- command.device.setButtonStatus() => Promise<'show' | 'hidden'>

- command.device.setStatusBarStyle() => Promise<'default' | 'light-content' | 'dark-content'>

- command.device.goBack() => Promise<boolean>

* // TODO: getUserInfo()
