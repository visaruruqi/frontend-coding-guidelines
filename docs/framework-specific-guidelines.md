# 9. Framework-Specific Guidelines

## 9.1 Vue.js Coding Standards {#vue-coding-standards}
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

## 9.2 Component Naming {#component-naming}
Component file names and tags use `PascalCase`.

```vue
<MyButton />
```

## 9.3 Props & Emits Conventions {#props-and-emits}
Define props and emits with explicit types and avoid using `any`.

```vue
<script setup>
const props = defineProps<{ label: string }>()
const emit = defineEmits<{ (e: 'update'): void }>()
</script>
```

## 9.4 State Management Patterns (Vuex/Pinia) {#state-management}
Centralize shared state in Vuex or Pinia and keep modules small.

```js
// stores/user.js
export const useUserStore = defineStore('user', {
  state: () => ({ name: '' }),
})
```

## 9.5 File Naming in Components {#file-naming-components}
Store single-file components as `MyComponent.vue` and co-locate related tests or styles.

## 9.6 Testing Components {#testing-components}
Use `@vue/test-utils` and write tests for critical interactions and edge cases.

```js
import { mount } from '@vue/test-utils'
import MyButton from './MyButton.vue'

it('emits click', () => {
  const wrapper = mount(MyButton)
  wrapper.trigger('click')
  expect(wrapper.emitted()).toHaveProperty('click')
})
```
