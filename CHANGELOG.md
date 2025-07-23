# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-XX

### Added
- Initial release of @ejas404/typed-event-emitter
- TypedEventEmitter service with full type safety
- OnTypedEvent decorator for type-safe event listeners
- TypedEventEmitterModule for NestJS integration
- Automatic type inference from event definitions
- Static access to event maps and classes
- Complete TypeScript support with IntelliSense
- Comprehensive documentation and setup guide
- Example project demonstrating usage
- Support for @events/* path configuration

### Features
- 🔒 Type Safety: Full TypeScript support with compile-time type checking
- 🎯 NestJS Integration: Seamless integration with NestJS dependency injection
- 🚀 Easy to Use: Simple API that extends the familiar EventEmitter pattern
- 📝 IntelliSense Support: Full IDE autocomplete and type hints
- 🔧 Flexible: Support for custom event maps and dynamic event registration
- 🤖 Auto Type Inference: Automatically detect and infer event types from project structure

### Documentation
- README.md with comprehensive usage examples
- SETUP.md with detailed setup instructions
- PUBLISHING.md with publishing guidelines
- Examples directory with working code samples
- Inline code documentation and type definitions

### Technical Details
- Built with TypeScript 5.1.3
- Compatible with NestJS 10.x
- Requires @nestjs/event-emitter 3.x
- Full declaration files and source maps included
- Proper peer dependency management