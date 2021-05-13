<template>
  <div class="privacy" :class="{ popupPrivacyHide: !show }" @click="close">
    <div class="privacyWrapper" @click="ignore">
      <div class="privacyContainer">
        <div @click="close">
          <utils-svg-cmp name="home/privacy/x" class="icoX" />
        </div>
        <home-privacy-content-cmp />
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'
import HomePrivacyContentCmp from './HomePrivacyContentCmp'

export default {
  name: 'HomePrivacyCmp',
  components: { HomePrivacyContentCmp, UtilsSvgCmp },
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
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.popupPrivacyHide
  display: none

.privacy
  position: fixed
  background: rgba(#000, 0.3)
  width: 100%
  height: 100%
  top: 0
  left: 0

.privacyWrapper
  position: absolute
  background: $white
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.privacyContainer
  position: relative
  width: 100%

.icoX
  margin: 0 0 0 auto
  cursor: pointer

::v-deep .icoX.svg
  fill: $gray-dark

@include for-phone
  .privacyWrapper
    width: 75%
    padding: 3vw
    border-radius: 3vw

  ::v-deep .icoX.svg
    height: 5vw

@include for-tablet
  .privacyWrapper
    width: 30%
    padding: 1vw
    border-radius: 1.25vw

  ::v-deep .icoX.svg
    height: 1.5vw
</style>
