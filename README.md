# chrome-async

An async wrapper for chrome. Useful when developing a [chrome extension](https://developer.chrome.com/extensions).

## Installing

```sh
npm i chrome-async
```

## Usage

Wrap `chrome` call with the `chromeAsync` function and pass `callback` argiment as the call parameter:

```ts
import chromeAsync from 'chrome-async';

const tab = await chromeAsync<chrome.tabs.Tab>((callback) =>
  chrome.tabs.create({ url: 'about:blank', active: true }, callback)
);
```
