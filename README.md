# use-navigator-online
[![size](https://img.shields.io/bundlephobia/minzip/use-navigator-online)](https://bundlephobia.com/result?p=use-navigator-online)
[![dependencies](https://img.shields.io/librariesio/release/npm/use-navigator-online)](https://libraries.io/npm/use-navigator-online)
[![build](https://img.shields.io/travis/com/cansin/use-navigator-online)](https://travis-ci.com/github/cansin/use-navigator-online)
[![downloads](https://img.shields.io/npm/dm/use-navigator-online)](https://www.npmjs.com/package/use-navigator-online)
[![license](https://img.shields.io/github/license/cansin/use-navigator-online)](https://github.com/cansin/use-navigator-online/blob/master/LICENSE)

React Hooks to detect when your browser is online/offline using
[window.navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine).

## Install

```bash
yarn add use-navigator-online
```

## Basic Usage

Update or create `next.config.js` with

```js
import useNavigatorOnline from "use-navigator-online";

function Component() {
  const { isOnline, isOffline, backOnline, backOffline } = useNavigatorOnline();

  useEffect(() => {
    // Do something when network is back online.
  }, [backOnline]);

  useEffect(() => {
    // Do something when network goes offline.
  }, [backOffline]);

  return (
    <p>
      {isOnline ? "online" : "not online"}{" "}
      {isOffline ? "offline" : "not offline"}
    </p>
  );
}
```

### Available Return Values

- **isOnline:** boolean - `true` when online, `false` otherwise.
- **isOffline:** boolean - `true` when offline, `false` otherwise.
- **backOnline:** boolean - `true` when network status changes from offline to online,
  `false` otherwise.
- **backOffline:** boolean - `true` when network status changes from online to offline,
  `false` otherwise.
