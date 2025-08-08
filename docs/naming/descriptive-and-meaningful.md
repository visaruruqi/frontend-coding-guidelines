# Descriptive and Meaningful

Use clear names that explain exactly what the variable, function, or class represents or does. Seeing the name should immediately reveal its purpose.

```js
// Bad
const x = 10
const data = fetch()

// Good
const userAge = 10
function fetchData() {}
```

Functions should always start with a verb, for example `getUser` or `fetchData`.
