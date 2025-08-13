# 9.5 File Naming in Components
Store single-file components as `MyComponent.vue` and co-locate related tests or styles.

::: danger ❌ Bad — inconsistent indentation and mixed tabs/spaces
```javascript
function sayHello(name) {
· ·console.log("Hello, " + name); // 2 spaces here
····console.log("How are you?"); // 4 spaces here
⇥console.log("Welcome!"); // tab here
}
```
:::
