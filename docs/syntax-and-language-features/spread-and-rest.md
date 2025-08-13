# 5.6 Spread & Rest Operators

Use the `...` syntax in two complementary ways:

- **Rest** gathers the remaining items into a single array or object. It shows up on the left side of a parameter list or assignment.
- **Spread** expands an array or object into individual elements. It appears on the right side in function calls or when constructing arrays and objects.

Both forms keep the original values untouched, making state updates predictable.
## Rest parameters

```js
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0)
}

sum(1, 2, 3) // 6
```

## Array spreading

```js
const primes = [2, 3]
const morePrimes = [...primes, 5] // [2, 3, 5]
```

## Object spreading for cloning/merging

```js
const user = { name: 'Ada', role: 'user' }
const updatedUser = { ...user, role: 'admin' } // user stays the same
```

## Combining rest and spread

```js
function addItems(list, ...items) {
  return [...list, ...items]
}

const nums = [1, 2]
const combined = addItems(nums, 3, 4) // [1, 2, 3, 4]
```

By creating new arrays and objects instead of mutating the originals, we gain the advantages of immutability: fewer side effects and easier reasoning about state.
