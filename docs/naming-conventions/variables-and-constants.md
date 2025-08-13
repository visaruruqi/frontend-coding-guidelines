# 4.1 Variables & Constants
Consistent naming makes your code predictable and easier to read.  
In JavaScript, the convention is:

- **camelCase** → for variables that can change (mutable values).
- **UPPER_SNAKE_CASE** → for constants that are meant to remain unchanged.

---

### Why This Matters
- **Predictability**: Teammates know if a value is constant or mutable just by its name.
- **Code Reviews**: Helps spot unintentional changes to values that should be constant.
- **Error Prevention**: Constants are easier to track and reason about during debugging.

---

### Examples

::: danger Bad Example
```javascript
let UserName = 'Ada'        // Incorrect casing for a variable
const maxRetries = 3        // Not clear that this is a constant
```
:::

::: tip Good Example
```javascript
let userName = 'Ada'        // camelCase for mutable values
const MAX_RETRIES = 3       // UPPER_SNAKE_CASE for constants
const APP_CONFIG = Object.freeze({
  apiUrl: 'https://api.example.com',
  timeout: 5000
})                          // read-only constant object
```
:::

--

### Common Pitfalls

1. **Using `const` with camelCase when it should be UPPER_SNAKE_CASE**

    ```javascript
    const maxRetries = 3 // This should be MAX_RETRIES
    ```

2. **Accidentally mutating constants**

    ```javascript
    const MAX_RETRIES = 3
    MAX_RETRIES = 5 // ❌ This will throw an error
    ```

3. **Overusing constants for values that are not truly constant**

    ```javascript
    const USER_LIST = [] // ❌ Can still mutate the array contents
    USER_LIST.push('John') // Mutates the constant reference
    ```

    Use `Object.freeze()` or immutable patterns if you need truly constant data structures.

    ```javascript
    const APP_CONFIG = Object.freeze({
      apiUrl: 'https://api.example.com',
      timeout: 5000
    })
    // APP_CONFIG.apiUrl = 'https://other.example.com' // ❌ No effect, read-only
    ```

    This creates a read-only `const` object named `APP_CONFIG`.

