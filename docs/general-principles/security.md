# 2.4 Security Practices
Validate user input, escape dynamic content, and keep dependencies updated to minimize vulnerabilities.

```js
import DOMPurify from 'dompurify'

const safeHtml = DOMPurify.sanitize(userInput)
```
