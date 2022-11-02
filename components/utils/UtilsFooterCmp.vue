<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div style="position: relative">
    <utils-svg-cmp name="footer-bkg-desktop" class="footerBkg" />
  </div>
</template>

<script>
import UtilsSvgCmp from './UtilsSvgCmp'

export default {
  name: 'UtilsFooterCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
.footerBkg
  width: 100vw
  position: absolute
  bottom: 0
  left: 0
  right: 0
  margin: auto
</style>
