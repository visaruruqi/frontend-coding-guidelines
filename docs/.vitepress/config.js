import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Frontend Coding Guidelines',
  description: 'JavaScript and Vue coding standards',
  themeConfig: {
    nav: [
      { text: 'Naming', link: '/naming/descriptive-and-meaningful' },
      { text: 'Vue', link: '/vue/component-structure' }
    ],
    sidebar: {
      '/naming/': [
        {
          text: 'Naming Conventions',
          items: [
            { text: 'Descriptive and Meaningful', link: '/naming/descriptive-and-meaningful' },
            { text: 'Consistent Casing Patterns', link: '/naming/consistent-casing-patterns' },
            { text: 'Avoid Abbreviations and Ambiguity', link: '/naming/avoid-abbreviations' },
            { text: 'Names Reflect Data/Action Type', link: '/naming/names-reflect-data-action' },
            { text: 'Plural vs. Singular Names', link: '/naming/plural-vs-singular' },
            { text: 'Avoid Redundant Context in Names', link: '/naming/avoid-redundant-context' }
          ]
        }
      ],
      '/vue/': [
        {
          text: 'Vue Guidelines',
          items: [
            { text: 'Component Structure', link: '/vue/component-structure' }
          ]
        }
      ]
    }
  }
})
