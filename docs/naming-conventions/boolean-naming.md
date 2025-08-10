# 4.5 Boolean Naming
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


