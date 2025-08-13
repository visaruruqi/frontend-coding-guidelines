# 3.5 Braces & Parentheses Style

Opening braces stay on the same line as the statement. This is known as the Kernighan and Ritchie (K&R) style and is the preferred convention in this project.

## K&R (preferred)

```js
function hello() {
  return "hi";
}
```

## Allman (not preferred)

<!-- prettier-ignore -->
```js
function hello()
{
  return 'hi'
}
```

Prettier automatically enforces the K&R style. When run on an Allman-style snippet, Prettier rewrites it to K&R formatting:

```bash
npx prettier allman.js
```

Output:

```js
function hello() {
  return "hi";
}
```
