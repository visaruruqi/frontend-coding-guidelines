# 4. Naming Conventions

Names should be descriptive and meaningful. When you read a name, its purpose or
value should be immediately clear. Functions always start with a verb that
expresses the action they perform.

```js
// Bad
let x = 5
function data() {}

// Good
let userAge = 5
function fetchData() {}
```

## 4.1 Variables & Constants {#variables-and-constants}
Use `camelCase` for mutable variables and `UPPER_SNAKE_CASE` for constants.

```js
let userName = 'Ada'
const MAX_RETRIES = 3
```

## 4.2 Functions & Methods {#functions-and-methods}
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



## 4.3 Classes {#classes}
Class names use `PascalCase` and represent nouns.

```js
class UserProfile {}
```

## 4.4 Files & Folders {#files-and-folders}
Use `kebab-case` for file and folder names.

```
src/
  user-profile/
    index.js
    user-service.js
```

## 4.5 Boolean Naming {#boolean-naming}
Prefix booleans with `is`, `has`, or `should` to indicate their nature.

::: danger ❌ Bad Example
```javascript
const active = true;
const permission = false;
const visible = true;
```
:::

::: tip ✅ Good Example
```javascript
const isActive = true;
const hasPermission = false;
const shouldDisplay = true;
```
:::


## 4.6 Acronyms & Abbreviations {#acronyms-and-abbreviations}
Write full words instead of shortened or unclear names.  
Only use widely accepted abbreviations, such as `id` or `url`.  
If an acronym is necessary, capitalize it uniformly (e.g., `HttpClient`).

**Key points:**
- Avoid unclear short forms (`cfg`, `usrNm`).
- Prefer descriptive names (`config`, `userName`).
- Use consistent casing for acronyms within identifiers.

---

::: danger ❌ Bad — unclear and inconsistent
```javascript
function getUsrCfg(id) { // "Usr" and "Cfg" are unclear
  const usr_data = db.findUsrByID(id); // Mixed casing: ID vs id
  return usr_data;
}
```
:::

::: tip ✅ Good — clear and consistent
```javascript
function getUserConfig(userId) {
  const userData = db.findUserById(userId);
  return userData;
}
```
:::

## 4.7 Plural vs. Singular {#plural-vs-singular}
Use singular names for single items or objects and plural names for arrays or
collections.

```js
const user = getUser()
const users = getUsers()
```

## 4.8 Avoid Redundant Context {#avoid-redundant-context}
Omit repeated context when the surrounding scope already makes the meaning
clear.

```js
// Inside a user object
const user = {
  name: 'Ada', // not userName
}

// Items inside a userList
const userList = []
userList.forEach(user => {
  // not userListItem
})
```
