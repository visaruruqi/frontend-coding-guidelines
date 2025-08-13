# 8. Anti-Patterns

Avoid these common pitfalls:

- [Avoid `var`](avoid-var.md): `var` has function scope and can lead to bugs. Use `let` or `const` instead.
- [Avoid Deep Nesting](avoid-deep-nesting.md): Refactor deeply nested code into smaller functions to improve readability.
- [Magic Numbers & Strings](magic-numbers.md): Replace unexplained literals with named constants.
- [Overusing Global Variables](global-variables.md): Limit global state and prefer module exports or dependency injection.
- [Callback Hell](callback-hell.md): Use promises or `async/await` to flatten complex asynchronous code.

## Risk Groups

| Risk | Anti-Patterns |
| ---- | ------------- |
| Readability | [Avoid Deep Nesting](avoid-deep-nesting.md), [Magic Numbers & Strings](magic-numbers.md) |
| Maintenance | [Avoid `var`](avoid-var.md), [Overusing Global Variables](global-variables.md), [Callback Hell](callback-hell.md) |
| Performance | — |

