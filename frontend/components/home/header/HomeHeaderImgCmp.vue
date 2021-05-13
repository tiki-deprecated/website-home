<template>
  <div>
    <div class="imgLgHide">
      <utils-svg-cmp name="home/header/bkg-img-lg" class="bkgImgLg" />
    </div>
    <div class="imgHide">
      <utils-svg-cmp name="home/header/bkg-img" class="bkImg" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeHeaderImgCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.bkgImgLg, .bkImg
  position: absolute
  z-index: 1

::v-deep .bkgImgLg.svg > .layer1, ::v-deep .bkgImgLg.svg > .lens, ::v-deep .bkImg.svg > .layer1, ::v-deep .bkImg.svg > .lens
  fill: $orange

::v-deep .bkgImgLg.svg > .layer2, ::v-deep .bkImg.svg > .layer2
  fill: $yellow-xlight

::v-deep .bkgImgLg.svg > .frames, ::v-deep .bkImg.svg > .frames
  fill: $black-dark

::v-deep .bkgImgLg.svg > .pineapple, ::v-deep .bkImg.svg > .pineapple
  fill: $black-light

@include for-phone
  .imgLgHide
    display: none

  ::v-deep .bkImg.svg
    height: 40vw
    right: 0
    bottom: 22%

@include for-tablet
  .imgHide
    display: none

  ::v-deep .bkgImgLg.svg
    height: 17vw
    right: 0
    top: 17%
</style>
