<template>
  <div>
    <utils-svg-cmp :name="name" />
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'HeaderIconCmp',
  components: { UtilsSvgCmp },
  props: {
    name: {
      type: String,
      required: false,
      default: 'icon',
    },
  },
}
</script>

<style scoped lang="sass">
::v-deep .icon
  fill: $brown
  filter: drop-shadow(0.15em 0.1em 0.2em rgba(0, 0, 0, 0.1))
</style>
