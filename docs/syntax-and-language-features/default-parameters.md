# 5.5 Default Parameters
Provide defaults in function signatures instead of inside the body.

```js
function greet(name = 'Guest') {
  return `Hi ${name}`
}
```

Defaults are only used when the argument is `undefined`. This differs from a
`||` fallback, which replaces any falsy value:

```js
function greetFallback(name) {
  name = name || 'Guest'
  return `Hi ${name}`
}

greet('')        // "Hi "
greetFallback('') // "Hi Guest"
```

Default expressions are evaluated left-to-right at call time, so later
parameters can depend on earlier ones:

```js
function buildMessage(name = 'Guest', greeting = `Hi ${name}`) {
  return greeting
}

buildMessage() // "Hi Guest"
```

Referencing a later parameter in an earlier default results in a
`ReferenceError`:

```js
function bad(a = b, b = 1) {}
// ReferenceError: Cannot access 'b' before initialization
```

