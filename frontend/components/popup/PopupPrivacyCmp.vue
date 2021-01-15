<template>
  <div
    class="popupPrivacyOverlay"
    :class="{ popupPrivacyHide: !show }"
    @click="close"
  >
    <div class="popupPrivacyWrapper" @click="ignore">
      <div class="popupPrivacyCnt">
        <div @click="close">
          <utils-svg-cmp name="icon/x" class="popupPrivacyIcoX" />
        </div>
        <div class="popupPrivacyTitle">How we secure your data</div>
        <div class="popupPrivacyText">
          <div class="popupPrivacyTextParagraph">
            TIKI is all about data privacy.
          </div>
          <div class="popupPrivacyTextParagraph">
            Your information is encrypted, secured, and will never be shared
            with anyone.
          </div>
          <div class="popupPrivacyTextParagraph">
            This means we will never give your info to third parties or
            services, ever. It remains exclusively in our secure cloud, only be
            used to communicate with you about our launch. Of course, our cloud,
            servers, and code are as secure as humanly (or machinely) possible.
          </div>
        </div>
        <nuxt-link to="/privacy" class="popupPrivacyPolicy"
          >Our privacy policy</nuxt-link
        >
        <div class="popupPrivacyGithub" @click="githubClick">Our code</div>
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
      return this.$store.state.popup.privacy
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
      this.$store.commit('popup/showPrivacy', false)
    },
    githubClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Github', {
        props: { location: 'Footer' },
      })
      const win = window.open('https://github.com/tiki', '_blank')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.popupPrivacyHide
  display: none

.popupPrivacyOverlay
  position: fixed
  background: rgba(#000, 0.3)
  width: 100%
  height: 100%
  top: 0
  left: 0

.popupPrivacyWrapper
  position: absolute
  background: $white
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.popupPrivacyCnt
  position: relative
  width: 100%

.popupPrivacyTitle
  font-family: $font-family-montserrat
  color: $blue-dark
  font-weight: 600

.popupPrivacyText
  font-family: $font-family-montserrat
  color: $blue-dark

.popupPrivacyPolicy, .popupPrivacyGithub
  font-family: $font-family-nunito
  color: $blue
  font-weight: 700

.popupPrivacyGithub
  text-decoration: underline
  cursor: pointer

.popupPrivacyIcoX
  margin: 0 0 0 auto
  cursor: pointer

::v-deep .popupPrivacyIcoX.svg
  fill: $gray-dark

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
    margin: 10vw 0 0 0
    font-size: 3.5vw
    display: block

  .popupPrivacyGithub
    margin: 3vw 0 3vw 0
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
    margin: 3vw 0 0 0
    font-size: 1.25vw
    display: block

  .popupPrivacyGithub
    margin: 1vw 0 1vw 0
    font-size: 1.25vw
    display: block
</style>
