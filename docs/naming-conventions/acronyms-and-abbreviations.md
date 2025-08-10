# 4.6 Acronyms & Abbreviations
Write full words instead of shortened or unclear names.  
Only use widely accepted abbreviations, such as `id` or `url`.  
If an acronym is necessary, capitalize it uniformly (e.g., `HttpClient`).

**Key points:**
- Avoid unclear short forms (`cfg`, `usrNm`).
- Prefer descriptive names (`config`, `userName`).
- Use consistent casing for acronyms within identifiers.

---

::: danger ❌ Bad — unclear and inconsistent
```javascript
function getUsrCfg(id) { // "Usr" and "Cfg" are unclear
  const usr_data = db.findUsrByID(id); // Mixed casing: ID vs id
  return usr_data;
}
```
:::

::: tip ✅ Good — clear and consistent
```javascript
function getUserConfig(userId) {
  const userData = db.findUserById(userId);
  return userData;
}
```
:::

