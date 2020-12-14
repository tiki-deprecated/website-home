<template>
  <div
    class="popupPrivacyOverlay"
    :class="{ popupPrivacyHide: !show }"
    @click="close"
  >
    <div class="popupPrivacyWrapper" @click="ignore">
      <div class="popupPrivacyCnt">
        <div @click="close">
          <utils-svg-cmp name="money/ico-x" class="popupPrivacyIcoX" />
        </div>
        <div class="popupPrivacyTitle">How we use your data</div>
        <div class="popupPrivacyText">
          <div class="popupPrivacyTextParagraph">
            TIKI is all about data privacy.
          </div>
          <div class="popupPrivacyTextParagraph">
            Your information is 100% secure and will never be shared with
            anyone.
          </div>
          <div class="popupPrivacyTextParagraph">
            This means we will never give your email to third parties, ever. of
            course, our servers are as secure as humanly (or machinely)
            possible.
          </div>
        </div>
        <nuxt-link to="/privacy" class="popupPrivacyPolicy"
          >Our privacy policy</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'PopupPrivacyCmp',
  components: { UtilsSvgCmp },
  computed: {
    show() {
      return this.$store.state.privacy.popup
    },
  },
  methods: {
    ignore(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
    },
    close(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$store.commit('privacy/showPopup', false)
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.popupPrivacyHide
  display: none

.popupPrivacyOverlay
  position: relative
  background: rgba(#000, 0.3)
  width: 100%
  height: 100%

.popupPrivacyWrapper
  position: absolute
  background: $money-white
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.popupPrivacyCnt
  position: relative
  width: 100%

.popupPrivacyTitle
  font-family: $font-family-montserrat
  color: $money-blue-dark
  font-weight: 600

.popupPrivacyText
  font-family: $font-family-montserrat
  color: $money-blue-dark

.popupPrivacyPolicy
  font-family: $font-family-nunito
  color: $money-blue
  font-weight: 700

.popupPrivacyIcoX
  margin: 0 0 0 auto

::v-deep .popupPrivacyIcoX.svg
  fill: $money-gray-dark

@include for-phone
  .popupPrivacyWrapper
    width: 75%
    padding: 3vw
    border-radius: 3vw

  ::v-deep .popupPrivacyIcoX.svg
    height: 5vw

  .popupPrivacyTitle
    margin-top: 6vw
    font-size: 5vw

  .popupPrivacyText
    margin-top: 6vw

  .popupPrivacyTextParagraph
    margin: 3vw 0

  .popupPrivacyPolicy
    margin: 10vw 0 3vw 0
    font-size: 3.5vw
    display: block

@include for-tablet
  .popupPrivacyWrapper
    width: 30%
    padding: 1vw
    border-radius: 1.25vw

  ::v-deep .popupPrivacyIcoX.svg
    height: 1.5vw

  .popupPrivacyTitle
    margin-top: 1vw
    font-size: 1.75vw

  .popupPrivacyText
    margin-top: 2vw
    font-size: 1.25vw

  .popupPrivacyTextParagraph
    margin: 1vw 0

  .popupPrivacyPolicy
    margin: 3vw 0 1vw 0
    font-size: 1.25vw
    display: block
</style>
