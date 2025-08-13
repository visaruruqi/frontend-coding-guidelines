# 8.1 Avoid `var`
`var` has function scope and can lead to bugs. Use `let` or `const` instead.

## Hoisting pitfalls
```js
console.log(total); // undefined due to hoisting
var total = 3;

// console.log(totalLet); // ReferenceError: cannot access before initialization
let totalLet = 3;
```
`var` declarations are hoisted and initialized with `undefined`, making it easy to accidentally use a variable before it's assigned. `let` and `const` are also hoisted but remain in the temporal dead zone until declared, preventing unintended reads.

## Scope leakage
```js
if (true) {
  var leaked = 'visible outside';
}
console.log(leaked); // 'visible outside'

if (true) {
  let safe = 'block scoped';
}
console.log(safe); // ReferenceError: safe is not defined
```
Because `var` is function scoped, declarations inside blocks leak to the outer scope. `let` and `const` respect block scope, keeping temporary values contained.

## Loop example
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Outputs: 3, 3, 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Outputs: 0, 1, 2
```
Using `let` or `const` keeps variables predictable and prevents bugs.
