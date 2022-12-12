<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <utils-svg-cmp name="sdk-bkg-desktop" class="sdkBkg desktop" />
    <utils-svg-cmp name="sdk-bkg-mobile" class="sdkBkg mobile" />
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'DemoBkgCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

::v-deep .sdkBkg.svg
  fill: $green-light

@include for-phone
  ::v-deep .sdkBkg.svg
    height: 900px
    width: 100vw

  .desktop
    display: none

@include for-tablet
  ::v-deep .sdkBkg.svg
    width: 100vw

  .mobile
    display: none
</style>
