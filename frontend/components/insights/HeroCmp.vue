<template>
  <div class="hero">
    <div class="imgContainer">
      <img :sizes="sizes" :srcset="srcset" :src="src" alt="" class="img" />
    </div>
    <div class="contentContainer">
      <div class="title">Your business needs data</div>
      <div class="subtitle">and you know it.</div>
      <nuxt-link
        v-scroll-to="{ el: '#signup' }"
        :to="{ path: '/insights', hash: 'signup' }"
        class="signup"
        >Sign up
      </nuxt-link>
      <div class="video" @click="onVideoClick($event)">
        <utils-svg-cmp name="play" class="videoPlay" />
        <div class="videoText">watch the video</div>
      </div>
    </div>
    <div
      class="overlay"
      :class="{ overlayShow: isOverlay }"
      @click="onOverlayClick"
    />
    <div class="ytOverlay" :class="{ overlayShow: isOverlay }">
      <div class="ytIframeContainer">
        <iframe
          id="ytIframe"
          width="560"
          height="315"
          :src="videoSrc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="ytIframe"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'
export default {
  name: 'HeroCmp',
  components: { UtilsSvgCmp },
  data() {
    return {
      imgSizes: undefined,
      imgName: undefined,
      isOverlay: false,
      videoSrc:
        'https://www.youtube-nocookie.com/embed/QbIO7EiHxcg?autoplay=1&enablejsapi=1',
    }
  },
  computed: {
    srcset() {
      if (this.imgSizes === undefined || this.imgName === undefined)
        return undefined
      let srcSet
      const len = this.imgSizes.length
      for (let i = 0; i < len; i++) {
        if (srcSet !== undefined) srcSet += ','
        srcSet += `${require(`@/assets/images/png/${this.imgName}_w_${this.imgSizes[i]}.png`)} ${
          this.imgSizes[i]
        }w`
      }
      return srcSet
    },
    sizes() {
      if (this.imgSizes === undefined || this.imgName === undefined)
        return undefined
      const len = this.imgSizes.length
      return `(max-width: ${this.imgSizes[len - 1]}px) 100vw, ${
        this.imgSizes[len - 1]
      }px`
    },
    src() {
      if (this.imgSizes === undefined || this.imgName === undefined)
        return undefined
      const len = this.imgSizes.length
      return `${require(`@/assets/images/png/${this.imgName}_w_${
        this.imgSizes[len - 1]
      }.png`)}`
    },
  },
  mounted() {
    if (Math.round(Math.random()) === 0) {
      this.imgSizes = [
        200, 381, 518, 617, 704, 780, 848, 916, 981, 1033, 1085, 1143, 1209,
        1233, 1318, 1373, 1396, 1400,
      ]
      this.imgName = 'hero-1'
    } else {
      this.imgSizes = [
        200, 348, 457, 550, 638, 715, 789, 852, 909, 966, 1022, 1073, 1124,
        1177, 1223, 1278, 1321, 1343, 1393, 1400,
      ]
      this.imgName = 'hero-2'
    }
  },
  methods: {
    onVideoClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.isOverlay = true
    },
    onOverlayClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.isOverlay = false
      const yt = window.document.getElementById('ytIframe')
      yt.setAttribute('src', this.videoSrc)
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
.hero
  position: relative
  height: 100vh

.imgContainer
  position: absolute
  height: 100vh
  top: 0
  left: 0
  overflow: hidden
  width: 100%
  z-index: 1

.img
  position: absolute
  height: 100%
  top: 0
  left: 50%
  transform: translateX(-50%)

.contentContainer
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 100%
  z-index: 2

.imgContainer
  position: absolute

.overlay
  position: absolute
  width: 100%
  height: 100%
  z-index: 3
  background-color: rgba(#000000,0.70)
  display: none

.ytOverlay
  position: absolute
  z-index: 4
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 90%
  display: none

.overlayShow
  display: block

.title
  font-family: $font-family-koara
  color: $white
  font-weight: lighter
  text-align: center
  text-transform: uppercase
  width: 60%
  margin: 0 auto

.subtitle
  font-family: $font-family-nunito-sans
  color: $white
  text-align: center
  font-weight: 800

.signup, .signup:hover, .signup:link, .signup:visited, .signup:active
  font-family: $font-family-koara
  color: $tiki-purple
  font-weight: lighter
  background-color: $yellow
  display: block
  width: fit-content
  margin-left: auto
  margin-right: auto
  text-decoration: none

.video
  display: flex
  align-items: center
  width: fit-content
  margin-left: auto
  margin-right: auto
  cursor: pointer

.videoText
  font-family: $font-family-koara
  color: $white
  font-weight: lighter

::v-deep .videoPlay.svg > .button-fill, ::v-deep .videoPlay.svg > .button-outline
  fill: $yellow

::v-deep .videoPlay.svg > .play-fill, ::v-deep .videoPlay.svg > .play-outline
  fill: $tiki-purple

.ytIframeContainer
  overflow: hidden
  padding-bottom: 56.25%
  position: relative
  height: 0

.ytIframe
  left: 0
  top: 0
  height: 100%
  width: 100%
  position: absolute
  border: none
  clip-path: inset(1px 1px)

@include for-phone
  .hero
    width: 100%

  .title
    font-size: 8vw

  .subtitle
    margin-top: 5vh
    font-size: 4.5vw

  .signup
    margin-top: 8vh
    font-size: 4.5vw
    padding: 1.25vh 5vw
    border-radius: 1vw

  .video
    margin-top: 3vh

  .videoText
    font-size: 4vw
    margin-left: 2vw

  ::v-deep .videoPlay
    height: 3vh

@include for-tablet
</style>
