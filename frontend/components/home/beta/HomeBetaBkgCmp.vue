<template>
  <div>
    <utils-svg-cmp name="home/beta/bkg" class="bkg" />
    <utils-svg-cmp name="home/beta/bkg-lg" class="bkgLg" />
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeBetaBkgCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.bkg, .bkgLg
  position: absolute
  top: 0
  left: 0
  z-index: 1

::v-deep .bkg.svg > .bkg, ::v-deep .bkgLg.svg > .bkg
  fill: $blue-light

::v-deep .bkg.svg > .blob1, ::v-deep .bkgLg.svg > .blob1
  fill: $pink

::v-deep .bkg.svg > .blob2, ::v-deep .bkgLg.svg > .blob2
  fill: $orange

::v-deep .bkg.svg > .paint, ::v-deep .bkgLg.svg > .paint
  fill: $yellow-light

::v-deep .bkg.svg > .text, ::v-deep .bkgLg.svg > .text
  fill: $blue-dark

::v-deep .bkg.svg > .live, ::v-deep .bkgLg.svg > .live
  fill: $pink

::v-deep .bkg.svg > .bulb, ::v-deep .bkgLg.svg > .bulb
  fill: $black-dark

@include for-phone
  .bkg
    display: unset

  .bkgLg
    display: none

@include for-tablet
  .bkg
    display: none

  .bkgLg
    display: unset
</style>
