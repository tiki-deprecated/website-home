<template>
  <div
    class="mnyPopupDataOverlay"
    :class="{ mnyPopupDataHide: !show }"
    @click="close"
  >
    <div class="mnyPopupDataWrapper" @click="ignore">
      <div class="mnyPopupDataCnt">
        <div @click="close">
          <utils-svg-cmp name="money/ico-x" class="mnyPopupDataIcoX" />
        </div>
        <div class="mnyPopupDataTitle">How we use your data</div>
        <div class="mnyPopupDataText">
          <div class="mnyPopupDataTextParagraph">
            TIKI is all about data privacy.
          </div>
          <div class="mnyPopupDataTextParagraph">
            Your information is 100% secure and will never be shared with
            anyone.
          </div>
          <div class="mnyPopupDataTextParagraph">
            This means we will never give your email to third parties, ever. of
            course, our servers are as secure as humanly (or machinely)
            possible.
          </div>
        </div>
        <nuxt-link to="/privacy" class="mnyPopupDataPrivacy"
          >Our privacy policy</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'MnyPopupDataCmp',
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
@import "assets/styles/mixins"

.mnyPopupDataHide
  display: none

.mnyPopupDataOverlay
  position: relative
  background: rgba(#000, 0.3)
  width: 100%
  height: 100%

.mnyPopupDataWrapper
  position: absolute
  background: $money-white
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.mnyPopupDataCnt
  position: relative
  width: 100%

.mnyPopupDataTitle
  font-family: $font-family-montserrat
  color: $money-blue-dark
  font-weight: 600

.mnyPopupDataText
  font-family: $font-family-montserrat
  color: $money-blue-dark

.mnyPopupDataPrivacy
  font-family: $font-family-nunito
  color: $money-blue
  font-weight: 700

.mnyPopupDataIcoX
  margin: 0 0 0 auto

::v-deep .mnyPopupDataIcoX.svg
  fill: $money-gray-dark

@include for-phone
  .mnyPopupDataWrapper
    width: 75%
    padding: 3vw
    border-radius: 3vw

  ::v-deep .mnyPopupDataIcoX.svg
    height: 5vw

  .mnyPopupDataTitle
    margin-top: 6vw
    font-size: 5vw

  .mnyPopupDataText
    margin-top: 6vw

  .mnyPopupDataTextParagraph
    margin: 3vw 0

  .mnyPopupDataPrivacy
    margin: 10vw 0 3vw 0
    font-size: 3.5vw
    display: block

@include for-tablet
  .mnyPopupDataWrapper
    width: 30%
    padding: 1vw
    border-radius: 1.25vw

  ::v-deep .mnyPopupDataIcoX.svg
    height: 1.5vw

  .mnyPopupDataTitle
    margin-top: 1vw
    font-size: 1.75vw

  .mnyPopupDataText
    margin-top: 2vw
    font-size: 1.25vw

  .mnyPopupDataTextParagraph
    margin: 1vw 0

  .mnyPopupDataPrivacy
    margin: 3vw 0 1vw 0
    font-size: 1.25vw
    display: block
</style>
