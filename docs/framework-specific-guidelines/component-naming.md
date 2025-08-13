# 9.2 Component Naming
Component file names and tags use `PascalCase`.

## React Components

- Name components and their containing folders using `PascalCase`.
- Use `.jsx` or `.tsx` extensions for component files.
- Keep each component in its own folder within `src/components/`.

```jsx
src/components/MyButton/MyButton.jsx

function MyButton() {
  return <button>Click me</button>;
}

export default MyButton;
```

## Vue Single-File Components

- Use `PascalCase` for `.vue` filenames.
- Store components in a `components/` directory; create subfolders as needed.
- Declare the component's `name` option in `PascalCase`.

```vue
src/components/MyButton.vue

<template>
  <button>Click me</button>
</template>

<script>
export default {
  name: 'MyButton'
};
</script>
```

