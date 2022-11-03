<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <utils-svg-cmp name="quote-bkg-desktop" class="bkg desktop" />
    <utils-svg-cmp name="quote-bkg-mobile" class="bkg mobile" />
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
  fill: $yellow-light

@include for-phone
  .bkg
    width: 100%

  .desktop
    display: none

@include for-tablet
  .bkg
    width: 100%

  .mobile
    display: none
</style>
