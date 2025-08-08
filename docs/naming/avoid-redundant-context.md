# Avoid Redundant Context in Names

Don't include extra words in a name if the meaning is already clear from where or how the variable is used.

```js
// inside a user object
const user = {
  name: 'Ada'
}
// use user.name instead of user.userName
```

```js
const userList = []
// items inside should be called users, not userListItems
for (const user of userList) {
  // ...
}
```

Keep names short but clear—don't repeat yourself.
