# 5. Syntax & Language Features

## 5.1 `let`, `const`, and `var` {#let-const-var}
Use `const` by default and `let` when reassigning. Avoid `var`.

```js
const total = 10
let count = 0
```

## 5.2 Arrow Functions {#arrow-functions}
Arrow functions provide concise syntax and lexical `this` binding.

```js
const ids = items.map(item => item.id)
```

## 5.3 Destructuring {#destructuring}
Destructure objects and arrays to extract values clearly.

```js
const { id, name } = user
```

## 5.4 Template Literals {#template-literals}
Use backticks to build strings with variables.

```js
const message = `Hello, ${name}`
```

## 5.5 Default Parameters {#default-parameters}
Provide defaults in function signatures instead of inside the body.

```js
function greet(name = 'Guest') {
  return `Hi ${name}`
}
```

## 5.6 Spread & Rest Operators {#spread-and-rest}
Use spread to copy and merge, and rest to gather parameters.

```js
const copy = { ...original }
```

## 5.7 Optional Chaining & Nullish Coalescing {#optional-chaining}
Use `?.` and `??` to safely access properties and provide fallbacks.

```js
const title = post?.title ?? 'Untitled'
```
