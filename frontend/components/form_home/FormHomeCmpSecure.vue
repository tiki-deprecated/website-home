<template>
  <div class="formHomeCmpSecureCnt">
    <utils-svg-cmp name="icon/lock" class="formHomeCmpSecureLock" />
    <div class="formHomeCmpSecureText">Your information is 100% secure</div>
    <div class="formHomeCmpSecureHowCnt" @click="onClick">
      <div class="formHomeCmpSecureHowText">How</div>
      <utils-svg-cmp
        name="icon/question"
        class="formHomeCmpSecureHowQuestion"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormHomeCmpSecure',
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

.formHomeCmpSecureCnt
  display: flex
  align-items: center
  justify-content: center

.formHomeCmpSecureHowCnt
  display: flex
  align-items: center
  cursor: pointer

.formHomeCmpSecureText
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple

.formHomeCmpSecureHowText
  font-family: $font-family-nunito
  font-weight: 700
  color: $blue
  text-decoration: underline

::v-deep .formHomeCmpSecureLock.svg
  fill: $purple

::v-deep .formHomeCmpSecureHowQuestion.svg
  fill: $blue

@include for-phone
  .formHomeCmpSecureHowText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3vw

  .formHomeCmpSecureText
    font-size: 3vw
    margin-left: 1vw

  ::v-deep .formHomeCmpSecureLock.svg, ::v-deep .formHomeCmpSecureHowQuestion.svg
    height: 3.3vw
@include for-tablet
  .formHomeCmpSecureHowText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1vw

  .formHomeCmpSecureText
    font-size: 1vw
    margin-left: 0.25vw

  ::v-deep .formHomeCmpSecureLock.svg, ::v-deep .formHomeCmpSecureHowQuestion.svg
    height: 1.1vw
</style>
