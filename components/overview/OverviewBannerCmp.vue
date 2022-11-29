<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="title">For those who want to say...</div>
    <div class="subtitle">
      It’s your data; wanting a say over what happens to it seems responsable.
    </div>
    <div class="cta">
      TIKI is meant for those who want to take an active role in the new data
      ecomony.
    </div>
    <picture class="ovrImg">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/app_pineapple_w_200.png   200w,
          ~/assets/images/png/app_pineapple_w_1073.png 1073w,
          ~/assets/images/png/app_pineapple_w_1400.png 1400w
        "
        src="~/assets/images/png/app_pineapple_w_1400.png"
        alt="We don’t tell you what to do, we provide tools; you decide!"
        class="ovrImgImg desktop"
      />
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/app_pineapple_mobile_w_200.png   200w,
          ~/assets/images/png/app_pineapple_mobile_w_763.png   763w,
          ~/assets/images/png/app_pineapple_mobile_w_1400.png 1400w
        "
        src="~/assets/images/png/app_pineapple_mobile_w_1400.png"
        alt="We don’t tell you what to do, we provide tools; you decide!"
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
    width: 60%

  .cta
    font-size: 2.25em
    margin: 40px auto
    width: 60%

  .ovrImg
    width: 45%
    margin: auto

  .mobile
    display: none
</style>
