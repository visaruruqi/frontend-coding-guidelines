# 7.2 Pure Functions
Functions should avoid side effects and return the same output for the same input.

```js
function add(a, b) {
  return a + b
}
```

An impure function relies on external state like the current time:

```js
function stamp(message) {
  return `${Date.now()}: ${message}`
}
```

To make it pure, inject the changing value so the same input produces the same output:

```js
function stamp(message, timestamp) {
  return `${timestamp}: ${message}`
}
```

Pure functions are deterministic, so tests can call them with fixed inputs and assert on exact outputs without mocking global state.

