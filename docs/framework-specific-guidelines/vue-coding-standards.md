# 9.1 Vue.js Coding Standards

Use the Composition API in new components and keep templates simple. For comprehensive guidance, consult the [official Vue Style Guide](https://vuejs.org/style-guide/).

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

## Common Pitfalls

### Mutating props

Avoid mutating props directly as it breaks one-way data flow ([style guide rule](https://vuejs.org/style-guide/rules-essential.html#no-mutating-props)).

```vue
<script setup>
const props = defineProps({ label: String })

// ❌ Bad: mutating the prop
props.label = 'New label'

// ✅ Good: use a local ref
const localLabel = ref(props.label)
localLabel.value = 'New label'
</script>
```

### Missing `key` with `v-for`

Always provide a unique `key` when rendering lists ([style guide rule](https://vuejs.org/style-guide/rules-essential.html#require-key-with-v-for)).

```vue
<li v-for="item in items" :key="item.id">{{ item.name }}</li>
```
