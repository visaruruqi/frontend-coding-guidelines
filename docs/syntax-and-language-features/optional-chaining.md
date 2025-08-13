# 5.7 Optional Chaining & Nullish Coalescing
Use `?.` and `??` to safely access properties and provide fallbacks.

```js
const title = post?.title ?? 'Untitled'
```

Accessing nested properties without optional chaining can cause runtime errors:

```js
const street = user.address.street
// TypeError if user or address is undefined
```

Use optional chaining to prevent errors when traversing nested objects:

```js
const street = user?.address?.street ?? 'Unknown street'
```

Accessing array elements without optional chaining can similarly throw errors:

```js
const firstFriendName = user.friends[0].name
// TypeError if user, friends, or the first friend is undefined
```

Use optional chaining with bracket notation to safely access array elements:

```js
const firstFriendName = user?.friends?.[0]?.name ?? 'Unknown friend'
// Note the `?.[0]` syntax for optional array access
```

