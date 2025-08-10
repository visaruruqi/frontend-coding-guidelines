# 9.4 State Management Patterns (Vuex/Pinia)
Centralize shared state in Vuex or Pinia and keep modules small.

```js
// stores/user.js
export const useUserStore = defineStore('user', {
  state: () => ({ name: '' }),
})
```

