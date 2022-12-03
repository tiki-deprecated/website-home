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
              ~/assets/images/png/app_banner_w_394.png   394w,
              ~/assets/images/png/app_banner_w_529.png   529w,
              ~/assets/images/png/app_banner_w_634.png   634w,
              ~/assets/images/png/app_banner_w_651.png   651w,
              ~/assets/images/png/app_banner_w_924.png   924w,
              ~/assets/images/png/app_banner_w_964.png   964w,
              ~/assets/images/png/app_banner_w_994.png   994w,
              ~/assets/images/png/app_banner_w_1051.png 1051w,
              ~/assets/images/png/app_banner_w_1044.png 1044w,
              ~/assets/images/png/app_banner_w_1228.png 1228w,
              ~/assets/images/png/app_banner_w_1270.png 1270w,
              ~/assets/images/png/app_banner_w_1290.png 1290w,
              ~/assets/images/png/app_banner_w_1343.png 1343w,
              ~/assets/images/png/app_banner_w_1314.png 1314w,
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
