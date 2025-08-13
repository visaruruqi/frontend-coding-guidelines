# 3.4 Quotation Marks
Use single quotes for strings and backticks for templates that need interpolation.
JSX attributes should use double quotes.

```js
// Single vs. double quotes
const title = 'Guide';
const quote = "He said 'hello'";

// Template literal
const message = `Hello, ${name}!`;
```

```jsx
// JSX attributes use double quotes
const label = 'Save';
return <button title="Save" className="primary">{label}</button>;
```

Linters such as ESLint and Prettier detect mixed quotation styles.
Rules like `quotes` and `jsx-quotes` warn when strings or JSX attributes
don't follow the project's chosen convention.

