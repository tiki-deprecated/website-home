<template>
  <div class="video">
    <div v-if="loadVideo" class="videoContainer">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/FSQv6CNfy00?autoplay=1'"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
        allowfullscreen
        class="videoIframe"
      />
    </div>
    <div v-if="!loadVideo" class="placeholder" @click="onClick">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_200.png   200w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_350.png   350w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_463.png   463w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_568.png   568w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_643.png   643w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_727.png   727w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_804.png   804w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_866.png   866w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_938.png   938w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_993.png   993w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1045.png 1045w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1108.png 1108w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1160.png 1160w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1216.png 1216w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1254.png 1254w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1305.png 1305w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1356.png 1356w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1396.png 1396w,
          ~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1400.png 1400w
        "
        src="~/assets/images/png/home/worth/yt-placeholder/yt-placeholder_w_1400.png"
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
