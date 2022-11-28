<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="demoCmp">
    <demo-bkg-cmp class="demoBkg" />
    <div class="demoContent">
      <div class="title">We are <strong class="hlt">building</strong></div>
      <div class="subtitle">
        a vertically integrated user data ownership platform that combines data
        privacy, ownership issuance, and marketplace.
      </div>
      <demo-vid-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        yt-id="QbIO7EiHxcg"
        class="demoVid"
      />
      <picture class="demoImg">
        <img
          sizes="(max-width: 848px) 100vw, 848px"
          srcset="
            ~/assets/images/png/look_pineapple_w_200.png 200w,
            ~/assets/images/png/look_pineapple_w_848.png 848w
          "
          src="~/assets/images/png/look_pineapple_w_848.png"
          alt=""
          class="demoImgImg"
        />
      </picture>
    </div>
  </div>
</template>

<script>
import DemoBkgCmp from '@/components/demo/DemoBkgCmp'
import DemoVidCmp from '@/components/demo/DemoVidCmp'

export default {
  name: 'DemoCmp',
  components: { DemoBkgCmp, DemoVidCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.demoCmp
  position: relative
  display: inline-block

.demoBkg
  width: 100vw
  height: auto
  display: block

.demoContent
  position: absolute
  z-index: 2
  width: 100%

.title
  font-weight: bold
  color: $green-dark
  margin: auto
  text-align: center

.subtitle
  color: $green-dark
  font-size: 0.95em
  text-align: center

.hlt
  font-weight: bold
  color: $green

.demoVid
  margin: auto

.demoImg
  position: absolute
  z-index: 3

.demoImgImg
  width: 100%

@include for-phone
@include for-tablet
  .title
    font-size: 2.25em

  .subtitle
    width: 50%
    margin: 10px auto 40px auto

  .demoContent
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  .demoVid
    width: 50%

  .demoImg
    width: 12%
    bottom: -10%
    left: 15%
</style>
