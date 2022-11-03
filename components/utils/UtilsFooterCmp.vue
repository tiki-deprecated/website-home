<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="footerContainer">
    <utils-svg-cmp
      name="footer-bkg-desktop"
      class="footerBkg"
      :style="'fill: ' + bkgColor"
    />
  </div>
</template>

<script>
import theme from '../../assets/styles/_export.scss'
import UtilsSvgCmp from './UtilsSvgCmp'

export default {
  name: 'UtilsFooterCmp',
  components: { UtilsSvgCmp },
  props: {
    bkgColor: {
      type: String,
      default: theme.yellowLight,
    },
  },
}
</script>

<style scoped lang="sass">

.footerContainer
  position: relative
  display: block

.footerBkg
  width: 100vw
  display: block
  height: auto
</style>
