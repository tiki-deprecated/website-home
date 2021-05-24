<template>
  <div class="container">
    <nuxt-link to="/">
      <utils-svg-cmp name="utils/logo" class="logo" />
    </nuxt-link>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'BlogHeaderCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

::v-deep .logo.svg
  fill: $white

.container
  background-color: $purple

@include for-phone
  ::v-deep .logo.svg
    height: 8vw

  .container
    padding: 4vw

@include for-tablet
  ::v-deep .logo.svg
    height: 2vw

  .container
    padding: 1.5vw
</style>
