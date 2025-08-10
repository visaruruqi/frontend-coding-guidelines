# 5.5 Default Parameters
Provide defaults in function signatures instead of inside the body.

```js
function greet(name = 'Guest') {
  return `Hi ${name}`
}
```

