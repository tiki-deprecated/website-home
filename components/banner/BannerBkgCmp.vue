<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="bannerBkgWrapper">
    <picture class="peekImg" :style="hidePeek ? 'display: none;' : ''">
      <img
        sizes="(max-width: 691px) 100vw, 691px"
        srcset="
          ~/assets/images/png/peek_pineapple_w_200.png 200w,
          ~/assets/images/png/peek_pineapple_w_691.png 691w
        "
        src="~/assets/images/png/peek_pineapple_w_691.png"
        alt=""
        class="peekImgImg"
      />
    </picture>
    <utils-svg-cmp
      :style="fill"
      name="banner-bkg-desktop"
      class="bannerBkgSvg desktop"
    />
    <utils-svg-cmp
      :style="fill"
      name="banner-bkg-mobile"
      class="bannerBkgSvg mobile"
    />
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'BannerBkgCmp',
  components: { UtilsSvgCmp },
  props: {
    color: {
      type: String,
      default: theme.yellowLight,
      required: true,
    },
    hidePeek: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fill() {
      return 'fill: ' + this.color
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.peekImgImg
  width: 100%

.peekImg
  width: 75px
  position: absolute
  right: 25vw
  transform: rotate(-15deg)
  bottom: -1.5vw
  z-index: 1

.bannerBkgSvg
  z-index: 2
  position: absolute
  top: 0
  left: 0

::v-deep .bannerBkgSvg.svg
  height: 100%
  width: 100%

.bannerBkgWrapper
  position: relative
  display: block

@include for-phone
  .bannerBkgWrapper
    height: 900px
    width: 100vw

  .desktop
    display: none

@include for-tablet
  .bannerBkgWrapper
    height: 100vh
    width: 100vw

  .mobile
    display: none
</style>
