# 7.1 DRY & Avoiding Repetition
Extract common code into reusable functions to keep logic in one place.

```js
function formatName(user) {
  return `${user.first} ${user.last}`
}

console.log(formatName(userA))
console.log(formatName(userB))
```

