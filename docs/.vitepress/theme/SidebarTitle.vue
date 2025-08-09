<template>
  <div class="sidebar-logo-title">
    <img v-if="logo" :src="logo" alt="logo" class="logo" />
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { site, theme } = useData()
console.log('SidebarTitle component loaded',site);
const title = computed(() => site.value.title)
const logo = computed(() => {
  const path = theme.value.logo
  return path ? withBase(path) : undefined
})
</script>

<style scoped>
.sidebar-logo-title {
  padding: 1rem 0;
}
.sidebar-logo-title .logo {
  display: block;
  height: 30px;
}
.sidebar-logo-title .title {
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
}
</style>

