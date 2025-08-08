# 3. Code Formatting

## 3.1 Indentation & Spacing {#indentation-and-spacing}
Use two spaces for indentation. Avoid tabs to ensure the same rendering across editors.

```js
if (ready) {
  start()
}
```

## 3.2 Line Length {#line-length}
Keep lines under 100 characters. Break long statements into multiple lines for readability.

```js
const query = db
  .select('id', 'name')
  .from('users')
  .where('active', true)
```

## 3.3 Semicolons {#semicolons}
Always include semicolons to avoid issues with automatic insertion.

```js
const total = getTotal();
```

## 3.4 Quotation Marks {#quotation-marks}
Use single quotes for strings and backticks for templates that need interpolation.

```js
const title = 'Guide';
const message = `Hello, ${name}`;
```

## 3.5 Braces & Parentheses Style {#braces-and-parentheses}
Opening braces stay on the same line as the statement.

```js
function hello() {
  return 'hi'
}
```

## 3.6 Trailing Commas {#trailing-commas}
Include trailing commas in multi-line objects and arrays to minimize diff noise.

```js
const colors = [
  'red',
  'blue',
];

const user = {
  id: 1,
  name: 'Ada',
};
```
