# 3. Code Formatting

## 3.1 Indentation & Spacing {#indentation-and-spacing}

Use **two spaces** for indentation. Avoid tabs to ensure consistent rendering across different editors and platforms.  
Consistent indentation makes code easier to read and reduces merge conflicts.

**Key points:**
- Use 2 spaces for each indentation level.
- Do not mix tabs and spaces in the same file.
- Keep code visually aligned for clarity.

---

::: danger ❌ Bad — inconsistent indentation and mixed tabs/spaces
```javascript
function sayHello(name) {
· ·console.log("Hello, " + name); // 2 spaces here
····console.log("How are you?"); // 4 spaces here
⇥console.log("Welcome!"); // tab here
}
```
::: tip ✅ Good — consistent 2-space indentation
```javascript
function sayHello(name) {
  console.log("Hello, " + name);
  console.log("How are you?");
  console.log("Welcome!");
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
