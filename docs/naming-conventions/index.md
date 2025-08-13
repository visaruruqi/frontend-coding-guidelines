# 4. Naming Conventions

Names should be descriptive and meaningful. When you read a name, its purpose or
value should be immediately clear. Functions always start with a verb that
expresses the action they perform.

Consistent naming across the codebase makes it easier to collaborate and reduces
cognitive load. The following subsections outline specific guidelines:

- [Variables & Constants](./variables-and-constants.md): Distinguish mutable
  variables from unchanging constants through casing.
- [Functions & Methods](./functions-and-methods.md): Use action-oriented
  `camelCase` verbs to describe behavior.
- [Classes](./classes.md): Represent nouns with `PascalCase` class names.
- [Files & Folders](./files-and-folders.md): Apply `kebab-case` for predictable
  file and directory names.
- [Boolean Naming](./boolean-naming.md): Prefix booleans with `is`, `has`, or
  `should` for clarity.
- [Acronyms & Abbreviations](./acronyms-and-abbreviations.md): Spell out words
  when possible and keep acronym casing consistent.
- [Plural vs. Singular](./plural-vs-singular.md): Match names to whether they
  refer to one item or many.
- [Avoid Redundant Context](./avoid-redundant-context.md): Omit repeated
  context when the surrounding scope provides meaning.

::: danger ❌ Bad Example
```js
// Bad
let x = 5
function data() {}
```
:::
::: tip ✅ Good Example
```js
// Good
let userAge = 5
function fetchData() {}
```
:::
