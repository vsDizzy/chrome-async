export function chromeAsync(fn) {
    let resolve;
    let reject;
    const res = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    fn((arg) => {
        const error = chrome.runtime.lastError;
        error ? reject(error) : resolve(arg);
    });
    return res;
}
const r = chromeAsync((cb) => chrome.tabs.create({ url: 'about:blank' }, cb));
//# sourceMappingURL=chrome-async.js.map