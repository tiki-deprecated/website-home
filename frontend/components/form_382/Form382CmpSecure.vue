<template>
  <div class="form382CmpSecureCnt">
    <utils-svg-cmp name="icon/lock" class="form382CmpSecureLock" />
    <div class="form382CmpSecureText">Your information is 100% secure</div>
    <div class="form382CmpSecureHowCnt" @click="onClick">
      <div class="form382CmpSecureHowText">How</div>
      <utils-svg-cmp name="icon/question" class="form382CmpSecureHowQuestion" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'Form382CmpSecure',
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
@import "../../assets/styles/mixins"

.form382CmpSecureCnt
  display: flex
  align-items: center
  justify-content: center

.form382CmpSecureHowCnt
  display: flex
  align-items: center
  cursor: pointer

.form382CmpSecureText
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple

.form382CmpSecureHowText
  font-family: $font-family-nunito
  font-weight: 700
  color: $blue
  text-decoration: underline

::v-deep .form382CmpSecureLock.svg
  fill: $purple

::v-deep .form382CmpSecureHowQuestion.svg
  fill: $blue

@include for-phone
  .form382CmpSecureHowText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3vw

  .form382CmpSecureText
    font-size: 3vw
    margin-left: 1vw

  ::v-deep .form382CmpSecureLock.svg, ::v-deep .form382CmpSecureHowQuestion.svg
    height: 3.3vw
@include for-tablet
  .form382CmpSecureHowText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1vw

  .form382CmpSecureText
    font-size: 1vw
    margin-left: 0.25vw

  ::v-deep .form382CmpSecureLock.svg, ::v-deep .form382CmpSecureHowQuestion.svg
    height: 1.1vw
</style>
