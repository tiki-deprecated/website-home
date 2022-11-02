<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <utils-svg-cmp name="hiring-bkg-desktop" class="bkg desktop" />
    <utils-svg-cmp name="hiring-bkg-mobile" class="bkg mobile" />
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'HiringBkgCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.bkg
  fill: $yellow-light

@include for-phone
  ::v-deep .bkg.svg
    width: 100vw

  .desktop
    display: none

@include for-tablet
  ::v-deep .bkg.svg
    width: 100vw

  .mobile
    display: none
</style>
