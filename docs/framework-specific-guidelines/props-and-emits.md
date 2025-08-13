# 9.3 Props & Emits Conventions
Define props and emits with explicit types and avoid using `any`. Props should be
validated at runtime and events must be typed.

```vue
<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  size: {
    type: String as PropType<'sm' | 'lg'>,
    default: 'sm'
  }
})

const emit = defineEmits<{
  /** Fired when the button is clicked. */
  (e: 'click', event: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <button :class="`btn-${size}`" @click="handleClick">{{ label }}</button>
</template>
```

Document each event so consumers know when it fires and what payload it
provides. Use TSDoc comments in the `defineEmits` declaration or an **Events**
section in component documentation to describe the event name and payload type.

