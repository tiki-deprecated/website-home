<template>
  <div class="signupSecure">
    <utils-svg-cmp name="home/signup/lock" class="icoLock" />
    <div class="text">Your information is 100% secure</div>
    <div class="how" @click="onClick">
      <div class="howText">How</div>
      <utils-svg-cmp name="home/signup/question" class="icoQuestion" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeSignupSecureCmp',
  components: { UtilsSvgCmp },
  methods: {
    onClick(clickEvent) {
      clickEvent.preventDefault()
      this.$store.commit('popup/showPrivacy', true)
      this.$plausible.trackEvent('How?')
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.signupSecure
  display: flex
  align-items: center
  justify-content: center

.how
  display: flex
  align-items: center
  cursor: pointer

.text
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple

.howText
  font-family: $font-family-nunito
  font-weight: 700
  color: $blue
  text-decoration: underline

::v-deep .icoLock.svg
  fill: $purple

::v-deep .icoQuestion.svg
  fill: $blue

@include for-phone
  .howText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3vw

  .text
    font-size: 3vw
    margin-left: 1vw

  ::v-deep .icoLock.svg, ::v-deep .icoQuestion.svg
    height: 3.3vw
@include for-tablet
  .howText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1vw

  .text
    font-size: 1vw
    margin-left: 0.25vw

  ::v-deep .icoLock.svg, ::v-deep .icoQuestion.svg
    height: 1.1vw
</style>
