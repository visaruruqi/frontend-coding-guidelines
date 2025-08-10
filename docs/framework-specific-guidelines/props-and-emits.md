# 9.3 Props & Emits Conventions
Define props and emits with explicit types and avoid using `any`.

```vue
<script setup>
const props = defineProps<{ label: string }>()
const emit = defineEmits<{ (e: 'update'): void }>()
</script>
```

