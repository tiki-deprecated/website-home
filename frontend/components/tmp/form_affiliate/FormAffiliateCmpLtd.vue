<template>
  <div class="formAffiliateCmpLtdCnt">
    <utils-svg-cmp name="money/sketch-signup" class="mnySignupSketch" />
    <div class="mnySignupTextCnt">
      <div class="mnySignupText">
        Beta access is limited to make sure everyone gets their fair (and
        significant) share.&nbsp;
        <b class="mnySignupTextHlt"> Only 9,568 left</b>
      </div>
      <utils-svg-cmp name="money/paint-warn" class="mnySignupPainWarn" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormAffiliateCmpLtd',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../../assets/styles/mixins"

.mnySignupTextCnt
  position: relative

.mnySignupText
  font-family: $font-family-nunito
  color: $money-blue-dark
  font-weight: bold
  position: absolute
  top: 0
  left: 0
  z-index: 1

.mnySignupTextHlt
  color: $money-red-dark
  font-weight: bold

.mnySignupPainWarn
  position: absolute

::v-deep .mnySignupPainWarn.svg > .warn
  fill: $money-red-dark

::v-deep .mnySignupPainWarn.svg > .layer1
  fill: $money-yellow

@include for-phone
  ::v-deep .mnySignupSketch.svg
    height: 9vw

  .mnySignupTextCnt
    height: 22vw

  .mnySignupText
    margin-top: 5vw
    font-size: 4vw

  .mnySignupPainWarn
    bottom: -4%
    right: -3%

  ::v-deep .mnySignupPainWarn.svg
    height: 8vw

@include for-tablet
  ::v-deep .mnySignupSketch.svg
    height: 3vw
    margin: 0 auto

  .mnySignupTextCnt
    height: 6.75vw

  .mnySignupText
    font-size: 1.25vw
    text-align: center
    top: 40%
    left: 50%
    transform: translate(-50%, -40%)
    width: 60%

  .mnySignupPainWarn
    bottom: 22%
    right: 16%

  ::v-deep .mnySignupPainWarn.svg
    height: 2.6vw
</style>
