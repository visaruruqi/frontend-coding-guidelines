# 5.1 `let`, `const`, and `var`
Use `const` by default and `let` when reassigning. Avoid `var`.

```js
function scopeDemo() {
  if (true) {
    var functionScoped = 1
    let blockScoped = 2
    const constantValue = 3
    // constantValue = 4 // TypeError: Assignment to constant variable
  }

  console.log(functionScoped) // 1
  console.log(blockScoped) // ReferenceError: blockScoped is not defined
  console.log(constantValue) // ReferenceError: constantValue is not defined
}

scopeDemo()
```

`const` is for values that never change, such as configuration or dependency references.
`let` is for values that will be reassigned, like counters in loops.
`var` is function-scoped and should only be used in legacy code.
