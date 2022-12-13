<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="bannerAppCmp">
    <banner-bkg-cmp :color="color" class="bannerBkg" />
    <div class="bannerContent">
      <div class="bannerFlex">
        <picture class="bannerImg">
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcset="
              ~/assets/images/png/app_banner_w_200.png   200w,
              ~/assets/images/png/app_banner_w_389.png   389w,
              ~/assets/images/png/app_banner_w_635.png   635w,
              ~/assets/images/png/app_banner_w_660.png   660w,
              ~/assets/images/png/app_banner_w_690.png   690w,
              ~/assets/images/png/app_banner_w_950.png   950w,
              ~/assets/images/png/app_banner_w_951.png   951w,
              ~/assets/images/png/app_banner_w_996.png   996w,
              ~/assets/images/png/app_banner_w_1030.png 1030w,
              ~/assets/images/png/app_banner_w_1054.png 1054w,
              ~/assets/images/png/app_banner_w_1121.png 1121w,
              ~/assets/images/png/app_banner_w_1207.png 1207w,
              ~/assets/images/png/app_banner_w_1275.png 1275w,
              ~/assets/images/png/app_banner_w_1278.png 1278w,
              ~/assets/images/png/app_banner_w_1345.png 1345w,
              ~/assets/images/png/app_banner_w_1382.png 1382w,
              ~/assets/images/png/app_banner_w_1387.png 1387w,
              ~/assets/images/png/app_banner_w_1400.png 1400w
            "
            src="~/assets/images/png/app_banner_w_1400.png"
            alt="Proposed Bylaw: Companies with a severe data breach in the last 12 months require community approval"
            class="bannerImgImg"
          />
        </picture>
        <div class="text">
          <div class="title">
            Subscribe to our <strong class="hlt">Substack</strong> to get first
            access
          </div>
          <div class="subtitle">
            Or get involved immediately and hop in our Discord Channel.
          </div>
          <div class="cta">
            <utils-btn-cmp
              :txt-color="color"
              :bkg-color="btnColor"
              txt="Go to Substack"
              link="https://blog.mytiki.com"
              class="ctaBtn"
            />
            <utils-btn-cmp
              :txt-color="color"
              :bkg-color="btnColor"
              txt="Go to Discord"
              link="https://discord.gg/tiki"
              class="ctaBtn"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import UtilsBtnCmp from '../utils/UtilsBtnCmp'
import BannerBkgCmp from './BannerBkgCmp'

export default {
  name: 'BannerAppCmp',
  components: { BannerBkgCmp, UtilsBtnCmp },
  data: function () {
    return {
      color: theme.purple,
      btnColor: theme.pink,
    }
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.bannerAppCmp
  position: relative
  display: inline-block

.bannerBkg
  width: 100vw
  display: block

.bannerContent
  position: absolute
  z-index: 3
  width: 100%

.title
  font-weight: bold
  color: $white

.hlt
  font-weight: bold
  color: $pink

.bannerFlex
  width: 100vw

.cta
  display: flex
  align-items: center

.subtitle
  color: $white
  font-size: .95em

@include for-phone
  .bannerContent
    top: 100px

  .text
    margin: 0 5%

  .title
    font-size: 2.5em
    margin: 40px 0 20px 0

  .bannerImg
    width: 50%
    margin: auto
    display: block

  .bannerImgImg
    width: 100%
    height: auto

  .cta
    margin-top: 40px
    justify-content: space-between

@include for-tablet
  .bannerFlex
    display: flex
    justify-content: left
    align-items: center
    height: 100%

  .bannerContent
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    height: 50%

  .text
    width: 70%
    max-width: 500px
    margin: auto auto auto 5%

  .title
    font-size: 2.25em
    text-align: left
    margin: 0 auto 15px auto

  .bannerImg
    width: 30%
    margin: auto 5% auto auto
    max-width: 250px

  .bannerImgImg
    width: 100%
    height: auto

  .cta
    margin-top: 50px
    justify-content: left

  .ctaBtn
    margin-right: 40px
</style>
