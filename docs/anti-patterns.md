# 8. Anti-Patterns

## 8.1 Avoid `var` {#avoid-var}
`var` has function scope and can lead to bugs. Use `let` or `const` instead.

```js
// Avoid
var count = 0

// Prefer
let count = 0
```

## 8.2 Avoid Deep Nesting {#avoid-deep-nesting}
Refactor deeply nested code into smaller functions to improve readability.

```js
if (!user) return
if (!user.isActive) return
process(user)
```

## 8.3 Magic Numbers & Strings {#magic-numbers}
Replace unexplained literals with named constants.

```js
const MAX_ITEMS = 10
```

## 8.4 Overusing Global Variables {#global-variables}
Limit global state and prefer module exports or dependency injection.

```js
// Bad
window.total = 0

// Good
export const total = 0
```

## 8.5 Callback Hell {#callback-hell}
Use promises or `async/await` to flatten complex asynchronous code.

```js
doFirst()
  .then(doSecond)
  .then(doThird)
```
