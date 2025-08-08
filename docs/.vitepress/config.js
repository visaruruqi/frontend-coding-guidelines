import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Frontend Coding Guidelines',
  description: 'JavaScript and Vue coding standards',
  themeConfig: {
    sidebar: [
      {
        text: '1. Introduction',
        items: [
          { text: '1.1 Purpose of the Guidelines', link: '/introduction#purpose' },
          { text: '1.2 How to Use This Guide', link: '/introduction#how-to-use' },
          { text: '1.3 Scope (What’s Covered / Not Covered)', link: '/introduction#scope' },
          { text: '1.4 Versioning & Change Process', link: '/introduction#versioning' }
        ]
      },
      {
        text: '2. General Principles',
        items: [
          { text: '2.1 Readability First', link: '/general-principles#readability-first' },
          { text: '2.2 Maintainability', link: '/general-principles#maintainability' },
          { text: '2.3 Performance Considerations', link: '/general-principles#performance' },
          { text: '2.4 Security Practices', link: '/general-principles#security' }
        ]
      },
      {
        text: '3. Code Formatting',
        items: [
          { text: '3.1 Indentation & Spacing', link: '/code-formatting#indentation-and-spacing' },
          { text: '3.2 Line Length', link: '/code-formatting#line-length' },
          { text: '3.3 Semicolons', link: '/code-formatting#semicolons' },
          { text: '3.4 Quotation Marks', link: '/code-formatting#quotation-marks' },
          { text: '3.5 Braces & Parentheses Style', link: '/code-formatting#braces-and-parentheses' },
          { text: '3.6 Trailing Commas', link: '/code-formatting#trailing-commas' }
        ]
      },
      {
        text: '4. Naming Conventions',
        items: [
          { text: '4.1 Variables & Constants', link: '/naming-conventions#variables-and-constants' },
          { text: '4.2 Functions & Methods', link: '/naming-conventions#functions-and-methods' },
          { text: '4.3 Classes', link: '/naming-conventions#classes' },
          { text: '4.4 Files & Folders', link: '/naming-conventions#files-and-folders' },
          { text: '4.5 Boolean Naming', link: '/naming-conventions#boolean-naming' },
          { text: '4.6 Acronyms & Abbreviations', link: '/naming-conventions#acronyms-and-abbreviations' }
        ]
      },
      {
        text: '5. Syntax & Language Features',
        items: [
          { text: '5.1 `let`, `const`, and `var`', link: '/syntax-and-language-features#let-const-var' },
          { text: '5.2 Arrow Functions', link: '/syntax-and-language-features#arrow-functions' },
          { text: '5.3 Destructuring', link: '/syntax-and-language-features#destructuring' },
          { text: '5.4 Template Literals', link: '/syntax-and-language-features#template-literals' },
          { text: '5.5 Default Parameters', link: '/syntax-and-language-features#default-parameters' },
          { text: '5.6 Spread & Rest Operators', link: '/syntax-and-language-features#spread-and-rest' },
          { text: '5.7 Optional Chaining & Nullish Coalescing', link: '/syntax-and-language-features#optional-chaining' }
        ]
      },
      {
        text: '6. Code Structure & Organization',
        items: [
          { text: '6.1 Module Imports/Exports', link: '/code-structure-and-organization#module-imports-exports' },
          { text: '6.2 File Structure', link: '/code-structure-and-organization#file-structure' },
          { text: '6.3 Separation of Concerns', link: '/code-structure-and-organization#separation-of-concerns' },
          { text: '6.4 Commenting & Documentation', link: '/code-structure-and-organization#commenting-and-documentation' },
          { text: '6.5 TODO / FIXME Conventions', link: '/code-structure-and-organization#todo-fixme' }
        ]
      },
      {
        text: '7. Patterns & Best Practices',
        items: [
          { text: '7.1 DRY & Avoiding Repetition', link: '/patterns-and-best-practices#dry' },
          { text: '7.2 Pure Functions', link: '/patterns-and-best-practices#pure-functions' },
          { text: '7.3 Immutability', link: '/patterns-and-best-practices#immutability' },
          { text: '7.4 Error Handling', link: '/patterns-and-best-practices#error-handling' },
          { text: '7.5 Async/Await vs Promises', link: '/patterns-and-best-practices#async-await-vs-promises' },
          { text: '7.6 Event Handling', link: '/patterns-and-best-practices#event-handling' },
          { text: '7.7 Data Validation', link: '/patterns-and-best-practices#data-validation' }
        ]
      },
      {
        text: '8. Anti-Patterns',
        items: [
          { text: '8.1 Avoid `var`', link: '/anti-patterns#avoid-var' },
          { text: '8.2 Avoid Deep Nesting', link: '/anti-patterns#avoid-deep-nesting' },
          { text: '8.3 Magic Numbers & Strings', link: '/anti-patterns#magic-numbers' },
          { text: '8.4 Overusing Global Variables', link: '/anti-patterns#global-variables' },
          { text: '8.5 Callback Hell', link: '/anti-patterns#callback-hell' }
        ]
      },
      {
        text: '9. Framework-Specific Guidelines',
        items: [
          { text: '9.1 Vue.js Coding Standards', link: '/framework-specific-guidelines#vue-coding-standards' },
          { text: '9.2 Component Naming', link: '/framework-specific-guidelines#component-naming' },
          { text: '9.3 Props & Emits Conventions', link: '/framework-specific-guidelines#props-and-emits' },
          { text: '9.4 State Management Patterns (Vuex/Pinia)', link: '/framework-specific-guidelines#state-management' },
          { text: '9.5 File Naming in Components', link: '/framework-specific-guidelines#file-naming-components' },
          { text: '9.6 Testing Components', link: '/framework-specific-guidelines#testing-components' }
        ]
      },
      {
        text: '10. Tooling & Automation',
        items: [
          { text: '10.1 ESLint Rules', link: '/tooling-and-automation#eslint-rules' },
          { text: '10.2 Prettier Config', link: '/tooling-and-automation#prettier-config' },
          { text: '10.3 Git Hooks (Husky)', link: '/tooling-and-automation#git-hooks' }
        ]
      },
      {
        text: '11. Resources',
        items: [
          { text: '11.1 External Style Guides', link: '/resources#external-style-guides' },
          { text: '11.2 Useful Tools', link: '/resources#useful-tools' },
          { text: '11.3 Further Reading', link: '/resources#further-reading' }
        ]
      }
    ]
  }
})
