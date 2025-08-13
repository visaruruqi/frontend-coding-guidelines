# 8.5 Callback Hell
Use promises or `async/await` to flatten complex asynchronous code.

```js
doFirst()
  .then(doSecond)
  .then(doThird)
```

Nested callbacks can quickly become unreadable:

```js
getUser(id, function (err, user) {
  if (err) return handleError(err)
  getPosts(user, function (err, posts) {
    if (err) return handleError(err)
    sendEmail(user, posts, function (err) {
      if (err) handleError(err)
    })
  })
})
```

Refactor using `async/await` for a clearer flow:

```js
async function main() {
  try {
    const user = await getUser(id)
    const posts = await getPosts(user)
    await sendEmail(user, posts)
  } catch (err) {
    handleError(err)
  }
}
```

Promises also enable centralized error handling through `catch` or `try/catch` blocks instead of repeated `if (err)` checks.
