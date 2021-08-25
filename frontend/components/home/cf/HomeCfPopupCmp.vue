<template>
  <div class="popup" :class="{ popupHide: !show }" @click="close">
    <div class="popupWrapper" @click="ignore">
      <div class="popupContainer">
        <div @click="close">
          <utils-svg-cmp name="home/cf/x" class="icoX" />
        </div>
        <div class="popupContent">
          <div class="title"><b class="titleHlt">Invest</b> in TIKI</div>
          <div class="imgWrapper">
            <img
              sizes="(max-width: 829px) 100vw, 829px"
              srcset="
                ~/assets/images/png/home/cf/astrocat_w_200.png 200w,
                ~/assets/images/png/home/cf/astrocat_w_829.png 829w
              "
              src="~/assets/images/png/home/cf/astrocat_w_829.png"
              alt=""
              class="img"
            />
          </div>
          <div class="text">
            Everyone's welcome! Join the data revolution and purchase a stake in
            TIKI.
          </div>
          <div class="cta" @click="moreClick($event)">Learn more</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeCfPopupCmp',
  components: { UtilsSvgCmp },
  computed: {
    show() {
      return this.$store.state.cf.popup
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
      this.$plausible.trackEvent('cf-popup', {
        props: { location: 'Close' },
      })
      this.$store.commit('cf/showPopup', false)
      this.$store.commit('cf/showBanner', true)
    },
    moreClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('cf-popup', {
        props: { location: 'Learn More' },
      })
      const win = window.open('https://startengine.com/tiki', '_self')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.popupHide
  display: none

.popup
  position: fixed
  background: rgba($black, 0.6)
  width: 100%
  height: 100%
  top: 0
  left: 0

.popupWrapper
  position: absolute
  background: $white
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.popupContainer
  position: relative
  width: 100%

.icoX
  margin: 0 0 0 auto
  cursor: pointer

::v-deep .icoX.svg
  fill: $orange

.imgWrapper
  width: fit-content

.title
  font-family: $font-family-montserrat
  font-weight: bold

.titleHlt
  color: $orange
  font-weight: bold

.text
  font-family: $font-family-montserrat
  font-weight: 500
  color: $black-dark

.cta
  background-color: $red
  color: $white
  font-family: $font-family-montserrat
  font-weight: bold
  text-align: center
  width: fit-content
  cursor: pointer

@include for-phone
  .popupWrapper
    width: 85%
    padding: 3vw
    border-radius: 5vw

  ::v-deep .icoX.svg
    height: 8vw

  .img
    height: 40vw

  .title
    font-size: 10vw
    text-align: center
    margin-top: 8vw

  .imgWrapper
    margin: 6vw auto 0 auto

  .text
    font-size: 4.75vw
    text-align: center
    margin-top: 6vw

  .cta
    margin: 6vw auto 8vw auto
    padding: 4vw 16vw
    font-size: 5vw
    border-radius: 3vw

@include for-tablet
  .popupWrapper
    width: 45%
    padding: 1vw
    border-radius: 1.25vw

  ::v-deep .icoX.svg
    height: 2.25vw

  .img
    height: 15vw

  .title
    font-size: 2.25vw
    text-align: left
    margin-top: 2vw
    float: left
    display: inline

  .imgWrapper
    margin: 2vw auto 3vw auto
    float: right
    display: inline

  .text
    font-size: 1.1vw
    text-align: left
    margin-top: 2vw
    float: left
    width: 20vw
    display: inline

  .cta
    margin: 2vw auto 0 auto
    padding: 1vw 4vw
    font-size: 1.2vw
    border-radius: 1vw
    float: left
    display: inline

  .popupContent
    margin: 1vw 5vw 0 2vw
</style>
