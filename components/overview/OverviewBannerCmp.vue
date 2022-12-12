<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="title">Your Data Fuels the World</div>
    <div class="subtitle">The Headquarters of Data Ownership:</div>
    <div class="cta">
      TIKI is for those who want to take an active role in shaping the future of
      data.
    </div>
    <picture class="ovrImg">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/app_pineapple_w_200.png   200w,
          ~/assets/images/png/app_pineapple_w_1119.png 1119w,
          ~/assets/images/png/app_pineapple_w_1400.png 1400w
        "
        src="~/assets/images/png/app_pineapple_w_1400.png"
        alt="We provide the tools, you create the new data economy."
        class="ovrImgImg desktop"
      />
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/app_pineapple_mobile_w_200.png   200w,
          ~/assets/images/png/app_pineapple_mobile_w_797.png   797w,
          ~/assets/images/png/app_pineapple_mobile_w_1400.png 1400w
        "
        src="~/assets/images/png/app_pineapple_mobile_w_1400.png"
        alt="We provide the tools, you create the new data economy."
        class="ovrImgImg mobile"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'OverviewBannerCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.title
  font-weight: bold
  color: $white
  font-size: .95em
  text-align: center

.subtitle
  font-size: .95em
  color: $white
  text-align: center

.cta
  color: $white
  text-align: center
  font-weight: bold

.ovrImg
  display: block

.ovrImgImg
  width: 100%

@include for-phone
  .title
    margin-bottom: 20px

  .subtitle
    margin: auto
    width: 90%

  .cta
    font-size: 1.75em
    margin: 40px auto
    width: 90%

  .ovrImg
    margin: auto

  .desktop
    display: none

@include for-tablet
  .title
    margin: auto

  .subtitle
    margin: auto
    width: 500px

  .cta
    font-size: 2.25em
    margin: 40px auto
    width: 700px

  .ovrImg
    width: 45%
    margin: auto

  .mobile
    display: none
</style>
