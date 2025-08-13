# 2.1 Readability First
> Code is **read more often than it is written** — by you in the future, your teammates, and sometimes even new developers joining the project.  
> Optimizing for readability means fewer bugs, easier maintenance, and faster onboarding.

### Why It Matters
- **Future You**: You won't remember why you wrote something a certain way after a few months.
- **Team Efficiency**: Clear code reduces time spent explaining logic during code reviews.
- **Debugging**: Readable code makes it easier to locate and fix issues quickly.


### 1. Use Descriptive Variable Names

A variable name should tell the reader **what it holds** or **why it exists**, not just *what type* it is.

::: danger Bad Example
```javascript
// What is r? What are x and y?
const r = n > 10 ? x : y
```
:::

::: tip Good Example
```javascript
// Immediately clear what is being decided
const rate = age > 10 ? childRate : adultRate
```
:::

### 2. Make Conditions Self-Explaining
Instead of embedding logic directly into the condition, extract it into a well-named boolean.

::: danger Bad Example
```javascript
if (user.age >= 18 && !user.hasParentalConsent) {
  grantAccess()
}
```
:::

::: tip Good Example
```javascript
const isAdultWithoutParentalConsent = user.age >= 18 && !user.hasParentalConsent

if (isAdultWithoutParentalConsent) {
  grantAccess()
}
```
:::

### 3. Avoid Clever One-Liners When They Hide Intent
Concise isn't always better. Split complex logic into multiple simple steps if it improves clarity.

::: danger Bad Example
```javascript
const discount = isVIP ? (cart.total > 100 ? 0.2 : 0.1) : 0
```
:::

::: tip Good Example
```javascript
let discount = 0

if (isVIP) {
  discount = cart.total > 100 ? 0.2 : 0.1
}

```
:::

### 4. Apply This to Vue Components Too
Readable code applies in templates, methods, and computed properties.

::: danger Bad Example
```javascript
<template>
  <div v-if="u.a >= 18 && !u.pC">Access Granted</div>
</template>

<script>
export default {
  data() {
    return {
      u: { a: 25, pC: false }
    }
  }
}
</script>
```
:::

::: tip Good Example
```javascript
<template>
  <div v-if="isAdultWithoutParentalConsent">Access Granted</div>
</template>

<script>
export default {
  data() {
    return {
      user: { age: 25, hasParentalConsent: false }
    }
  },
  computed: {
    isAdultWithoutParentalConsent() {
      return this.user.age >= 18 && !this.user.hasParentalConsent
    }
  }
}
</script>
```
:::

### 5. Break Down Complex Chains With Descriptive Names

A long chain of array operations can be hard to parse when the reader has to hold every step in their head.

::: danger Bad Example
```javascript
const t = data.filter(d => d.a).map(d => d.b * 2).reduce((s, n) => s + n, 0)
```
:::

::: tip Good Example
```javascript
const activeItems = data.filter(item => item.isActive)
const doubledValues = activeItems.map(item => item.value * 2)
const total = doubledValues.reduce((sum, value) => sum + value, 0)
```
:::

Breaking the steps apart adds more lines and variables, but each name explains the intent of the operation and makes debugging easier. The trade‑off is sacrificing brevity for clarity: short expressions reduce visual clutter, yet they can hide meaning. Favor clarity unless the concise version is immediately obvious to readers.

### ✅ Key Takeaways

- Choose clarity over brevity.
- Use meaningful names that convey **what** and **why**, not just **how**.
- Break complex conditions and logic into smaller, named steps.
- Remember: *Your code is for humans first, the compiler second*.
