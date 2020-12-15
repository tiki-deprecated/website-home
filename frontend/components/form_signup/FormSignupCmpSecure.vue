<template>
  <div class="formSignupCmpSecureCnt">
    <utils-svg-cmp name="icon/lock" class="formSignupCmpSecureLock" />
    <div class="formSignupCmpSecureText">Your information is 100% secure</div>
    <div class="formSignupCmpSecureHowCnt" @click="onClick">
      <div class="formSignupCmpSecureHowText">How</div>
      <utils-svg-cmp
        name="icon/question"
        class="formSignupCmpSecureHowQuestion"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormSignupCmpSecure',
  components: { UtilsSvgCmp },
  methods: {
    onClick(clickEvent) {
      clickEvent.preventDefault()
      this.$store.commit('popup/showPrivacy', true)
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formSignupCmpSecureCnt
  display: flex
  align-items: center
  justify-content: center

.formSignupCmpSecureHowCnt
  display: flex
  align-items: center
  cursor: pointer

.formSignupCmpSecureText
  font-family: $font-family-montserrat
  font-weight: 600
  color: $money-purple

.formSignupCmpSecureHowText
  font-family: $font-family-nunito
  font-weight: 700
  color: $money-blue
  text-decoration: underline

::v-deep .formSignupCmpSecureLock.svg
    fill: $money-purple

::v-deep .formSignupCmpSecureHowQuestion.svg
    fill: $money-blue

@include for-phone
  .formSignupCmpSecureHowText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3vw

  .formSignupCmpSecureText
    font-size: 3vw
    margin-left: 1vw

  ::v-deep .formSignupCmpSecureLock.svg, ::v-deep .formSignupCmpSecureHowQuestion.svg
    height: 3.3vw
@include for-tablet
  .formSignupCmpSecureHowText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1vw

  .formSignupCmpSecureText
    font-size: 1vw
    margin-left: 0.25vw

  ::v-deep .formSignupCmpSecureLock.svg, ::v-deep .formSignupCmpSecureHowQuestion.svg
    height: 1.1vw
</style>
