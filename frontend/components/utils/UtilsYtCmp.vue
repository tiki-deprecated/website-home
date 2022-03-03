<template>
  <div class="video">
    <div v-if="loadVideo" class="videoContainer">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube-nocookie.com/embed/' + ytId + '?autoplay=1'"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
        allowfullscreen
        class="videoIframe"
      />
    </div>
    <div v-if="!loadVideo" class="placeholder" @click="onClick">
      <img
        :sizes="sizes"
        :srcset="srcset"
        :src="src"
        :alt="imgAlt"
        class="placeholderImg"
      />
      <utils-svg-cmp name="play" class="placeholderBtn" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'UtilsYtCmp',
  components: { UtilsSvgCmp },
  props: {
    ytId: {
      type: String,
      required: true,
    },
    imgName: {
      type: String,
      required: true,
    },
    imgSizes: {
      type: Array,
      required: true,
    },
    imgAlt: {
      type: String,
      required: false,
      default: '',
    },
    imgType: {
      type: String,
      required: false,
      default: 'png',
    },
  },
  data() {
    return {
      loadVideo: false,
      hover: false,
    }
  },
  computed: {
    srcset() {
      const len = this.imgSizes.length
      let srcSet
      for (let i = 0; i < len; i++) {
        if (srcSet !== undefined) srcSet += ','
        srcSet += `${require(`@/assets/images/${this.imgName}_w_${this.imgSizes[i]}.${this.imgType}`)} ${
          this.imgSizes[i]
        }w`
      }
      return srcSet
    },
    sizes() {
      const len = this.imgSizes.length
      return `(max-width: ${this.imgSizes[len - 1]}px) 100vw, ${
        this.imgSizes[len - 1]
      }px`
    },
    src() {
      const len = this.imgSizes.length
      return `${require(`@/assets/images/${this.imgName}_w_${
        this.imgSizes[len - 1]
      }.${this.imgType}`)}`
    },
  },
  methods: {
    onClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.loadVideo = true
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.video
  position: relative
  width: 100%
  height: 100%

.videoContainer
  overflow: hidden
  padding-bottom: 56.25%
  position: relative
  height: 0

.videoIframe
  left: 0
  top: 0
  height: 100%
  width: 100%
  position: absolute
  border: none
  clip-path: inset(1px 1px)

.placeholder
  width: 100%
  height: 100%
  position: relative
  cursor: pointer

.placeholderImg
  width: 100%
  display: flex

.placeholderBtn
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 2

::v-deep .placeholderBtn.svg
  width: 20%

::v-deep .placeholderBtn.svg > .button-fill, ::v-deep .placeholderBtn.svg > .button-outline
  fill: $yellow

::v-deep .placeholderBtn.svg > .play-fill, ::v-deep .placeholderBtn.svg > .play-outline
  fill: $white

::v-deep .placeholderBtn:hover.svg > .button-outline, ::v-deep .placeholderBtn:hover.svg > .button-fill
  fill: $tiki-orange

::v-deep .placeholderBtn:hover.svg > .play-outline, ::v-deep .placeholderBtn:hover.svg > .play-fill
  fill: $white
</style>
