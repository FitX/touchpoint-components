<template>
<div>
  <button @click="toggleDescription">Hinweise anzeigen</button>
  <ul
    class="sg-colors">
    <li
      class="sg-colors__item"
      :class="[{ 'sg-colors__item--collapsed' : declaration.description && showDescription  }]"
      :style="{ background: declaration.value }"
      v-for="(declaration, index) in colors"
      :key="index">
    <span class="sg-colors__title">
      {{ declaration.name }}
    </span>
      <span
        v-if="declaration.description && showDescription"
        class="sg-colors__description">
      {{ declaration.description }}
    </span>
    </li>
  </ul>
</div>
</template>

<script>
import colors from '!raw-loader!@/styles/colors.scss';

const getColorDefinitionsFromString = (string = colors, separator = ';') => string
  // replace whitespace
  // .replace(/\s/g, '')
  // replace line breaks
  .replace(/(?:\r\n|\r|\n)/g, '')
  .split(separator)
  // remove empty
  .filter((notEmpty) => notEmpty);

export default {
  name: 'SGColors',
  computed: {
    colors() {
      return [...getColorDefinitionsFromString()]
        // get declaration array from string
        .map((declaration) => getColorDefinitionsFromString(declaration, ':'))
        // convert array to object
        // .map((declarationArray) => ({ ...declarationArray }));
        /* .map((declarationArray) => ({
          name: declarationArray[0],
          value: declarationArray[1],
          description: declarationArray[0].startsWith('///'),
        })); */
        .map((declarationArray) => {
          let name = declarationArray[0];
          let description = null;
          const hasComment = name.startsWith('///');

          if (hasComment) {
            const nameCommentArray = name
              .replace(/(?:\r\n|\r|\n)/g, '')
              .split('$');
            [description, name] = nameCommentArray;
            // replace '///' comment identifier
            description = description.replace(/\/\/\//g, '');
            // description = description.split('///').join('');
          }

          return {
            name: name.replace('$', ''),
            value: declarationArray[1],
            description,
          };
        });
    },
  },
  data() {
    return {
      showDescription: false,
    };
  },
  methods: {
    toggleDescription() {
      this.showDescription = !this.showDescription;
    },
  },
};
</script>

<style lang="scss" scoped>
.sg-colors {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-auto-flow: dense;
  grid-gap: 1rem;

  &__item {
    min-height: 4rem;
    display: grid;
    grid-gap: 0;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
    grid:
      '.' 1fr
      'title' 1fr
      / 1fr;

    &--collapsed {
      grid-column: 1 / 3;
      grid:
        '. description' 1fr
        '. title' auto
      / 2rem 1fr;
    }
  }

  &__title,
  &__description {
    grid-area: title;
    padding: 0.25rem;
    align-self: end;
    background: rgba(255, 255, 255, 0.8);
  }

  &__description {
    grid-area: description;
    align-self: auto;
    filter: invert(1);
  }
}
</style>
