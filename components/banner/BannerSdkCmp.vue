<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="bannerSdkCmp">
    <banner-bkg-cmp :color="color" class="bannerBkg" />
    <div class="bannerContent">
      <div class="title">Choose Better Data</div>
      <div class="description">
        <strong class="hlt">Infrastructure</strong> for the new data economy,
        built for those building it.
      </div>
      <div class="cta">
        <div class="ctaLeadin">
          <b>Free</b>: 100k users<br /><b>$100/mth</b>: infinity users
        </div>
        <utils-btn-cmp
          txt="Get Started"
          link="https://console.mytiki.com"
          :txt-color="txtColor"
          :bkg-color="btnColor"
          class="ctaBtn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import UtilsBtnCmp from '../utils/UtilsBtnCmp'
import BannerBkgCmp from './BannerBkgCmp'

export default {
  name: 'BannerSdkCmp',
  components: { BannerBkgCmp, UtilsBtnCmp },
  data: function () {
    return {
      color: theme.greenLight,
      btnColor: theme.green,
      txtColor: theme.greenDark,
    }
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.bannerSdkCmp
  position: relative
  display: inline-block
  color: $green-dark

.bannerBkg
  width: 100vw
  display: block

.bannerContent
  position: absolute
  z-index: 2
  width: 100%

.title
  font-weight: 500
  text-transform: uppercase

.hlt
  font-weight: bold
  color: $green

.description
  font-weight: bold

.ctaLeadin
  margin: auto
  text-align: center
  font-size: 0.95em

@include for-phone
  .bannerContent
    top: 20vh
    width: 90%
    left: 50%
    transform: translateX(-50%)

  .text
    margin: 0 5%

  .title
    font-size: 1.3em
    margin-bottom: 15px

  .description
    font-size: 3.25em

  .cta
    margin: 50px auto 0 auto

  .ctaLeadin
    font-size: 1.3em
    margin-bottom: 50px

  .ctaBtn
    margin: 0 auto
    display: block

@include for-tablet
  .bannerContent
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    height: 50%

  .text
    width: 40%
    max-width: 400px
    margin: auto 0 auto 12.67%

  .title
    font-size: .95em
    text-align: center
    margin: 0 auto 15px auto

  .description
    font-size: 2.25em
    text-align: center
    margin: auto
    max-width: 700px

  .cta
    margin: 40px auto 0 auto
    text-align: center
    min-width: 370px

  .ctaLeadin
    margin: 0 auto 40px auto
    text-align: center
</style>
