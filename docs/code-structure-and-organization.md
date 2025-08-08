# 6. Code Structure & Organization

## 6.1 Module Imports/Exports {#module-imports-exports}
Use ES module syntax and group imports by origin.

```js
import fs from 'fs'
import helpers from './helpers.js'
```

## 6.2 File Structure {#file-structure}
Organize files by feature or domain instead of by type to keep related code together.

```
src/
  auth/
    login-view.vue
    auth.service.js
  profile/
    profile-view.vue
    profile.service.js
```

## 6.3 Separation of Concerns {#separation-of-concerns}
Each module or component should handle a single responsibility.

```js
function fetchUser(id) {
  return api.get(`/users/${id}`)
}

function renderUser(user) {
  userElement.textContent = user.name
}
```

## 6.4 Commenting & Documentation {#commenting-and-documentation}
Explain why code exists rather than what it does. Use JSDoc for public APIs.

```js
/**
 * Fetch a user by id.
 * @param {number} id
 */
function getUser(id) {
  // ...
}
```

## 6.5 TODO / FIXME Conventions {#todo-fixme}
Use `// TODO:` for future work and `// FIXME:` for known issues. Include ticket numbers when available.

```js
// TODO: FE-123 add loading state
// FIXME: FE-124 handle null response
```
