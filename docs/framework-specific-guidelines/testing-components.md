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

For React components, Jest with Testing Library provides an ergonomic way to render components and assert on the DOM output.

```js
import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('renders greeting', () => {
  render(<Greeting name="Ada" />)
  expect(screen.getByText('Hello, Ada')).toBeInTheDocument()
})
```

Avoid heavy reliance on snapshot testing. Snapshots can hide meaningful changes—prefer explicit assertions and limit snapshots to small, stable pieces of UI.
