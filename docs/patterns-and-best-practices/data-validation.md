# 7.7 Data Validation
Validate external data at boundaries to prevent unexpected behavior.

```js
function createUser(input) {
  if (!input.name) throw new Error('name required')
  return { ...input }
}
```
