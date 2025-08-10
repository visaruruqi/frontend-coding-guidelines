# 7.4 Error Handling
Handle errors with `try/catch` or promise rejections and provide helpful messages.

```js
try {
  await save()
} catch (err) {
  console.error('Failed to save', err)
}
```

