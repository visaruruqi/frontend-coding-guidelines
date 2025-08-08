# 7. Patterns & Best Practices

## 7.1 DRY & Avoiding Repetition {#dry}
Extract common code into reusable functions to keep logic in one place.

```js
function formatName(user) {
  return `${user.first} ${user.last}`
}

console.log(formatName(userA))
console.log(formatName(userB))
```

## 7.2 Pure Functions {#pure-functions}
Functions should avoid side effects and return the same output for the same input.

```js
function add(a, b) {
  return a + b
}
```

## 7.3 Immutability {#immutability}
Prefer immutable data structures. Instead of mutating arrays, return new ones.

```js
const updated = [...items, newItem]
```

## 7.4 Error Handling {#error-handling}
Handle errors with `try/catch` or promise rejections and provide helpful messages.

```js
try {
  await save()
} catch (err) {
  console.error('Failed to save', err)
}
```

## 7.5 Async/Await vs Promises {#async-await-vs-promises}
Use `async/await` for readability while still understanding underlying promises.

```js
async function load() {
  const data = await fetchData()
  return data
}
```

## 7.6 Event Handling {#event-handling}
Detach listeners when components unmount and keep handler names descriptive.

```js
function handleClick() {}
button.addEventListener('click', handleClick)
// later
button.removeEventListener('click', handleClick)
```

## 7.7 Data Validation {#data-validation}
Validate external data at boundaries to prevent unexpected behavior.

```js
function createUser(input) {
  if (!input.name) throw new Error('name required')
  return { ...input }
}
```
