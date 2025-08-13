# 7.1 DRY & Avoiding Repetition
Extract common code into reusable functions to keep logic in one place.

```js
function formatName(user) {
  return `${user.first} ${user.last}`
}

console.log(formatName(userA))
console.log(formatName(userB))
```

## Replace Repeated Blocks with a Shared Function or Component

When you spot similar logic in multiple places, extract it into a helper rather than copy‑pasting:

```js
const adminNames = users.filter(u => u.role === 'admin').map(formatName)
const editorNames = users.filter(u => u.role === 'editor').map(formatName)
```

can be refactored into a shared function:

```js
function getNamesByRole(users, role) {
  return users.filter(u => u.role === role).map(formatName)
}

const adminNames = getNamesByRole(users, 'admin')
const editorNames = getNamesByRole(users, 'editor')
```

The same idea applies to UI code—if several screens repeat the same markup and styling, build a `<UserCard>` component once and reuse it.

## Balance DRY with Over‑Abstraction Risks

Too many or premature abstractions can hide intent and make code harder to change. Prefer small, well‑named helpers and components where the duplication is clear. If an abstraction becomes difficult to explain or configure, keeping a little repetition may be a better trade‑off.
