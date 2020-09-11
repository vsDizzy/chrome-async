export default function chromeAsync<T>(
  fn: (callback: (arg: unknown) => void) => void
) {
  let resolve: (value?: unknown) => void;
  let reject: (reson?: any) => void;
  const res = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  fn((arg) => {
    const error = chrome.runtime.lastError;
    error ? reject(error) : resolve(arg);
  });
  return res;
}
