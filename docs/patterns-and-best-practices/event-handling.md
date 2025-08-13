# 7.6 Event Handling
Detach listeners when components unmount and keep handler names descriptive. Use
event delegation to reduce the number of listeners and always remove listeners
to prevent memory leaks.

Vue event delegation example:

```vue
<template>
  <ul @click="handleListClick">
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button class="remove">Remove</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([{ id: 1, text: 'Learn' }])

function handleListClick(event) {
  if (event.target.closest('button.remove')) {
    // remove the todo
  }
}
</script>
```

Listener cleanup with lifecycle hooks:

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue'

function handleResize() {
  // handle resize
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
```

Some frameworks wrap native events in synthetic objects. When working with such
synthetic events, clean up listeners using lifecycle hooks and persist the event
object if you need to access it asynchronously.

