import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import SidebarTitle from './SidebarTitle.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-top': () => h(SidebarTitle)
    })
  }
}
