# 7.6 Event Handling
Detach listeners when components unmount and keep handler names descriptive. Use
event delegation to reduce the number of listeners and always remove listeners
to prevent memory leaks.

Vue event delegation example:

```vue
<template>
  <ul @click="handleListClick">
    <li
      v-for="todo in todos"
      :key="todo.id"
      :data-id="todo.id"
    >
      {{ todo.text }}
      <button class="remove">Remove</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, text: 'Learn' },
  { id: 2, text: 'Build' }
])

function handleListClick(event) {
  const button = event.target.closest('button.remove')
  if (button) {
    const id = Number(button.closest('li').dataset.id)
    todos.value = todos.value.filter((t) => t.id !== id)
  }
}
</script>
```

Event propagation allows the single `<ul>` listener to catch clicks that
originate from its descendant buttons because events bubble from the target up
through ancestor elements. You can also intercept events during the capturing
phase or stop them from bubbling:

```vue
<template>
  <div @click.capture="log('capture')" @click="log('bubble')">
    <button @click.stop="log('button')">Click</button>
  </div>
</template>

<script setup>
function log(phase) {
  console.log(phase)
}
</script>
```

Clicking the button logs `capture` and then `button`; the bubbling handler on
the `<div>` is skipped because the `.stop` modifier prevents further
propagation.

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

