## Nest JS Typed Event Emitter 🛟🦺

An abstraction for nestjs `EventEmitter2` with type safety.

Emitting event types will be checked with the registered `eventName` and `EventClass`.

## Usage

You can use this module in two ways:

### Option 1: Install from npm (recommended for most users)

```bash
npm install nestjs-typed-event-emitter
# or
yarn add nestjs-typed-event-emitter
```

### Option 2: Use the CLI Export Script

Export all necessary files into your project with a single command:

```bash
npx nestjs-typed-event-emitter-export
```

### Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install @nestjs/event-emitter
```

## Setup

### 1. Setup the Module

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { TypedEventEmitterModule } from 'typed-event-emitter';

@Module({
  imports: [
    TypedEventEmitterModule.forRoot({
      // EventEmitter2 options
    }),
  ],
})
export class AppModule {}
```

### 2. Create event type map.

```ts
interface CreateEvent {
  id: string;
  name: string;
}

interface UpdateEvent {
  name: string;
}

export interface EventMap {
  'event.create': CreateEvent;
  'event.update': UpdateEvent;
}
```

### 3 Use the `EventMap` while injecting `TypedEventEmitter`.

```ts

import { TypedEventEmitter } from 'typed-event-emitter';
import { EventMap } from '../file-where-event-map-exported';

export class WebhooksService {
    private readonly logger = new Logger(WebhooksService.name);
    constructor(
        private readonly eventEmitter: TypedEventEmitter<EventMap>; // use it here.
    ) {}

    // Wrong ❌, type script will show error for requred fields.

     processCreateEvent(id : string, name : string) {

        // ❌❌❌ Types script shows error for invalid event name
        this.eventEmitter.emit("event.c", {
           name : name
        });
    }

    // Correct one ✅✅✅

    processCreateEvent(id : string, name : string) {

        this.eventEmitter.emit("event.create", {
           id : id,
           name : name
        });
    }

...//Rest of the code
}
```

For listening events you should use `OnTypedEvent` decorator, it will provide type safety for the type.

```ts
import { OnTypedEvent } from 'typed-event-emitter';
import { EventMap } from '../file-where-event-map-exported';

@Injectable()
export class TransactionsListener {
  private readonly logger = new Logger(TransactionsListener.name);

  constructor(private readonly createUser: CreateUserService) {}

  // If the event name of event type doesn't match, typescript will show error.
  @OnTypedEvent<EventMap>('event.create', { async: true })
  async handleWebhookEvent(data: EventMap['event.create']): Promise<void> {
    this.logger.log(`🎧🎧🎧 Received webhook event`);
    await this.createUser.create(data);
  }
}
```

Note: You can define and use different EventMap types to handle various sets of events separately.

```ts
import { TypedEventEmitter } from "typed-event-emitter";

constructor(private readonly eventEmitter1 : TypedEventEmitter<EventMap1>) {}

constructor(private readonly eventEmitter2 : TypedEventEmitter<EventMap2>) {}

Same on the decorator too.

// You can listen or emit from event like this also.
 @OnTypedEvent<EventMap1>('event.transaction', { async: true })
 @OnTypedEvent<EventMap2>('event.order', { async: true })


```

## API Reference

### TypedEventEmitter

#### Methods

- `emit<TEvent extends keyof TypedEventMap>(event: TEvent, payload: TypedEventMap[TEvent]): boolean` - Emit a typed event
- `emitAsync<TEvent extends keyof TypedEventMap>(event: TEvent, payload: TypedEventMap[TEvent]): Promise<unknown>` - Emit a typed event asynchronously
- `on<TEvent extends keyof TypedEventMap>(event: TEvent, listener: (payload: TypedEventMap[TEvent]) => void | Promise<void>): this` - Register a listener for a typed event
- `eventNames(): (keyof TypedEventMap)[]` - Get all registered event names
- `removeListener<TEvent extends keyof TypedEventMap>(event: TEvent, listener: (payload: TypedEventMap[TEvent]) => void | Promise<void>): this` - Remove a specific listener for a typed event
- `removeAllListeners<TEvent extends keyof TypedEventMap>(event?: TEvent): this` - Remove all listeners for a typed event

### Decorators

- `@OnTypedEvent<TypedEventMap>(event: keyof TypedEventMap, options?)` - Type-safe event listener decorator

### Interfaces

- `TypedEventMap` - Map of event names to their classes
- `RegisteredEventNames` - Union type of all registered event names
- `RegisteredEventTypes` - Union type of all registered event classes

## Features

- 🔒 **Type Safety**: Full TypeScript support with compile-time type checking
- 🎯 **NestJS Integration**: Seamless integration with NestJS dependency injection
- 🚀 **Easy to Use**: Simple API that extends the familiar EventEmitter pattern
- 📝 **IntelliSense Support**: Full IDE autocomplete and type hints
- 🔧 **Flexible**: Support for custom event maps and dynamic event registration
- 🤖 **Auto Type Inference**: Automatically detect and infer event types from your project structure

Thats all, poyirunnu paniyedukku.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
