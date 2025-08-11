# 2.2 Maintainability
Organize code so future changes are easy. Break large functions into smaller parts and avoid duplication.
Write code that is easy to change, fix, and extend in the future — not just code that “works” today.  
A future developer (including you) should be able to understand and modify it quickly without introducing bugs.

**Key practices:**
- Break large functions into smaller, focused functions.
- Avoid duplication — follow **DRY** (Don’t Repeat Yourself).
- Use meaningful names for variables, functions, and classes.
- Group related logic together.
- Keep a consistent structure across files.

---

### Example 1 — Breaking down large functions

::: danger ❌ **Bad** — hard to read, hard to test, and changes risk breaking unrelated logic:  
```javascript
function processOrder(order) {
  // Validate order
  if (!order.items || order.items.length === 0) {
    throw new Error("Order must have at least one item.");
  }
  if (!order.customerId) {
    throw new Error("Customer ID is required.");
  }

  // Calculate total
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }

  // Apply discount
  if (order.couponCode === "DISCOUNT10") {
    total = total * 0.9;
  }

  // Save order to DB
  database.save(order, total);

  // Send confirmation email
  emailService.send(order.customerId, total);
}
```
:::

::: tip ✅ **Good** — easier to read, maintain, and test each step:  
```javascript
function validateOrder(order) {
  if (!order.items?.length) throw new Error("Order must have at least one item.");
  if (!order.customerId) throw new Error("Customer ID is required.");
}

function calculateTotal(order) {
  let total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (order.couponCode === "DISCOUNT10") total *= 0.9;
  return total;
}

function processOrder(order) {
  validateOrder(order);
  const total = calculateTotal(order);
  database.save(order, total);
  emailService.send(order.customerId, total);
}
```
:::
Now each function has one clear responsibility, and you can test them individually

