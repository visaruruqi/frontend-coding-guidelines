# 6. Code Structure & Organization

## 6.1 Module Imports/Exports {#module-imports-exports}
Use ES module syntax and group imports by origin.

```js
import fs from 'fs'
import helpers from './helpers.js'
```

## 6.2 File Structure {#file-structure}
Organize files by feature or domain instead of by type to keep related code together.

## 6.3 Separation of Concerns {#separation-of-concerns}
Each module or component should handle a single responsibility.

## 6.4 Commenting & Documentation {#commenting-and-documentation}
Explain why code exists rather than what it does. Use JSDoc for public APIs.

## 6.5 TODO / FIXME Conventions {#todo-fixme}
Use `// TODO:` for future work and `// FIXME:` for known issues. Include ticket numbers when available.
