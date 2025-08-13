# 10.2 Prettier Config
Format code automatically with a team-approved Prettier setup.

## Sample configuration

```json
// .prettierrc
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "es5",
  "printWidth": 80
}
```

## CLI usage

```bash
# Check formatting
npx prettier . --check

# Write formatting changes
npx prettier . --write
```

Prettier integrates with other tools for a smoother workflow:

- **VSCode** – install the Prettier extension and enable *Format on Save*.
- **Husky** – add a pre-commit hook to ensure code is formatted before commits.

