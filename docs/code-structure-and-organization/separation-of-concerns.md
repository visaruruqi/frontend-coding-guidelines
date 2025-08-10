# 6.3 Separation of Concerns
Each module or component should handle a single responsibility.

```js
function fetchUser(id) {
  return api.get(`/users/${id}`)
}

function renderUser(user) {
  userElement.textContent = user.name
}
```

