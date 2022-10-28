<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="quoteCmp">
    <quote-bkg-cmp class="bkg" />
    <quote-txt-cmp class="txt" />
  </div>
</template>

<script>
import QuoteBkgCmp from './QuoteBkgCmp'
import QuoteTxtCmp from './QuoteTxtCmp'

export default {
  name: 'QuoteCmp',
  components: { QuoteBkgCmp, QuoteTxtCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.bkg
  position: absolute
  z-index: 1
  top: 0
  left: 0

.txt
  position: absolute
  z-index: 2

.quoteCmp
  position: relative
  width: 100%

@include for-phone
  .bkg
    top: 0
    left: 50%
    transform: translateX(-50%)
    overflow: clip

  .quoteCmp
    height: 50vh
    overflow: clip

@include for-tablet
  .quoteCmp
    height: 100vh

  .bkg
    top: 0
    left: 0
</style>
