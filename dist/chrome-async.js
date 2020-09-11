export default function chromeAsync(fn) {
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
//# sourceMappingURL=chrome-async.js.map