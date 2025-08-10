# 4.2 Functions & Methods
Use `camelCase` for function names. They should clearly describe actions and start with an explicit verb.

::: danger ❌ Bad Example
```javascript
function userData() { /* ... */ }
function profile() { /* ... */ }
function totalPrice() { /* ... */ }
```
:::

::: tip ✅ Good Example
```javascript
function fetchUserData() {
  // Retrieve user information from the API
}

function updateProfile() {
  // Update the user's profile information
}

function calculateTotalPrice(items) {
  // Calculate the total price of all items in the cart
}
```
:::



