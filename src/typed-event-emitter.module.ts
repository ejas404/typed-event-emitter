import { EventEmitterModule } from "@nestjs/event-emitter";
import { TypedEventEmitter } from "./typed-event-emitter.service";
import { DynamicModule, Global, Module } from "@nestjs/common";
import { EventEmitterModuleOptions } from "@nestjs/event-emitter/dist/interfaces";

@Global()
@Module({})
export class TypedEventEmitterModule {
    static forRoot(args: EventEmitterModuleOptions): DynamicModule {
        return {
            module: TypedEventEmitterModule,
            providers: [TypedEventEmitter],
            exports: [TypedEventEmitter],
            imports: [EventEmitterModule.forRoot(args)],
        };
    }
}
