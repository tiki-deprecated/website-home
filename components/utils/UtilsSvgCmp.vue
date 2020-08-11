<template>
  <component :is="src" class="svg" />
</template>

<script>
export default {
  name: 'UtilsSvgCmp',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      return require('~/assets/images/svg/' + this.name + '.svg?inline')
    },
  },
}
</script>

<style scoped lang="sass">
.svg
  display: block
  font-size: inherit
</style>
