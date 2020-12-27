<template>
  <div class="header10Cnt">
    <div class="header10BkgImgLgCnt">
      <utils-svg-cmp name="blob/b4-lg" class="header10BkgImgLg" />
    </div>
    <div class="header10BkgImgCnt">
      <utils-svg-cmp name="blob/b4" class="header10BkgImg" />
    </div>
    <div class="header10Content">
      <div class="header10ContentWrapper">
        <div class="header10LogoWrapper">
          <nuxt-link to="/">
            <utils-svg-cmp name="tiki/logo" class="header10Logo" />
          </nuxt-link>
        </div>
        <div class="header10Text">
          Earn up to <b class="header10TextHlt">$10/month</b> for your data
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'Header10Cmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.header10Cnt
  background: $blue-light
  position: relative
  width: 100%

.header10BkgImgLgCnt, .header10BkgImgCnt
  position: absolute
  z-index: 1
  width: 100%
  overflow: hidden

.header10Content
  position: absolute
  top: 0
  left: 0
  z-index: 2
  height: 100%
  width: 100%

.header10LogoWrapper
  width: fit-content
  height: fit-content

::v-deep .header10BkgImgLg.svg, ::v-deep .header10BkgImg.svg
  fill: $tan

::v-deep .header10Logo.svg
  fill: $black-dark

.header10ContentWrapper
  position: relative

.header10Text
  font-family: $font-family-montserrat
  font-weight: 600
  color: $blue-dark
  text-align: center

.header10TextHlt
  font-weight: 600
  color: $red

@include for-phone
  .header10Cnt
    height: 89vw

  .header10BkgImgLgCnt
    display: none

  .header10ContentWrapper
    padding: 4vw

  ::v-deep .header10Logo.svg
    height: 8vw

  .header10Text
    font-size: 6vw
    width: 80%
    margin: 8vw auto 0 auto

@include for-tablet
  .header10Cnt
    height: 26vw

  .header10BkgImgCnt
    display: none

  ::v-deep .header10BkgImgLg.svg
    width: 110%
    left: -5%
    top: -40%
    transform: translate(-5%, -40%)

  .header10ContentWrapper
    padding: 1.5vw

  ::v-deep .header10Logo.svg
    height: 2vw

  .header10Text
    font-size: 2vw
    width: 25vw
    margin: 2vw auto 0 auto
</style>
