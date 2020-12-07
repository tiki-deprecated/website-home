<template>
  <div class="mnySignupCnt">
    <utils-svg-cmp name="money/sketch-signup" class="mnySignupSketch" />
    <div class="mnySignupText">
      Beta access is limited to make sure everyone gets their fair (and
      significant) share. &nbsp;<b class="mnySignupTextHlt"> Only 9,568 left</b>
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
.mnySignupCnt
  width: inherit
  background: $money-yellow-light
  border-radius: 5vw
  padding: 7vw 5vw

::v-deep .mnySignupSketch.svg
  height: 9vw

.mnySignupText
  font-family: $font-family-nunito
  margin-top: 5vw
  color: $money-blue-dark
  font-weight: bold
  font-size: 4.2vw

.mnySignupTextHlt
  color: $money-red-dark
  font-weight: bold

.mnySignupField
  display: flex
  align-items: center
  margin-top: 8vw
  width: 100%

.mnySignupFieldInput
  background: $money-white
  height: 15vw
  border-radius: 4vw 0 0 4vw
  width: 100%
  display: flex
  align-items: center
  border: solid 1px $money-gray-xlight

.mnySignupFieldInputHint
  color: $money-blue
  font-family: $font-family-montserrat
  font-weight: 600
  font-size: 6vw
  margin-left: 4vw

.mnySignupFieldSend
  background: $money-blue-dark
  height: 15vw
  width: 20vw
  position: relative
  border-radius: 0 4vw 4vw 0
  border: solid 1px $money-blue-dark
  margin-left: -1px

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
  width: 15%
  margin: 8vw auto 0 auto

.progressDot
  height: 2vw
  width: 2vw
  border-radius: 10vw

.progressDot1
  background: $money-blue-dark

.progressDot2
  background: $money-white

.progressDot3
  background: $money-white
</style>
