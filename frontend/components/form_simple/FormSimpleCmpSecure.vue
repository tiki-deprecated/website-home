<template>
  <div class="formSimpleCmpSecureCnt">
    <utils-svg-cmp name="icon/lock" class="formSimpleCmpSecureLock" />
    <div class="formSimpleCmpSecureText">Your information is 100% secure</div>
    <div class="formSimpleCmpSecureHowCnt" @click="onClick">
      <div class="formSimpleCmpSecureHowText">How</div>
      <utils-svg-cmp
        name="icon/question"
        class="formSimpleCmpSecureHowQuestion"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormSimpleCmpSecure',
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

.formSimpleCmpSecureCnt
  display: flex
  align-items: center
  justify-content: center

.formSimpleCmpSecureHowCnt
  display: flex
  align-items: center
  cursor: pointer

.formSimpleCmpSecureText
  font-family: $font-family-montserrat
  font-weight: 600
  color: $gray-dark

.formSimpleCmpSecureHowText
  font-family: $font-family-nunito
  font-weight: 700
  color: $blue
  text-decoration: underline

::v-deep .formSimpleCmpSecureLock.svg
  fill: $gray-dark

::v-deep .formSimpleCmpSecureHowQuestion.svg
  fill: $blue

@include for-phone
  .formSimpleCmpSecureHowText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3.5vw

  .formSimpleCmpSecureText
    font-size: 3.5vw
    margin-left: 1vw

  ::v-deep .formSimpleCmpSecureLock.svg, ::v-deep .formSimpleCmpSecureHowQuestion.svg
    height: 4vw

@include for-tablet
  .formSimpleCmpSecureHowText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1.1vw

  .formSimpleCmpSecureText
    font-size: 1.1vw
    margin-left: 0.25vw

  ::v-deep .formSimpleCmpSecureLock.svg, ::v-deep .formSimpleCmpSecureHowQuestion.svg
    height: 1.2vw
</style>
