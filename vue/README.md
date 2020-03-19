# touchpoint-components-vue
Vue Components Library for Gym Touchpoint

## Development
### Add new Component
Create Component in lib-components with kebab-case.

E.g. `app-button.vue`
and export them with camel-case name
e.g.
```
export default {
  name: 'AppButton',
  ...
}
```
the only missing Step is to add the new Component 
in the Entry File `src/lib-components/index.js` like
```
export { default as AppButton } from './app-button.vue';
```

### Serve Components
Serve Components via `npm run serve`.
Make sure that the component is imported in
`src/serve-dev.vue`

### Linting
Lint Components via `npm run lint`.

## Build
1. Update `package.json`, via `npm version <update_type>`
2. Build via `npm run build`.
3. Commit and Push Code
4. Publish via `npm publish`.
