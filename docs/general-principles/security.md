# 2.4 Security Practices
Validate user input, escape dynamic content, and keep dependencies updated to minimize vulnerabilities.

Unsanitized HTML can expose your application to cross-site scripting (XSS):

```js
const userInput = '<img src=x onerror="alert(1)">'
output.innerHTML = userInput // unsafe
```

Sanitize user-generated content before inserting it:

```js
import DOMPurify from 'dompurify'

output.innerHTML = DOMPurify.sanitize(userInput)
```

Run dependency auditing tools such as `npm audit` or `npx snyk test` to identify vulnerable packages.
