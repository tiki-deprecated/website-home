<template>
  <div class="utilsVideoCnt">
    <div v-if="loadVideo" class="utilsVideoCntVideo">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + id + '?autoplay=1'"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="utilsVideoCntVideoIframe"
      />
    </div>
    <div v-if="!loadVideo" class="utilsVideoPlaceholder" @click="onClick">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        :srcset="srcSet"
        :src="
          require(`~/assets/images/png/${placeholder}/${placeholder}_w_1400.png`)
        "
        alt="So why do you get nothing?"
        class="utilsVideoCmpPlaceholderImg"
      />
      <utils-svg-cmp
        name="button/play"
        class="utilsVideoCmpPlaceholderButton"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'UtilsVideoCmp',
  components: { UtilsSvgCmp },
  props: {
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loadVideo: false,
      hover: false,
    }
  },
  computed: {
    srcSet() {
      return `${require(`~/assets/images/png/${this.placeholder}/${this.placeholder}_w_200.png`)} 200w, ${require(`~/assets/images/png/${this.placeholder}/${this.placeholder}_w_534.png`)} 534w, ${require(`~/assets/images/png/${this.placeholder}/${this.placeholder}_w_786.png`)} 786w, ${require(`~/assets/images/png/${this.placeholder}/${this.placeholder}_w_1004.png`)} 1004w, ${require(`~/assets/images/png/${this.placeholder}/${this.placeholder}_w_1400.png`)} 1400w`
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
@import "../../assets/styles/mixins"
.utilsVideoCnt
  position: relative
  width: 100%
  height: 100%

.utilsVideoCntVideo
  overflow: hidden
  padding-bottom: 56.25%
  position: relative
  height: 0

.utilsVideoCntVideoIframe
  left: 0
  top: 0
  height: 100%
  width: 100%
  position: absolute
  border: none
  clip-path: inset(1px 1px)

.utilsVideoPlaceholder
  width: 100%
  height: 100%
  position: relative
  cursor: pointer

.utilsVideoCmpPlaceholderImg
  width: 100%
  position: absolute
  top: 0
  left: 0
  z-index: 1

.utilsVideoCmpPlaceholderButton
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 2

::v-deep .utilsVideoCmpPlaceholderButton.svg
  width: 20%

::v-deep .utilsVideoCmpPlaceholderButton.svg > .play-fill, ::v-deep .utilsVideoCmpPlaceholderButton.svg > .button-fill
  fill: none

::v-deep .utilsVideoCmpPlaceholderButton.svg > .play-outline, ::v-deep .utilsVideoCmpPlaceholderButton.svg > .button-outline
  fill: $yellow

::v-deep .utilsVideoCmpPlaceholderButton:hover.svg > .button-outline, ::v-deep .utilsVideoCmpPlaceholderButton:hover.svg > .button-fill
  fill: $yellow

::v-deep .utilsVideoCmpPlaceholderButton:hover.svg > .play-outline, ::v-deep .utilsVideoCmpPlaceholderButton:hover.svg > .play-fill
  fill: $white
</style>
