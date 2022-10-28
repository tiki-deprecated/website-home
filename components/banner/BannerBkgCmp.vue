<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <utils-svg-cmp :style="fill" name="banner-bkg" class="bannerBkg" />
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

@include for-phone
  ::v-deep .bannerBkg.svg
    height: 130vh
    width: 100vw

@include for-tablet
  ::v-deep .bannerBkg.svg
    height: 100vh
    width: 100vw
</style>
