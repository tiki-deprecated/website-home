<template>
  <div class="banner" :class="{ bannerHide: !show }" @click="click">
    <utils-svg-cmp name="home/cf/piggy" class="piggy" />
    <div class="text">
      <div class="text1">Investments Open</div>
      <div class="text2">Learn more</div>
      <div class="text3">Learn about the perks</div>
    </div>
    <div @click="close">
      <utils-svg-cmp name="home/cf/x" class="icoX" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeCfBannerCmp',
  components: { UtilsSvgCmp },
  computed: {
    show() {
      return this.$store.state.cf.banner
    },
  },
  methods: {
    click(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('cf-banner', {
        props: { location: 'Click' },
      })
      this.$store.commit('cf/showBanner', false)
      this.$store.commit('cf/showPopup', true)
    },
    close(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('cf-banner', {
        props: { location: 'Close' },
      })
      this.$store.commit('cf/showBanner', false)
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.bannerHide
  display: none!important

.banner
  display: flex
  align-items: center
  background: $white
  box-shadow: 4px 4px 20px rgba($black-dark, 0.15)
  max-width: 60vw

.icoX
  margin: 0 0 0 auto
  cursor: pointer

::v-deep .icoX.svg
  fill: $orange

::v-deep .piggy.svg
  fill: $blue

.text
  font-family: $font-family-montserrat

.text1
  color: $orange
  font-weight: bold

.text2, .text3
  font-weight: 500
  color: $black-dark

@include for-phone
  .banner
    border-radius: 20vw
    padding: 4vw 4vw

  ::v-deep .icoX.svg
    height: 8.5vw

  ::v-deep .piggy.svg
    height: 20vw

  .text
    margin: 0 3vw

  .text1
    font-size: 4.5vw

  .text2
    margin-top: 1vw
    font-size: 4vw

  .text3
    display: none

@include for-tablet
  .banner
    border-radius: 5vw
    padding: 1vw 1vw

  ::v-deep .icoX.svg
    height: 1.75vw

  ::v-deep .piggy.svg
    height: 3vw

  .text
    margin: 0 1vw

  .text1
    font-size: 1.1vw

  .text2
    display: none

  .text3
    margin-top: 0.5vw
    font-size: 0.9vw
</style>
