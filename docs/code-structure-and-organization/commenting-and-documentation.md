# 6.4 Commenting & Documentation

Explain why code exists rather than what it does. Strive for code that is
self-documenting through clear naming and structure, and use comments to capture
intent or context that the code cannot express. Public APIs should include
JSDoc or TypeScript doc comments.

## Meaningful comments vs. self-documenting code

- **Let code speak for itself.** Prefer descriptive function and variable names
  over explanatory inline comments.
- **Comment the "why" not the "what".** Explain business rules, trade-offs, or
  other reasoning that led to the implementation.
- **Avoid noise.** Remove comments that merely restate obvious code and keep
  documentation up to date.

## Examples

### JSDoc

```js
/**
 * Fetch a user by id.
 * @param {number} id - Unique user identifier.
 * @returns {Promise<User>} Resolves with the requested user.
 */
async function getUser(id) {
  // implementation
}
```

### TypeScript

```ts
/**
 * Compute the distance between two points in 2D space.
 */
export function distance(a: Point, b: Point): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}
```

