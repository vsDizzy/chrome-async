export default function chromeAsync<T>(fn: (callback: (arg: unknown) => void) => void): Promise<T>;
