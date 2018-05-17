# chrome-async

An async wrapper for chrome. Useful when developing a [chrome extension](https://developer.chrome.com/extensions).

## Installing

```sh
npm i -D chrome-async
```

or

```sh
yarn add -D chrome-async
```

## Usage

Replace the callback parameter with `null` and function will return a `Promise` instead.

## Example

```ts
import chromeAsync from 'chrome-async';

const tab: chrome.tabs.Tab = await chromeAsync.tabs.create({ url: 'about:blank', active: true }, null) as any;
```
