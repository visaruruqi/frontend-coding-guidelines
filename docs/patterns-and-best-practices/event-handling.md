# 7.6 Event Handling
Detach listeners when components unmount and keep handler names descriptive. Use
event delegation to reduce the number of listeners and always remove listeners
to prevent memory leaks.

```js
const list = document.getElementById('todo-list')

function handleListClick(event) {
  if (event.target.matches('li button.remove')) {
    event.target.closest('li').remove()
  }
}

list.addEventListener('click', handleListClick)
// later
list.removeEventListener('click', handleListClick)
```

Frameworks often wrap native events in synthetic events (e.g., React's
`SyntheticEvent`). Use lifecycle hooks (such as React's `useEffect` cleanup) to
detach listeners and call `event.persist()` if you need the synthetic event
asynchronously.

