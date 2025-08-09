<template>
  <div class="sidebar-logo-title">
    <img v-if="logo" :src="logo" alt="logo" class="logo" />
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { site, theme } = useData()
const title = site.value.title
const logo = theme.value.logo
</script>

<style scoped>
.sidebar-logo-title {
  text-align: center;
  padding: 1rem 0;
}
.sidebar-logo-title .logo {
  display: block;
  margin: 0 auto;
  height: 40px;
}
.sidebar-logo-title .title {
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
}
</style>

