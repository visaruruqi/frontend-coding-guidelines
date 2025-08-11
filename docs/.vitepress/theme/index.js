import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import SidebarTitle from './SidebarTitle.vue'
import SectionOutline from './SectionOutline.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(SidebarTitle),
      'aside-outline-after': () => h(SectionOutline)
    })
  }
}
