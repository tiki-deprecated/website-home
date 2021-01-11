<template>
  <div class="headerControlCmpFormSecureCnt">
    <utils-svg-cmp name="icon/lock" class="headerControlCmpFormSecureLock" />
    <div class="headerControlCmpFormSecureText">
      Your information is 100% secure
    </div>
    <div class="headerControlCmpFormSecureHowCnt" @click="onClick">
      <div class="headerControlCmpFormSecureHowText">How</div>
      <utils-svg-cmp
        name="icon/question"
        class="headerControlCmpFormSecureHowQuestion"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'HeaderControlCmpFormSecure',
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

.headerControlCmpFormSecureCnt
  display: flex
  align-items: center
  justify-content: center

.headerControlCmpFormSecureHowCnt
  display: flex
  align-items: center
  cursor: pointer

.headerControlCmpFormSecureText
  font-family: $font-family-montserrat
  font-weight: 600
  color: $gray-dark

.headerControlCmpFormSecureHowText
  font-family: $font-family-nunito
  font-weight: 700
  color: $blue
  text-decoration: underline

::v-deep .headerControlCmpFormSecureLock.svg
  fill: $gray-dark

::v-deep .headerControlCmpFormSecureHowQuestion.svg
  fill: $blue

@include for-phone
  .headerControlCmpFormSecureHowText
    margin-left: 2vw
    margin-right: 1vw
    font-size: 3.5vw

  .headerControlCmpFormSecureText
    font-size: 3.5vw
    margin-left: 1vw

  ::v-deep .headerControlCmpFormSecureLock.svg, ::v-deep .headerControlCmpFormSecureHowQuestion.svg
    height: 4vw

@include for-tablet
  .headerControlCmpFormSecureHowText
    margin-left: 0.75vw
    margin-right: 0.25vw
    font-size: 1.1vw

  .headerControlCmpFormSecureText
    font-size: 1.1vw
    margin-left: 0.25vw

  ::v-deep .headerControlCmpFormSecureLock.svg, ::v-deep .headerControlCmpFormSecureHowQuestion.svg
    height: 1.2vw
</style>
