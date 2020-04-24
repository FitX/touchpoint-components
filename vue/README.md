# touchpoint-components-vue
[Vue Components Library for Gym Touchpoint](https://touchpoint-components.netlify.app)

[![npm](https://badgen.net/npm/v/touchpoint-components-vue)](https://www.npmjs.com/package/touchpoint-components-vue)
[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/touchpoint-components-vue/dist/touchpoint-components-vue.min.js)](https://cdn.jsdelivr.net/npm/touchpoint-components-vue/dist/touchpoint-components-vue.min.js)
[![install size](https://badgen.net/packagephobia/install/touchpoint-components-vue)](https://packagephobia.now.sh/result?p=touchpoint-components-vue)
[![downloads](https://badgen.net/npm/dt/touchpoint-components-vue)](https://www.npmjs.com/package/touchpoint-components-vue)
[![dep](https://badgen.net/david/dep/fitx/touchpoint-components/vue?label=deps)](https://david-dm.org/fitx/touchpoint-components-vue)
[![dev dep](https://badgen.net/david/dev/fitx/touchpoint-components/vue?label=devDeps)](https://david-dm.org/fitx/touchpoint-components?type=dev)

---

## Development
### Add new Component
**Easy create new Component inclusive Documentation Boilerplate** 

via
```
npm run generate-component
```

e.g.
```
npm run generate-component app-button
```

<details>
<summary>Manuel:</summary>
Create Component in lib-components with kebab-case.

E.g. `app-button.vue`
and export them with camel-case name
e.g.
```javascript
export default {
  name: 'AppButton',
  ...
}
```
the only missing Step is to add the new Component 
in the Entry File `src/lib-components/index.js` like
```javascript
export { default as AppButton } from './app-button.vue';
```
</details>

### Serve Components
- Serve Components via `npm run serve`.
- Or build Components Library via `npm run build-sg`.

### Linting
- Lint Components via `npm run lint`.

### Testing
- Cypress Unit Testing via `npm run test:unit`.

## Build
1. Update `package.json`, via `npm version [update_type]`
2. Build via `npm run build`.
3. Commit and Push Code
4. Publish via `npm publish`.
