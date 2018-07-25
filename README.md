# react-light-notifications

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

💡 Note: This project is a modified version of [react-notifications](https://github.com/minhtranite/react-notifications).

<div style="text-align:center;">
<img src="https://raw.githubusercontent.com/farbodsalimi/react-light-notifications/master/demo/src/demo.png" width="450"/>
</div>

[LIVE DEMO](https://farbodsalimi.github.io/react-light-notifications/demo/dist/)

## Installation

```bash
yarn add react-light-notifications
```

or

```bash
npm i react-light-notifications
```

## Example
```jsx
import {
  NotificationContainer,
  NotificationManager
} from "react-light-notifications";
import "react-light-notifications/lib/main.css";

const App = () => (
  <div>
    <button
      onClick={() => {
        NotificationManager.info({
          title: 'Information Title',
          message: 'Information message',
          onClick: () => {
            console.log('Clicked on the notification');
          }
        });
      }}
    >
      Info
    </button>

    <NotificationContainer />
  </div>
);

export default App;
```

## Notification Types

```javascript
NotificationManager.success({
  title: 'Success Title',
  message: 'Success message'
});

NotificationManager.error({
  title: 'Error Title',
  message: 'Error message'
});

NotificationManager.info({
  title: 'Info Title',
  message: 'Info message'
});

NotificationManager.warning({
  title: 'Warning Title',
  message: 'Warning message'
});
```

### Custom

```javascript
NotificationManager.custom({
  title: 'Custom Title',
  message: 'Custom message',
  bgColor: 'purple',
  iconClassName: 'custom-icon'
});
```

## Options

| Name  | Type  | Default |
| :---: | :---: | :---:   |
| title | string | null |
| message | string | null |
| showCloseButton | bool | true |
| timeOut | number | 5000 |
| priority | bool | false|
| onClick | function | empty|

The following options are only available on `custom` type:

| Name  | Type  | Default |
| :---: | :---: | :---:   |
| bgColor | string | null |
| iconClassName | string | null |

**Example:**

```javascript
/**
 *
 * @param {object} options
 * @param {string} options.title
 * @param {string} options.message
 * @param {bool} options.showCloseButton
 * @param {bool} options.timeOut
 * @param {bool} options.priority
 * @param {function} options.onClick
 * @param {function} options.bgColor
 * @param {function} options.iconClassName
 */
NotificationManager.custom({
  title: 'Custom Title',
  message: 'Custom message',
  showCloseButton: true,
  timeout:400,
  priority: false,
  bgColor: 'purple',
  iconClassName: 'custom-icon',
  onClick: () => {
    console.log('NOTIFICATION ON CLICK');
  }
});

```
