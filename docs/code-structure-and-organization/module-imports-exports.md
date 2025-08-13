# 6.1 Module Imports/Exports
Use **ES module syntax** (`import` / `export`) instead of CommonJS (`require` / `module.exports`).  
Group imports by origin for better readability:  

1. **Built-in modules** (e.g., `fs`, `path`)  
2. **Third-party packages** (e.g., `lodash`, `axios`)  
3. **Local files** (e.g., `./utils/logger.js`)  

**Key points:**
- Keep imports ordered and grouped.
- Avoid unused imports.
- Prefer named exports when exporting multiple values.
- Use barrel files (`index.js`) to re-export related modules when it improves import clarity.

---

::: danger ❌ Bad — mixed syntax, random order, unclear exports
```javascript
const helpers = require('./helpers.js');
import _ from 'lodash';
const fs = require('fs');
import { formatDate } from './date-utils.js';
import axios from 'axios';
import path from 'path';
module.exports = { startApp };

function startApp() {
  // app logic
}
```
:::

::: tip ✅ Good — ES modules, grouped imports, and clear exports
```javascript
// 1. Built-in modules
import fs from 'fs';
import path from 'path';

// 2. Third-party packages
import _ from 'lodash';
import axios from 'axios';

// 3. Local modules
import { formatDate, parseDate } from './utils/date-utils.js';
import { logInfo, logError } from './utils/logger.js';
import config from './config.js';

// Application entry
export function startApp() {
  logInfo('Application starting...');
  const data = fs.readFileSync(config.dataFile, 'utf-8');
  const parsed = JSON.parse(data);
  logInfo(`Loaded ${parsed.length} records at ${formatDate(new Date())}`);
}

export default startApp;
```
:::

**Lessons from this example:**

- **Group imports** by origin: built-in → third-party → local.
- **Keep imports ordered and tidy** for quick scanning.
- **Use named exports** when a module provides multiple utilities.
- **Use a default export** for the main functionality of the file.
- **Keep related imports together** and avoid unused imports.

## Named vs. Default Exports

Use **named exports** for modules that expose multiple utilities or when you want imports to be explicit.

```javascript
// math-utils.js
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
```

Use a **default export** when a module has one primary functionality.

```javascript
// api-client.js
export default function createClient(baseUrl) {
  /* ... */
}
```

## Barrel Files

A **barrel file** re-exports modules to simplify import paths and reduce clutter in consuming files.

```javascript
// utils/index.js
export * from './date-utils.js';
export * from './logger.js';
```

Consumers can then import from the barrel:

```javascript
import { formatDate, logInfo } from './utils/index.js';
```

Use barrel files sparingly to avoid creating confusing dependency chains or circular references.


