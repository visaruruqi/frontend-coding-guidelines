# 3.6 Trailing Commas
Include trailing commas in multi-line objects and arrays to minimize diff noise.

```js
const colors = [
  'red',
  'blue',
];

const user = {
  id: 1,
  name: 'Ada',
};
```

When you add new items, trailing commas keep diffs focused on the lines you actually change.

**Without trailing commas**

```diff
 const colors = [
   'red',
-  'blue'
+  'blue',
+  'green',
 ]
```

**With trailing commas**

```diff
 const colors = [
   'red',
   'blue',
+  'green',
 ]
```

This style is compatible with Prettier's `trailingComma` option when set to `"es5"` or `"all"`.
