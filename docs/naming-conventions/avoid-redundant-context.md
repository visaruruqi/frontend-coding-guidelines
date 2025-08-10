# 4.8 Avoid Redundant Context
Omit repeated context when the surrounding scope already makes the meaning
clear.

```js
// Inside a user object
const user = {
  name: 'Ada', // not userName
}

// Items inside a userList
const userList = []
userList.forEach(user => {
  // not userListItem
})
```
