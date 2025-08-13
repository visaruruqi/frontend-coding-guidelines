# 7.3 Immutability
Prefer immutable data structures. Instead of mutating arrays or objects, return new copies.

```js
const updatedItems = [...items, newItem]      // array
const updatedUser = { ...user, name: 'Alex' } // object
```

Immutability plays nicely with React and Vue reactivity systems.
They rely on reference changes to detect state updates; by creating new arrays and objects, you trigger re-renders and watchers reliably.

