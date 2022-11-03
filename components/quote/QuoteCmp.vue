<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="quoteCmp">
    <quote-bkg-cmp class="bkg" />
    <div class="createImg">
      <div class="createTxt">With TIKI, create</div>
      <picture>
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
            ~/assets/images/png/create_pineapple_w_200.png   200w,
            ~/assets/images/png/create_pineapple_w_735.png   735w,
            ~/assets/images/png/create_pineapple_w_1400.png 1400w
          "
          src="~/assets/images/png/create_pineapple_w_1400.png"
          alt=""
          class="createImgImg"
        />
      </picture>
    </div>
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
  display: block
  height: auto
  width: 100%

.txt
  position: absolute
  z-index: 2

.quoteCmp
  position: relative
  display: inline-block
  width: 100%
  overflow: clip

.createTxt
  font-weight: bold
  text-align: center

@include for-phone
  .bkg
    transform: translateX(-50%)

  .txt
    top: 0
    left: 0

@include for-tablet
  .txt
    top: 15%
    left: 0

  .createImgImg
    height: 100%
    width: auto

  .createImg
    margin: auto
    height: 40%
    width: fit-content
    display: block
    position: absolute
    z-index: 3
    top: 0
    left: 0
    right: 0

  .createTxt
    font-size: 2em
    margin-bottom: 30px
</style>
