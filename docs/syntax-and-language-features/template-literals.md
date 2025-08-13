# 5.4 Template Literals
Use backticks to build strings with variables.

```js
const message = `Hello, ${name}`
```


Template literals can span multiple lines, which is useful for composing HTML strings:

```js
const markup = `
  <div class="greeting">
    <h1>Hello, ${name}</h1>
  </div>
`
```

Tagged template literals enable libraries to add custom behavior. Styling libraries like styled-components use them to define CSS:

```js
import styled from 'styled-components'

const Button = styled.button`
  background: palevioletred;
  color: white;
`
```

