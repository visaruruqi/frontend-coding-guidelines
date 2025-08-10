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

