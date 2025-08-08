# 2. General Principles

## 2.1 Readability First {#readability-first}
Code is read more often than it is written. Prefer clear names and straightforward logic over clever tricks.

```js
// Hard to follow
const r = n > 10 ? x : y

// Clear intent
const isEligible = age > 10 ? childRate : adultRate
```

## 2.2 Maintainability {#maintainability}
Organize code so future changes are easy. Break large functions into smaller parts and avoid duplication.

```js
function saveUser(user) {
  validate(user)
  persist(user)
}

function validate(user) {
  // ...
}

function persist(user) {
  // ...
}
```

## 2.3 Performance Considerations {#performance}
Optimize only when necessary. Measure bottlenecks before making changes and keep algorithms as simple as possible.

```js
console.time('render')
renderPage()
console.timeEnd('render')
```

## 2.4 Security Practices {#security}
Validate user input, escape dynamic content, and keep dependencies updated to minimize vulnerabilities.

```js
import DOMPurify from 'dompurify'

const safeHtml = DOMPurify.sanitize(userInput)
```
