# 7.6 Event Handling
Detach listeners when components unmount and keep handler names descriptive.

```js
function handleClick() {}
button.addEventListener('click', handleClick)
// later
button.removeEventListener('click', handleClick)
```

