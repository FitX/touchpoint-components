<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
:root {
  --layout-spacing: 1rem;
  font-size: calc(0.8rem + 0.8vw);
  font-size: min(max(1rem, calc(0.8rem + 0.8vw)), 22px);
}

/**
* Set up a decent box model on the root element
*/
html {
  box-sizing: border-box;
}

/**
 * Make all elements from the DOM inherit from the parent box-sizing
 * Since `*` has a specificity of 0, it does not override the `html` value
 * making all elements inheriting from the root box-sizing value
 * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
 */
*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
}

.content {
  max-width: 100%;
}

pre {
  --color-background: #000;
  --color-text: #fff;
  --spacing: 1rem;
  --negative-code-block: var(--layout-spacing);

  @media (min-width: 800px) {
    --negative-code-block: 0;
  }

  background: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing);
  max-width: calc(100% + (2 * var(--negative-code-block)));
  overflow: auto;
  margin-left: calc(var(--negative-code-block) * -1);
  margin-right: calc(var(--negative-code-block) * -1);
}
</style>

<style scoped>
#app {
  color: black;
  font-family: 'Niveau Grotesk',
  'Open Sans', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  padding: var(--layout-spacing);
  max-width: 100vw;
}
</style>
