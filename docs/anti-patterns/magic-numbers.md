# 8.3 Magic Numbers & Strings
Replace unexplained literals with named constants. When values are shared across modules, centralize them in enums or configuration files.

### Example

#### Bad
```js
const finalPrice = price * 1.2 - 5
```

#### Good
```js
// constants.js
export const TAX_RATE = 0.2
export const DISCOUNT_AMOUNT = 5

// checkout.js
import { TAX_RATE, DISCOUNT_AMOUNT } from './constants'

const finalPrice = price * (1 + TAX_RATE) - DISCOUNT_AMOUNT
```

For values used throughout the codebase, define them once in a shared enum or config file to avoid duplication and ease maintenance. In TypeScript, enums can help centralize related constants.

