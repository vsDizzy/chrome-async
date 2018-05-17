const chromeAsync = createProxy(chrome) as typeof chrome;
export default chromeAsync;

function createProxy(targetObj) {
  const cache = [];
  return new Proxy(targetObj, {
    apply: (target, thisArg, argumentsList: any[]) =>
      !argumentsList.length || argumentsList[argumentsList.length - 1]
        ? target.apply(thisArg, argumentsList)
        : new Promise((resolve, reject) => {
          argumentsList[argumentsList.length - 1] = (...args) => {
            const error = chrome.runtime.lastError;
            return error ? reject(error) : resolve(...args);
          };
          target.apply(thisArg, argumentsList);
        }),
    get: (target, property, receiver) => cache[property] || (cache[property] = createProxy(target[property])),
  });
}
