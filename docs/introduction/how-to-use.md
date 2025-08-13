# 1.2 How to Use This Guide
Browse the sidebar to find topics. Each section includes brief explanations and small examples that you can apply directly in daily work.

## Integrating these guidelines into a new project

1. Review the guide and share relevant sections with your team.
2. Initialize your project repository and install dependencies.
3. Install and configure linting and formatting tools:
   ```bash
   npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-import
   ```
4. Create an ESLint configuration file (e.g. `.eslintrc.cjs`) extending `eslint:recommended`, `plugin:import/recommended`, and integrating Prettier.
5. Add helpful scripts to `package.json`:
   ```json
   "scripts": {
     "lint": "eslint .",
     "lint:fix": "eslint . --fix",
     "format": "prettier . --check",
     "format:write": "prettier . --write"
   }
   ```
6. Run `npm run lint` and `npm run format` to verify the setup.
7. Configure your CI to run linting and any tests on every push and pull request.
8. Start building features, referring back to this guide whenever questions arise.

## Code review checklist

- [ ] Code adheres to the guidelines for structure, naming, and formatting.
- [ ] Linting and formatting scripts pass.
- [ ] Tests or documentation updates are included when necessary.
- [ ] Edge cases and error handling are considered.
- [ ] Code is easy to read and maintain.
- [ ] No leftover debugging or commented-out code.

