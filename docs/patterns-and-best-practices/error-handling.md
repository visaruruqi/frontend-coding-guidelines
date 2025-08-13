# 7.4 Error Handling
Handle errors with `try/catch` or promise rejections and provide helpful messages.

```js
try {
  await save()
} catch (err) {
  console.error('Failed to save', err)
}
```

### Philosophy and strategies

- Fail fast in development, but recover gracefully in production.
- Centralize error handling and logging for consistent behavior.
- Distinguish between recoverable and unrecoverable errors, offering retries or fallbacks where appropriate.
- Use monitoring to detect and triage issues early.
- Avoid swallowing errors; bubble them up or rethrow with contextual information.

Use app-level error boundaries or global handlers to catch runtime exceptions that escape local handlers.

### Vue

```vue
<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)
onErrorCaptured((error, instance, info) => {
  hasError.value = true
  logError(error, info) // send to monitoring service
  return false // allow parent handlers to run
})
</script>

<template>
  <slot v-if="!hasError" />
  <p v-else>Something went wrong.</p> <!-- user-facing message -->
</template>
```

Frameworks can also register a global handler:

```js
// Browser
window.addEventListener('error', (event) => {
  logError(event.error)
})

// Vue
app.config.errorHandler = (err, instance, info) => {
  logError(err, info)
}
```

**User-facing messages vs. logging**

- Show friendly, actionable messages to users without exposing stack traces or sensitive data.
- Log full error details to the console or a monitoring service for developers to investigate.

