# 3.1 Indentation & Spacing

Use **two spaces** for indentation. Avoid tabs to ensure consistent rendering across different editors and platforms.
Consistent indentation makes code easier to read and reduces merge conflicts.

**Key points:**
- Use 2 spaces for each indentation level.
- Do not mix tabs and spaces in the same file.
- Keep code visually aligned for clarity.

---

### Examples

::: danger ❌ Bad — inconsistent indentation and mixed tabs/spaces
```javascript
function sayHello(name) {
· ·console.log("Hello, " + name); // 2 spaces here
····console.log("How are you?"); // 4 spaces here
⇥console.log("Welcome!"); // tab here
}
```
:::

::: tip ✅ Good — consistent 2-space indentation
```javascript
function sayHello(name) {
  console.log("Hello, " + name);
  console.log("How are you?");
  console.log("Welcome!");
}
```
:::

::: tip ✅ 4-space indentation
```javascript
function sayHello(name) {
    console.log("Hello, " + name);
    console.log("How are you?");
    console.log("Welcome!");
}
```
:::

### Tooling tips

- **Prettier**: set indentation in your `.prettierrc`:

```json
{
  "tabWidth": 2,
  "useTabs": false
}
```

- **ESLint**: enforce indentation with the `indent` rule:

```json
{
  "rules": {
    "indent": ["error", 2]
  }
}
```

Adjust the numeric value to `4` if your project uses four spaces.

