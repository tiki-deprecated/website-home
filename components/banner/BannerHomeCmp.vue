<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import BannerBkgCmp from './BannerBkgCmp'

export default {
  name: 'BannerHomeCmp',
  components: { BannerBkgCmp },
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

.bannerFlex
  width: 100vw

@include for-phone
  .bannerContent
    top: 50px

  .text
    margin: 0 5%

  .title
    font-size: 2em
    margin: 11px 0 21px 0

  .description
    font-size: 0.95em

@include for-tablet
  .bannerFlex
    display: flex
    flex-direction: row-reverse
    justify-content: space-between
    align-items: center

  .bannerImg
    width: 50%

  .bannerContent
    transform: translateY(25%)

  .text
    width: 40%
    margin: auto 0 auto 12.67%

  .title
    font-size: 3em
    margin-bottom: 21px

  .description
    font-size: 0.95em
</style>
