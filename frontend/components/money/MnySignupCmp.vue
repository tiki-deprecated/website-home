<template>
  <div class="mnySignupCnt">
    <utils-svg-cmp name="money/sketch-signup" class="mnySignupSketch" />
    <div class="mnySignupTextCnt">
      <div class="mnySignupText">
        Beta access is limited to make sure everyone gets their fair (and
        significant) share.&nbsp;
        <b class="mnySignupTextHlt"> Only 9,568 left</b>
      </div>
      <utils-svg-cmp name="money/paint-warn" class="mnySignupPainWarn" />
    </div>
    <div class="mnySignupField">
      <div class="mnySignupFieldInput">
        <div class="mnySignupFieldInputHint">Access Code</div>
      </div>
      <div class="mnySignupFieldSend">
        <utils-svg-cmp name="money/ico-send" class="mnySignupFieldSendIco" />
      </div>
    </div>
    <div class="progressGroup">
      <div class="progressDot progressDot1" />
      <div class="progressDot progressDot2" />
      <div class="progressDot progressDot3" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
export default {
  name: 'MnySignupCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnySignupCnt
  position: relative
  background: $money-yellow-light

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

.mnySignupField
  display: flex
  align-items: center

.mnySignupFieldInput
  background: $money-white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $money-gray-xlight

.mnySignupFieldInputHint
  color: $money-blue
  font-family: $font-family-montserrat
  font-weight: 600

.mnySignupFieldSend
  background: $money-blue-dark
  position: relative
  border-style: solid
  border-color: $money-blue-dark

.mnySignupFieldSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .mnySignupFieldSendIco.svg
  fill: $money-white

.progressGroup
  display: flex
  align-items: center
  justify-content: space-between

.progressDot1
  background: $money-blue-dark

.progressDot2
  background: $money-white

.progressDot3
  background: $money-white

.mnySignupTextCnt
  position: relative

.mnySignupPainWarn
  position: absolute

::v-deep .mnySignupPainWarn.svg > .warn
  fill: $money-red-dark

::v-deep .mnySignupPainWarn.svg > .layer1
  fill: $money-yellow

@include for-phone
  .mnySignupCnt
    border-radius: 5vw
    padding: 7vw 5vw

  ::v-deep .mnySignupSketch.svg
    height: 9vw

  .mnySignupText
    margin-top: 5vw
    font-size: 4vw

  .mnySignupField
    margin-top: 8vw
    width: 100%

  .mnySignupFieldInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px

  .mnySignupFieldInputHint
    font-size: 6vw
    margin-left: 4vw

  .mnySignupFieldSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 1px
    margin-left: -1px

  .mnySignupFieldSendIco
    width: 8vw

  .progressGroup
    width: 15%
    margin: 8vw auto 0 auto

  .progressDot
    height: 2vw
    width: 2vw
    border-radius: 10vw

  .mnySignupTextCnt
    height: 22vw

  .mnySignupPainWarn
    bottom: -4%
    right: -3%

  ::v-deep .mnySignupPainWarn.svg
    height: 8vw

@include for-tablet
  .mnySignupCnt
    border-radius: 1vw
    padding: 3vw 3vw

  ::v-deep .mnySignupSketch.svg
    height: 3vw
    margin: 0 auto

  .mnySignupText
    font-size: 1.25vw
    text-align: center
    top: 40%
    left: 50%
    transform: translate(-50%, -40%)
    width: 60%

  .mnySignupField
    margin: 0 auto
    width: 50%

  .mnySignupFieldInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px

  .mnySignupFieldInputHint
    font-size: 1vw
    margin-left: 1vw

  .mnySignupFieldSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 1px
    margin-left: -1px

  .mnySignupFieldSendIco
    width: 1.75vw

  .progressGroup
    width: 5%
    margin: 1vw auto 0 auto

  .progressDot
    height: 0.5vw
    width: 0.5vw
    border-radius: 2vw

  .mnySignupTextCnt
    height: 6.75vw

  .mnySignupPainWarn
    bottom: 22%
    right: 16%

  ::v-deep .mnySignupPainWarn.svg
    height: 2.6vw
</style>
