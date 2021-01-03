<template>
  <div class="form10CmpSecureCnt">
    <utils-svg-cmp name="icon/lock" class="form10CmpSecureLock" />
    <div class="form10CmpSecureText">Your information is 100% secure</div>
    <div class="form10CmpSecureHowCnt" @click="onClick">
      <div class="form10CmpSecureHowText">How</div>
      <utils-svg-cmp name="icon/question" class="form10CmpSecureHowQuestion" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'Form10CmpSecure',
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

.form10CmpSecureCnt
  display: flex
  align-items: center
  justify-content: center

.form10CmpSecureHowCnt
  display: flex
  align-items: center
  cursor: pointer

.form10CmpSecureText
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple

.form10CmpSecureHowText
  font-family: $font-family-nunito
  font-weight: 700
  color: $blue
  text-decoration: underline

::v-deep .form10CmpSecureLock.svg
  fill: $purple

::v-deep .form10CmpSecureHowQuestion.svg
  fill: $blue

@include for-phone
  .form10CmpSecureHowText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3vw

  .form10CmpSecureText
    font-size: 3vw
    margin-left: 1vw

  ::v-deep .form10CmpSecureLock.svg, ::v-deep .form10CmpSecureHowQuestion.svg
    height: 3.3vw

@include for-tablet
  .form10CmpSecureHowText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1vw

  .form10CmpSecureText
    font-size: 1vw
    margin-left: 0.25vw

  ::v-deep .form10CmpSecureLock.svg, ::v-deep .form10CmpSecureHowQuestion.svg
    height: 1.1vw
</style>
