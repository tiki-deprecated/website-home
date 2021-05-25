<template>
  <div class="container">
    <nuxt-link to="/">
      <utils-svg-cmp name="utils/logo" class="logo" />
    </nuxt-link>
    <nuxt-link
      v-scroll-to="{ el: '#categories' }"
      :to="{ path: '/blog', hash: 'categories' }"
      ><utils-svg-cmp name="blog/tiles" class="tiles" />
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

::v-deep .tiles.svg
  fill: $white

.container
  background-color: $purple
  display: flex
  align-items: center
  justify-content: space-between

@include for-phone
  ::v-deep .logo.svg
    height: 7vw

  .container
    padding: 4vw

  ::v-deep .tiles.svg
    height: 8vw

@include for-tablet
  ::v-deep .logo.svg
    height: 2vw

  .container
    padding: 1.5vw

  ::v-deep .tiles.svg
    height: 1.75vw
</style>
