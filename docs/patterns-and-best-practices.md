# 7. Patterns & Best Practices

## 7.1 DRY & Avoiding Repetition {#dry}
Extract common code into reusable functions to keep logic in one place.

## 7.2 Pure Functions {#pure-functions}
Functions should avoid side effects and return the same output for the same input.

## 7.3 Immutability {#immutability}
Prefer immutable data structures. Instead of mutating arrays, return new ones.

```js
const updated = [...items, newItem]
```

## 7.4 Error Handling {#error-handling}
Handle errors with `try/catch` or promise rejections and provide helpful messages.

## 7.5 Async/Await vs Promises {#async-await-vs-promises}
Use `async/await` for readability while still understanding underlying promises.

## 7.6 Event Handling {#event-handling}
Detach listeners when components unmount and keep handler names descriptive.

## 7.7 Data Validation {#data-validation}
Validate external data at boundaries to prevent unexpected behavior.
