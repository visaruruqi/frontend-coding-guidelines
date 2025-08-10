# 7.5 Async/Await vs Promises
Use `async/await` for readability while still understanding underlying promises.

```js
async function load() {
  const data = await fetchData()
  return data
}
```

