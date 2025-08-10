# 9.1 Vue.js Coding Standards
Use the Composition API in new components and keep templates simple.

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

