# 10.3 Git Hooks (Husky)
Use Husky to run linting and tests before commits and pushes.

```sh
// package.json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint"
  }
}
```
