<template>
  <div class="signupLtd">
    <utils-svg-cmp name="home/signup/signup" class="sketch" />
    <div class="textContainer">
      <div class="text">
        Get in now to be one of the first. Every week we're adding more users to
        the beta. Reserve your spot now!
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'FormHomeCmpLtd',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.textContainer
  position: relative

.text
  font-family: $font-family-nunito
  color: $blue-dark
  font-weight: bold
  position: absolute
  top: 0
  left: 0
  z-index: 1

.highlight
  color: $red-dark
  font-weight: bold

@include for-phone
  ::v-deep .sketch.svg
    height: 9vw
    margin: 0 auto 0 0

  .textContainer
    height: 26vw

  .text
    margin-top: 5vw
    font-size: 4vw
    text-align: left

@include for-tablet
  ::v-deep .sketch.svg
    height: 3vw
    margin: 0 auto

  .textContainer
    height: 5vw

  .text
    font-size: 1.25vw
    text-align: center
    margin-top: 1.5vw
    width: 100%
</style>
