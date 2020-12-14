<template>
  <div class="mnySignupSecureCnt">
    <utils-svg-cmp name="money/ico-lock" class="mnySignupSecureLock" />
    <div class="mnySignupSecureText">Your information is 100% secure</div>
    <div class="mnySignupSecureHowCnt" @click="onClick">
      <div class="mnySignupSecureHowText">How</div>
      <utils-svg-cmp
        name="money/ico-question"
        class="mnySignupSecureHowQuestion"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'MnySignupSecureCmp',
  components: { UtilsSvgCmp },
  methods: {
    onClick(clickEvent) {
      clickEvent.preventDefault()
      this.$store.commit('privacy/showPopup', true)
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnySignupSecureCnt
  display: flex
  align-items: center
  justify-content: center

.mnySignupSecureHowCnt
  display: flex
  align-items: center
  cursor: pointer

.mnySignupSecureText
  font-family: $font-family-montserrat
  font-weight: 600
  color: $money-purple

.mnySignupSecureHowText
  font-family: $font-family-nunito
  font-weight: 700
  color: $money-blue
  text-decoration: underline

::v-deep .mnySignupSecureLock.svg
    fill: $money-purple

::v-deep .mnySignupSecureHowQuestion.svg
    fill: $money-blue

@include for-phone
  .mnySignupSecureHowText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3vw

  .mnySignupSecureText
    font-size: 3vw
    margin-left: 1vw

  ::v-deep .mnySignupSecureLock.svg, ::v-deep .mnySignupSecureHowQuestion.svg
    height: 3.3vw
@include for-tablet
  .mnySignupSecureHowText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1vw

  .mnySignupSecureText
    font-size: 1vw
    margin-left: 0.25vw

  ::v-deep .mnySignupSecureLock.svg, ::v-deep .mnySignupSecureHowQuestion.svg
    height: 1.1vw
</style>
