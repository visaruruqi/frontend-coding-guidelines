# 10.3 Git Hooks (Husky)

Use Husky to run linting and tests before commits and pushes.

## Example: Run ESLint on `pre-commit`

1. **Install Husky** as a development dependency.

   ```sh
   npm install --save-dev husky
   ```

2. **Enable Husky** and ensure it is installed after every `npm install`.

   ```sh
   npm set-script prepare "husky install"
   npm run prepare
   ```

3. **Create a pre-commit hook** that runs your lint script.

   ```sh
   npx husky add .husky/pre-commit "npm run lint"
   ```

4. **Define the lint script** in `package.json`.

   ```json
   {
     "scripts": {
       "lint": "eslint ."
     }
   }
   ```

With this setup, ESLint runs automatically before each commit, preventing code that fails linting rules from being committed.

