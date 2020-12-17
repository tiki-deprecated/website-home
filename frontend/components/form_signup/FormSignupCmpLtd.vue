<template>
  <div class="formSignupCmpLtdCnt">
    <utils-svg-cmp name="sketch/signup" class="formSignupCmpLtdSketch" />
    <div class="formSignupCmpLtdTextCnt">
      <div class="formSignupCmpLtdText">
        Hurry up! We only have
        <b class="formSignupCmpLtdTextHlt">9,568</b> spaces left. Sign up below
        to claim your spot when we launch.
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormSignupCmpLtd',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formSignupCmpLtdTextCnt
  position: relative

.formSignupCmpLtdText
  font-family: $font-family-nunito
  color: $blue-dark
  font-weight: bold
  position: absolute
  top: 0
  left: 0
  z-index: 1

.formSignupCmpLtdTextHlt
  color: $red-dark
  font-weight: bold

.formSignupCmpLtdPaintWarn
  position: absolute

::v-deep .formSignupCmpLtdPaintWarn.svg > .warn
  fill: $red-dark

::v-deep .formSignupCmpLtdPaintWarn.svg > .layer1
  fill: $yellow

@include for-phone
  ::v-deep .formSignupCmpLtdSketch.svg
    height: 9vw

  .formSignupCmpLtdTextCnt
    height: 22vw

  .formSignupCmpLtdText
    margin-top: 5vw
    font-size: 4vw

@include for-tablet
  ::v-deep .formSignupCmpLtdSketch.svg
    height: 3vw
    margin: 0 auto

  .formSignupCmpLtdTextCnt
    height: 5vw

  .formSignupCmpLtdText
    font-size: 1.25vw
    text-align: center
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 100%
</style>
