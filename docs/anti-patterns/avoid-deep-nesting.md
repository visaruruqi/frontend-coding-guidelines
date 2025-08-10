# 8.2 Avoid Deep Nesting
Refactor deeply nested code into smaller functions to improve readability.

```js
if (!user) return
if (!user.isActive) return
process(user)
```

