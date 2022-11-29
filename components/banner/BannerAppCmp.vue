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
            sizes="(max-width: 524px) 100vw, 524px"
            srcset="~/assets/images/png/coming_soon_w_524.png 524w"
            src="~/assets/images/png/coming_soon_w_524.png"
            alt=""
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
    width: 90%
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
    max-width: 300px

  .bannerImgImg
    width: 100%
    height: auto

  .cta
    margin-top: 50px
    justify-content: left

  .ctaBtn
    margin-right: 40px
</style>
