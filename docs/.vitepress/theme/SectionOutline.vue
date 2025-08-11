<template>
  <nav
    v-if="items.length"
    class="section-outline VPDocAsideOutline"
    aria-labelledby="section-outline-aria-label"
  >
    <div class="content">
      <div
        class="outline-title"
        id="section-outline-aria-label"
        role="heading"
        aria-level="2"
      >
        {{ currentGroup.text }}
      </div>
      <ul>
        <li v-for="item in items" :key="item.link">
          <a
            class="outline-link"
            :href="withBase(item.link)"
            :class="{ active: isActive(item.link) }"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const { theme } = useData()
const route = useRoute()

const normalize = (path) => path.replace(/\/$/, '')
const currentPath = computed(() => normalize(route.path))

const currentGroup = computed(() => {
  const sidebar = theme.value.sidebar || []
  const path = currentPath.value
  return sidebar.find((group) =>
    group.items && group.items.some((item) => path.startsWith(normalize(item.link)))
  ) || { items: [], text: '' }
})

const items = computed(() => currentGroup.value.items)

const isActive = (link) => normalize(link) === currentPath.value
</script>

<style scoped>
/* No scoped styles; presentation handled in custom.css */
</style>
