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
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto:wght@400;700&family=Space+Mono&display=swap');

// responsive vertical rhythm
@function rvr($multiple) {
  @return calc(var(--baseline) * #{$multiple} * 1rem);
}

:root {
  --layout-spacing: 1rem;
  --baseline: 1.2;
  --color-sg-primary: #d52836;
  --color-sg-secondary: #7CB0E0;
  // #FF706D // #004B75

  --font-highlight: 'Lora', serif;
  --font-code: 'Space Mono', monospace;

  line-height: var(--baseline);
  font-size: calc(0.8rem + 0.8vw);
  font-size: min(max(1rem, calc(0.8rem + 0.8vw)), 22px);

  @media (min-width: 30em) {
    --baseline: 1.4;
  }
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

*:not(ul, ol) {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
}

.content {
  max-width: 100%;

  .button,
  button,
  dd,
  dt,
  li {
    margin-top: 0;
    margin-bottom: rvr(0.25);
  }

  fieldset,
  input,
  select,
  textarea,
  h3,
  h4 {
    margin-top: 0;
    margin-bottom: rvr(0.5);
  }

  blockquote,
  dl,
  figure,
  form,
  ol,
  p,
  pre,
  pre[class*="language-"],
  table,
  ul,
  h1,
  h2,
  hr {
    margin-top: 0;
    margin-bottom: rvr(0.75);
  }

  h1 {
    font-family: var(--font-highlight);
    color: var(--color-sg-primary);
  }

  h2 {
    font-family: var(--font-highlight);
  }

  a {
    color: var(--color-sg-secondary);
  }
}

pre,
.code-inline {
  --color-background: #000;
  --color-text: #fff;
  --spacing: 1rem;

  font-family:
    var(--font-code, 'Space Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace);
  font-size: 0.75rem;
  background: var(--color-background);
  color: var(--color-text);
  padding: 0 calc(var(--spacing) / 2);
  word-wrap: break-word;
  word-break: keep-all;
  hyphens: none;
}

pre {
  --negative-code-block: var(--layout-spacing);

  @media (min-width: 800px) {
    --negative-code-block: 0;
  }

  padding: var(--spacing);
  max-width: calc(100% + (2 * var(--negative-code-block)));
  overflow: auto;
  margin-left: calc(var(--negative-code-block) * -1);
  margin-right: calc(var(--negative-code-block) * -1);
}
</style>

<style lang="scss" scoped>
// responsive vertical rhythm
@function rvr($multiple) {
  @return calc(var(--baseline) * #{$multiple} * 1rem);
}

#app {
  color: black;
  font-family: 'Roboto', sans-serif;
  padding: rvr(1);
  max-width: 100vw;
  /* background-image:
    linear-gradient(#fff calc(var(--baseline) * 1rem),
    var(--color-sg-secondary) calc(var(--baseline) * 1rem));
  background-size: 100% calc(var(--baseline) * 1rem + 1px); */
}
</style>
