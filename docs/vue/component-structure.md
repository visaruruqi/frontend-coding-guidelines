# Component Structure

- Use `PascalCase` for component names.
- Organize single file components with `<template>`, `<script>`, and `<style>` blocks in that order.

```vue
<template>
  <div class="user-card">{{ user.name }}</div>
</template>

<script setup>
defineProps({ user: Object })
</script>

<style scoped>
.user-card { padding: 0.5rem; }
</style>
```
