# 3.3 Semicolons
Always include semicolons to avoid issues with automatic insertion.

```js
const total = getTotal();
```

Automatic semicolon insertion can cause bugs. For example, returning an object
literal without a semicolon on the previous line results in `undefined`:

```js
function getObject() {
  return
  {
    value: 42
  };
}

getObject(); // returns undefined
```

Enforce semicolon usage with ESLint:

```json
// .eslintrc.json
{
  "rules": {
    "semi": ["error", "always"]
  }
}
```

