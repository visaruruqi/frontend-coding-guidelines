# 2.3 Performance Considerations
Optimize only when necessary. Measure bottlenecks before making changes and keep algorithms as simple as possible.

```js
console.time('render')
renderPage()
console.timeEnd('render')
```

