<template>
  <main class="home">
    <s-g-nav :backlink="false"></s-g-nav>
    <div
      class="content"
      v-html="readmeContent"></div>
  </main>
</template>

<script>
import marked from 'marked';
import DOMPurify from 'dompurify';
import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css';
import '@/sg/styles/prism-theme.css';
import readme from '!raw-loader!projectRoot/README.md';

export default {
  name: 'Home',
  components: {
    SGNav: () => import('@/sg/components/SGNav.vue'),
  },
  computed: {
    readmeContent() {
      /* console.log(marked.lexer(readme));
      return DOMPurify.sanitize(marked(readme)); */
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: (code, language) => {
          const lang = (language || 'clike').toLowerCase();
          return Prism.highlight(code, Prism.languages[lang], lang);
        },
      });
      const renderer = {
        codespan(code) {
          const formatting = Prism.highlight(code, Prism.languages.clike, 'clike');
          return `<code class="code-inline">${formatting}</code>`;
        },
      };
      marked.use({ renderer });
      return DOMPurify.sanitize(marked(readme));
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid: 'nav' auto
  'content' 1fr / 100%;
  grid-gap: 2rem;

  @media (min-width: 800px) {
    grid: 'nav content' 1fr / 200px minmax(0, 1fr);
  }
}
</style>
