// src/decorators/on-typed-event.decorator.ts
import { OnEvent } from '@nestjs/event-emitter';
import { OnEventOptions } from '@nestjs/event-emitter/dist/interfaces';

export function OnTypedEvent<TypedEventMap>(
  event: keyof TypedEventMap,
  options?: OnEventOptions
): (
  target: object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(payload: TypedEventMap[typeof event]) => any | Promise<any>>
) => any {
  return (target, propertyKey, descriptor) => {
    return OnEvent(event as any, options)(target, propertyKey, descriptor);
  };
}
