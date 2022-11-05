<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="bannerHomeCmp">
    <banner-bkg-cmp :color="color" class="bannerBkg" />
    <div class="bannerContent">
      <div class="bannerFlex">
        <picture class="bannerImg">
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcset="
              ~/assets/images/png/home_banner_w_200.png   200w,
              ~/assets/images/png/home_banner_w_474.png   474w,
              ~/assets/images/png/home_banner_w_671.png   671w,
              ~/assets/images/png/home_banner_w_827.png   827w,
              ~/assets/images/png/home_banner_w_956.png   956w,
              ~/assets/images/png/home_banner_w_1091.png 1091w,
              ~/assets/images/png/home_banner_w_1203.png 1203w,
              ~/assets/images/png/home_banner_w_1305.png 1305w,
              ~/assets/images/png/home_banner_w_1400.png 1400w
            "
            src="~/assets/images/png/home_banner_w_1400.png"
            alt=""
            class="bannerImgImg"
          />
        </picture>
        <div class="text">
          <div class="title">
            Choose<br />
            Better Data
          </div>
          <div class="description">
            Decentralized infrastructure to create private, safe, and compliant
            data transactions between people and businesses —more control,
            transparency, and value. Build the new data economy with TIKI.
          </div>
          <div class="cta">
            <div>
              <div class="ctaLeadin">For individuals:</div>
              <utils-btn-cmp txt="Coming Soon" />
            </div>
            <div>
              <div class="ctaLeadin">For developers:</div>
              <utils-btn-cmp
                txt="Explore the TIKI SDK"
                link="https://github.com/tiki"
              />
            </div>
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
  name: 'BannerHomeCmp',
  components: { BannerBkgCmp, UtilsBtnCmp },
  data: function () {
    return {
      color: theme.yellowLight,
    }
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.bannerHomeCmp
  position: relative
  display: inline-block

.bannerBkg
  width: 100vw
  height: auto
  display: block

.bannerContent
  position: absolute
  z-index: 2
  width: 100%

.title
  font-weight: bold
  line-height: 1em

.description
  font-weight: 500
  font-size: 0.95em

.bannerFlex
  width: 100vw

.cta
  display: flex
  align-items: center
  justify-content: space-between

.ctaLeadin
  margin: auto
  text-align: center
  font-size: 0.95em
  font-weight: 500

@include for-phone
  .bannerContent
    top: 100px

  .text
    margin: 0 5%

  .title
    font-size: 2.5em
    margin: 11px 0 21px 0

  .cta
    margin-top: 50px
    justify-content: space-around

  .ctaLeadin
    margin-bottom: 10px

  .bannerImg
    width: 85%
    margin: auto
    display: block

  .bannerImgImg
    width: 100%
    height: auto

@include for-tablet
  .bannerFlex
    display: flex
    flex-direction: row-reverse
    justify-content: space-between
    align-items: center
    height: 100%

  .bannerImg
    width: 90%
    margin: auto
    max-width: 450px

  .bannerImgImg
    width: 100%
    height: auto

  .bannerContent
    top: 50%
    left: 0
    transform: translateY(-50%)
    height: 80%

  .text
    width: 40%
    max-width: 400px
    margin: auto 0 auto 12.67%

  .title
    font-size: 3em
    margin-bottom: 21px

  .cta
    margin-top: 60px
    justify-content: space-between
    min-width: 370px

  .ctaLeadin
    margin-bottom: 10px
</style>
