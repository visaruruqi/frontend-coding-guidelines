# 8.4 Overusing Global Variables
Limit global state and prefer module exports or dependency injection.

```js
// Bad
window.total = 0

// Good
export const total = 0
```

Globals are shared across the entire application, so a single mutation can
produce bugs far from its source. Forgetting a declaration is a common cause of
accidental global state:

```js
// cart.js
function addItem(price) {
  total += price // `total` becomes a global
}

// discount.js
function applyDiscount(percent) {
  total -= total * percent // mutates the same global
}
```

`applyDiscount` assumes it owns `total`, unexpectedly altering the value used by
`addItem`.

Mitigate this by keeping state inside a module or injecting it where needed:

```js
// cart.js - module scoped state
let total = 0
export function addItem(price) {
  total += price
}
export function applyDiscount(percent) {
  total -= total * percent
}
export function getTotal() {
  return total
}
```

```js
// cart.js - dependency injection
export function createCart(total = 0) {
  return {
    addItem(price) {
      total += price
    },
    applyDiscount(percent) {
      total -= total * percent
    },
    getTotal() {
      return total
    }
  }
}
const cart = createCart()
```

Using modules or dependency injection makes mutations explicit and localized.

