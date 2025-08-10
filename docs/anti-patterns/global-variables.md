# 8.4 Overusing Global Variables
Limit global state and prefer module exports or dependency injection.

```js
// Bad
window.total = 0

// Good
export const total = 0
```

