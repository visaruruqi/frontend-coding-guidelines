# 7.5 Async/Await vs Promises
Use `async/await` for readability while still understanding underlying promises.

```js
// Promise chaining
fetchData()
  .then(data => transform(data))
  .then(result => console.log(result))
  .catch(err => console.error('Failed to load', err))

// Refactored with async/await
async function load() {
  try {
    const data = await fetchData()
    const result = await transform(data)
    console.log(result)
  } catch (err) {
    console.error('Failed to load', err)
  }
}
```

**Error handling:** A `.catch()` at the end of a promise chain handles rejections from any step, while `async/await` relies on `try/catch`. Forgetting `try/catch` results in unhandled promise rejections, but it also lets you handle errors at different points in the sequence.

