# 10. Tooling & Automation

## 10.1 ESLint Rules {#eslint-rules}
Use a shared ESLint configuration to enforce these guidelines and catch common errors.

```json
// .eslintrc.json
{
  "extends": ["eslint:recommended"],
  "env": { "browser": true }
}
```

## 10.2 Prettier Config {#prettier-config}
Format code automatically with a team-approved Prettier setup.

```json
// .prettierrc
{
  "singleQuote": true,
  "semi": false
}
```

## 10.3 Git Hooks (Husky) {#git-hooks}
Use Husky to run linting and tests before commits and pushes.

```sh
// package.json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint"
  }
}
```
