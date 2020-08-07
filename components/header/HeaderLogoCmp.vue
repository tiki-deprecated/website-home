<template>
  <div>
    <utils-svg-cmp :name="name" />
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'HeaderLogoCmp',
  components: { UtilsSvgCmp },
  props: {
    name: {
      type: String,
      required: false,
      default: 'logo',
    },
  },
}
</script>

<style scoped lang="sass">
::v-deep .logo
  fill: $brown
  filter: drop-shadow(.15em .1em .2em rgba(0, 0, 0, 0.1))
</style>
