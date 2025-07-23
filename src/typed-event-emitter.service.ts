import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ListenerFn, OnOptions } from './interfaces/event-emitter.interface';

type EventNamesRes = ReturnType<EventEmitter2['eventNames']>;
type EmitRes = ReturnType<EventEmitter2['emit']>;
type EmitAsyncRes = ReturnType<EventEmitter2['emitAsync']>;
type OnRes = ReturnType<EventEmitter2['on']>;

@Injectable()
export class TypedEventEmitter<TypedEventMap> {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emit<K extends keyof TypedEventMap>(event: K, payload: TypedEventMap[K]): EmitRes {
    return this.eventEmitter.emit(event as string, payload);
  }

  emitAsync<K extends keyof TypedEventMap>(event: K, payload: TypedEventMap[K]): EmitAsyncRes {
    return this.eventEmitter.emitAsync(event as string, payload);
  }

  on<K extends keyof TypedEventMap>(event: K, listener: ListenerFn, options: OnOptions): OnRes {
    return this.eventEmitter.on(event as string, listener, options);
  }

  eventNames(): EventNamesRes {
    return this.eventEmitter.eventNames();
  }

  removeListener<TEvent extends keyof TypedEventMap>(event: TEvent, listener: ListenerFn): this {
    this.eventEmitter.removeListener(event as string, listener);
    return this;
  }

  removeAllListeners<TEvent extends keyof TypedEventMap>(event?: TEvent): this {
    this.eventEmitter.removeAllListeners(event as string);
    return this;
  }
}
