<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <utils-svg-cmp name="quote-bkg" class="bkg" />
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'QuoteBkgCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.bkg
  fill: $purple

@include for-phone
  .bkg
    height: 50vh

@include for-tablet
  .bkg
    width: 100%
    height: 100vh
</style>
