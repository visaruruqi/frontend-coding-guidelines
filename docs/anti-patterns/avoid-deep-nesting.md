# 8.2 Avoid Deep Nesting
Refactor deeply nested code into smaller functions to improve readability.

### Deeply nested conditional
```js
function processOrder(order) {
  if (order) {
    if (order.items && order.items.length) {
      if (order.user && order.user.isActive) {
        ship(order)
      }
    }
  }
}
```

### Refactor with early returns
```js
function processOrder(order) {
  if (!order) return
  if (!order.items || !order.items.length) return
  if (!order.user || !order.user.isActive) return

  ship(order)
}
```

### Refactor with helper functions
```js
const hasItems = order => Array.isArray(order.items) && order.items.length > 0
const isActiveUser = order => order.user?.isActive

function processOrder(order) {
  if (!order || !hasItems(order) || !isActiveUser(order)) return
  ship(order)
}
```

Early returns flatten the structure, making the happy path (`ship`) obvious. Extracting checks into helpers makes each rule independently testable, so unit tests can cover `hasItems` and `isActiveUser` separately while keeping `processOrder` easy to read.

