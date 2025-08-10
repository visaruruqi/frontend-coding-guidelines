# 3.2 Line Length
Keep lines under 100 characters. Break long statements into multiple lines for readability.

```js
const query = db
  .select('id', 'name')
  .from('users')
  .where('active', true)
```

