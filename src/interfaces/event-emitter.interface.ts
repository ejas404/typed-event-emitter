export interface ListenerFn {
  (...values: any[]): void;
}

export interface OnOptions {
    async?: boolean,
    promisify?: boolean,
    nextTick?: boolean,
    objectify?: boolean
}
