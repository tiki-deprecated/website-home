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
              ~/assets/images/png/home_banner_w_358.png   358w,
              ~/assets/images/png/home_banner_w_473.png   473w,
              ~/assets/images/png/home_banner_w_576.png   576w,
              ~/assets/images/png/home_banner_w_654.png   654w,
              ~/assets/images/png/home_banner_w_754.png   754w,
              ~/assets/images/png/home_banner_w_790.png   790w,
              ~/assets/images/png/home_banner_w_859.png   859w,
              ~/assets/images/png/home_banner_w_927.png   927w,
              ~/assets/images/png/home_banner_w_974.png   974w,
              ~/assets/images/png/home_banner_w_1026.png 1026w,
              ~/assets/images/png/home_banner_w_1080.png 1080w,
              ~/assets/images/png/home_banner_w_1148.png 1148w,
              ~/assets/images/png/home_banner_w_1178.png 1178w,
              ~/assets/images/png/home_banner_w_1217.png 1217w,
              ~/assets/images/png/home_banner_w_1273.png 1273w,
              ~/assets/images/png/home_banner_w_1316.png 1316w,
              ~/assets/images/png/home_banner_w_1355.png 1355w,
              ~/assets/images/png/home_banner_w_1369.png 1369w,
              ~/assets/images/png/home_banner_w_1400.png 1400w
            "
            src="~/assets/images/png/home_banner_w_1400.png"
            alt=""
            style="width: 100%"
          />
        </picture>
        <div class="text">
          <div class="title">
            Choose<br />
            better data
          </div>
          <div class="description">
            Build the new data economy with TIKI. Decentralized infrastructure
            to create private, safe, and compliant data transactions between
            people and businesses —more control, transparency, and value.
          </div>
          <div class="cta">
            <div>
              <div class="ctaLeadin">For individuals:</div>
              <utils-btn-cmp txt="Check out the App" />
            </div>
            <div>
              <div class="ctaLeadin">For developers:</div>
              <utils-btn-cmp txt="Explore the TIKI SDK" />
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

.bannerBkg
  position: absolute
  top: 0
  left: 0
  z-index: 1

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
    top: 50px

  .text
    margin: 0 5%

  .title
    font-size: 2.5em
    margin: 11px 0 21px 0

  .cta
    margin-top: 40px

  .ctaLeadin
    margin-bottom: 10px

  .bannerHomeCmp
    height: 110vh

@include for-tablet
  .bannerFlex
    display: flex
    flex-direction: row-reverse
    justify-content: space-between
    align-items: center

  .bannerImg
    width: 35%
    margin: auto

  .bannerContent
    transform: translateY(14vh)

  .text
    width: 40%
    max-width: 400px
    margin: auto 0 auto 12.67%

  .title
    font-size: 3em
    margin-bottom: 21px

  .cta
    margin-top: 60px

  .ctaLeadin
    margin-bottom: 10px

  .bannerHomeCmp
    height: 100vh
</style>
