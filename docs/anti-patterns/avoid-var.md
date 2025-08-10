# 8.1 Avoid `var`
`var` has function scope and can lead to bugs. Use `let` or `const` instead.

```js
// Avoid
var count = 0

// Prefer
let count = 0
```

