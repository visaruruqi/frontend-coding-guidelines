# 4.5 Boolean Naming
Prefix booleans with `is`, `has`, `can`, or `should` to indicate their nature. Avoid negative forms that require mental inversion.

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

Avoid negative forms that flip meaning and make code harder to read.

::: danger ❌ Bad Example
```javascript
const isDisabled = false;
const hasNoPermission = true;
const cannotDisplay = false;
```
:::

::: tip ✅ Good Example
```javascript
const isEnabled = true;
const hasPermission = false;
const canDisplay = true;
```
:::

Use ESLint's [`@typescript-eslint/naming-convention`](https://typescript-eslint.io/rules/naming-convention/) rule to enforce these prefixes:

```json
{
  "rules": {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "types": ["boolean"],
        "prefix": ["is", "has", "can", "should"],
        "format": ["camelCase"]
      }
    ]
  }
}
```

