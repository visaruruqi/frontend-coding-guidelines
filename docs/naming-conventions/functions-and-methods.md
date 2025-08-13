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

function calculateTotal(items) {
  // Calculate the total amount for the provided items
}
```
:::


## Asynchronous Functions

Indicate when a function performs asynchronous work. Prefix names with verbs like `load` or add an `Async` suffix when appropriate.

```javascript
async function loadUserData() {
  // Fetch user information from the API
}

async function fetchUserDataAsync() {
  // Fetch user information from the API
}
```



