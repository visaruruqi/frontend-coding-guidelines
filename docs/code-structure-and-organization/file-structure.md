# 6.2 File Structure
Organize your files **by feature or domain** instead of grouping them purely by type.  
This keeps related code (components, services, store modules, tests) in one place,  
making it easier to locate and maintain functionality.

**Why:**  
- Reduces cognitive overhead — you look in one folder for all related code.  
- Makes refactoring easier — features can be moved or removed as a unit.  
- Helps with onboarding — new developers find things faster.

---

::: danger ❌ Bad — organized by type, related code is scattered

```
src/
  components/
    login-view.vue
    profile-view.vue
  services/
    auth.service.js
    profile.service.js
  store/
    auth.store.js
    profile.store.js
```
:::

::: tip ✅ Good — organized by feature/domain, related code stays together

```
src/
  auth/
    login-view.vue
    auth.service.js
    auth.store.js
  profile/
    profile-view.vue
    profile.service.js
    profile.store.js
```
:::

## Example project tree

Here is a simplified directory layout for a modern React or Vue application.  Feature
folders keep components, services, and tests close to the logic they implement.

```
my-app/
├─ src/
│  ├─ features/
│  │  ├─ auth/
│  │  │  ├─ LoginView.vue|tsx
│  │  │  ├─ auth.service.ts
│  │  │  └─ auth.test.ts
│  │  └─ profile/
│  │     ├─ ProfileView.vue|tsx
│  │     ├─ profile.service.ts
│  │     └─ profile.test.ts
│  ├─ shared/
│  │  └─ components/
│  │     └─ Button.vue|tsx
│  └─ main.ts
├─ package.json
└─ vite.config.ts
```

## Tips: grouping by feature vs. type

- **Prefer feature folders** when a set of components, services, and tests belong to
  the same domain (e.g., authentication or user profile).
- **Use type-based folders** only for truly shared items such as common components,
  utilities, or hooks that are reused across multiple features.
- **Be consistent** — avoid mixing feature and type groupings at the same directory
  level to keep navigation predictable.
- **Isolate large features**: if a feature grows big, nest its own substructure
  (components, services, etc.) inside the feature folder rather than promoting those
  files to the project root.

