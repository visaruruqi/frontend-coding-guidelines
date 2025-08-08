# 4. Naming Conventions

## 4.1 Variables & Constants {#variables-and-constants}
Use `camelCase` for mutable variables and `UPPER_SNAKE_CASE` for constants.

```js
let userName = 'Ada'
const MAX_RETRIES = 3
```

## 4.2 Functions & Methods {#functions-and-methods}
Names should describe actions and start with a verb.

```js
function fetchData() {}
```

## 4.3 Classes {#classes}
Class names use `PascalCase` and represent nouns.

```js
class UserProfile {}
```

## 4.4 Files & Folders {#files-and-folders}
Use `kebab-case` for file and folder names.

## 4.5 Boolean Naming {#boolean-naming}
Prefix booleans with `is`, `has`, or `should` to indicate their nature.

```js
const isActive = true
```

## 4.6 Acronyms & Abbreviations {#acronyms-and-abbreviations}
Avoid abbreviations when possible. If an acronym is necessary, capitalize it uniformly (`HttpClient`).
