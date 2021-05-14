<template>
  <div class="video">
    <div v-if="loadVideo" class="videoContainer">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/YFZm9mwWGOY?autoplay=1'"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="videoIframe"
      />
    </div>
    <div v-if="!loadVideo" class="placeholder" @click="onClick">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1280.jpg  200w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_572.jpg   572w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_831.jpg   831w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1041.jpg 1041w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1250.jpg 1250w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1280.jpg 1280w
        "
        src="~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1280.jpg"
        alt="So why do you get nothing?"
        class="placeholderImg"
      />
      <utils-svg-cmp name="utils/play" class="placeholderBtn" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeWorthVideoCmp',
  components: { UtilsSvgCmp },
  data() {
    return {
      loadVideo: false,
      hover: false,
    }
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
  position: absolute
  top: 0
  left: 0
  z-index: 1

.placeholderBtn
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 2

::v-deep .placeholderBtn.svg
  width: 20%

::v-deep .placeholderBtn.svg > .play-fill, ::v-deep .placeholderBtn.svg > .button-fill
  fill: none

::v-deep .placeholderBtn.svg > .play-outline, ::v-deep .placeholderBtn.svg > .button-outline
  fill: $yellow

::v-deep .placeholderBtn:hover.svg > .button-outline, ::v-deep .placeholderBtn:hover.svg > .button-fill
  fill: $yellow

::v-deep .placeholderBtn:hover.svg > .play-outline, ::v-deep .placeholderBtn:hover.svg > .play-fill
  fill: $white
</style>
