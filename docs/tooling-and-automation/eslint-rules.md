# 10.1 ESLint Rules
Use a shared ESLint configuration to enforce these guidelines, catch common errors, and keep code style consistent. Extend from popular base configs like `eslint:recommended` and framework or language presets as needed.

```json
// .eslintrc.json
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "eqeqeq": "error",
    "no-unused-vars": "warn"
  }
}
```

Add a lint script to run ESLint across the project:

```json
// package.json
{
  "scripts": {
    "lint": "eslint \"**/*.{js,ts,tsx}\""
  }
}
```

Run the linter with:

```bash
npm run lint
```
