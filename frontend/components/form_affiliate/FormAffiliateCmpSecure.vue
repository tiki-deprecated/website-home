<template>
  <div class="formAffiliateCmpSecureCnt">
    <utils-svg-cmp name="money/ico-lock" class="formAffiliateCmpSecureLock" />
    <div class="formAffiliateCmpSecureText">
      Your information is 100% secure
    </div>
    <div class="formAffiliateCmpSecureHowCnt" @click="onClick">
      <div class="formAffiliateCmpSecureHowText">How</div>
      <utils-svg-cmp
        name="money/ico-question"
        class="formAffiliateCmpSecureHowQuestion"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormAffiliateCmpSecure',
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
@import "../../assets/styles/mixins"

.formAffiliateCmpSecureCnt
  display: flex
  align-items: center
  justify-content: center

.formAffiliateCmpSecureHowCnt
  display: flex
  align-items: center
  cursor: pointer

.formAffiliateCmpSecureText
  font-family: $font-family-montserrat
  font-weight: 600
  color: $money-purple

.formAffiliateCmpSecureHowText
  font-family: $font-family-nunito
  font-weight: 700
  color: $money-blue
  text-decoration: underline

::v-deep .formAffiliateCmpSecureLock.svg
    fill: $money-purple

::v-deep .formAffiliateCmpSecureHowQuestion.svg
    fill: $money-blue

@include for-phone
  .formAffiliateCmpSecureHowText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3vw

  .formAffiliateCmpSecureText
    font-size: 3vw
    margin-left: 1vw

  ::v-deep .formAffiliateCmpSecureLock.svg, ::v-deep .formAffiliateCmpSecureHowQuestion.svg
    height: 3.3vw
@include for-tablet
  .formAffiliateCmpSecureHowText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1vw

  .formAffiliateCmpSecureText
    font-size: 1vw
    margin-left: 0.25vw

  ::v-deep .formAffiliateCmpSecureLock.svg, ::v-deep .formAffiliateCmpSecureHowQuestion.svg
    height: 1.1vw
</style>
