# 4.3 Classes

## Programming Classes

Class names use `PascalCase` and represent nouns.

```js
class UserProfile {}
```

## CSS Classes

When writing custom CSS, follow the BEM (Block–Element–Modifier) methodology to
keep selectors descriptive and scoped to the component.

::: tip ✅ BEM Example
```html
<div class="card">
  <h2 class="card__title">Title</h2>
  <button class="card__button card__button--primary">Buy</button>
</div>
```
:::

Use utility classes like Tailwind for simple, single‑purpose styling or when
building prototypes quickly. For reusable components or complex styling, prefer
BEM so that intent stays clear and styles remain maintainable.

### Avoiding Naming Collisions

CSS lives in a global namespace. Choose unique block names and avoid generic
terms (e.g., `btn`, `list`) that could overlap with other libraries or utility
classes. BEM's structured naming and namespacing techniques like CSS Modules or
scoped styles help prevent collisions when mixing custom and utility classes.

