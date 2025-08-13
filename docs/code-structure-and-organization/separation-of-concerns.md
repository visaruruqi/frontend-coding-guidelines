# 6.3 Separation of Concerns
Each module or component should handle a single responsibility.

```js
function fetchUser(id) {
  return api.get(`/users/${id}`)
}

function renderUser(user) {
  userElement.textContent = user.name
}
```

## Refactor logic and presentation

::: danger ❌ Bad — component mixing data fetching and UI
```vue
<!-- UserProfile.vue -->
<template>
  <div v-if="user">{{ user.name }}</div>
  <span v-else>Loading...</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({ userId: Number })
const user = ref(null)

onMounted(async () => {
  const res = await fetch(`/api/users/${props.userId}`)
  user.value = await res.json()
})
</script>
```
:::

::: tip ✅ Good — separate service layer from UI component
```js
// userService.js
export async function getUser(id) {
  const res = await fetch(`/api/users/${id}`)
  return res.json()
}
```

```vue
<!-- UserProfile.vue -->
<template>
  <div v-if="user">{{ user.name }}</div>
  <span v-else>Loading...</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getUser } from './userService'

const props = defineProps({ userId: Number })
const user = ref(null)

onMounted(async () => {
  user.value = await getUser(props.userId)
})
</script>
```
:::

### Why it helps

- **Testing:** the service can be unit-tested or mocked without rendering the component.
- **Maintenance:** UI and data logic evolve independently, reducing side effects when requirements change.

