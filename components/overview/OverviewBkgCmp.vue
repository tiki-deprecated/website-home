<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="overviewBkgWrapper">
    <utils-svg-cmp name="overview-bkg-desktop" class="overviewBkgSvg desktop" />
    <!-- <utils-svg-cmp name="overview-bkg-mobile" class="overviewBkgSvg mobile" /> -->
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'OverviewBkgCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

::v-deep .overviewBkgSvg.svg
  height: 100%
  width: 100%
  fill: $purple

.overviewBkgWrapper
  position: relative
  display: block

@include for-phone
  .overviewBkgWrapper
    height: 900px
    width: 100vw

  .desktop
    display: none

@include for-tablet
  .overviewBkgWrapper
    height: 100vh
    width: 100vw

  .mobile
    display: none
</style>
