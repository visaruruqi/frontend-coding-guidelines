# 3.2 Line Length
Keep lines under 100 characters. Break long statements into multiple lines for readability.

## Chained methods
```js
const query = db
  .select('id', 'name')
  .from('users')
  .where('active', true)
```

## Object literals
::: danger ❌ Bad — long object literal on one line
```js
const user = { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin', active: true };
```
:::

::: tip ✅ Good — break object across lines
```js
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  role: 'admin',
  active: true,
};
```
:::

## Function calls
::: danger ❌ Bad — long function call
```js
sendEmail(user.id, 'A very long subject line that exceeds 100 characters so should be split up', body, options);
```
:::

::: tip ✅ Good — break arguments across lines
```js
sendEmail(
  user.id,
  'A very long subject line that exceeds 100 characters so should be split up',
  body,
  options
);
```
:::

## Prettier configuration
Configure Prettier to enforce this limit automatically by setting `printWidth` to `100`.

```json
{
  "printWidth": 100
}
```
