# 9.6 Testing Components
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
