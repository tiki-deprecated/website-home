<template>
  <div class="page">
    <div class="stack">
      <effed-cmp />
      <ctrl-cmp />
      <pain-cmp />
      <wdwd-cmp />
      <own-cmp />
      <strings-cmp />
      <overview-cmp />
      <hiw-cmp />
      <unique-cmp />
      <involved-cmp id="signup" />
      <utils-footer-cmp />
    </div>
    <div class="clip">
      <img
        sizes="(max-width: 1036px) 100vw, 1036px"
        srcset="
          ~/assets/images/png/fb-sticker_w_200.png   200w,
          ~/assets/images/png/fb-sticker_w_1036.png 1036w
        "
        src="~/assets/images/png/fb-sticker_w_1036.png"
        alt=""
        class="fbSticker"
      />
      <img
        sizes="(max-width: 584px) 100vw, 584px"
        srcset="
          ~/assets/images/png/pineapple-pizza_w_200.png 200w,
          ~/assets/images/png/pineapple-pizza_w_584.png 584w
        "
        src="~/assets/images/png/pineapple-pizza_w_584.png"
        alt=""
        class="pineapplePizza"
      />
      <img
        sizes="(max-width: 265px) 100vw, 265px"
        srcset="
          ~/assets/images/png/sticker-stack_w_200.png 200w,
          ~/assets/images/png/sticker-stack_w_265.png 265w
        "
        src="~/assets/images/png/sticker-stack_w_265.png"
        alt=""
        class="stickerStack"
      />
      <img
        sizes="(max-width: 325px) 100vw, 325px"
        srcset="
          ~/assets/images/png/google-sticker_w_200.png 200w,
          ~/assets/images/png/google-sticker_w_325.png 265w
        "
        src="~/assets/images/png/google-sticker_w_325.png"
        alt=""
        class="googleSticker"
      />
    </div>
  </div>
</template>

<script>
import EffedCmp from '../components/index/EffedCmp'
import CtrlCmp from '../components/index/CtrlCmp'
import PainCmp from '../components/index/PainCmp'
import WdwdCmp from '../components/index/WdwdCmp'
import OwnCmp from '../components/index/OwnCmp'
import StringsCmp from '../components/index/StringsCmp'
import OverviewCmp from '../components/index/OverviewCmp'
import HiwCmp from '../components/index/HiwCmp'
import UniqueCmp from '../components/index/UniqueCmp'
import InvolvedCmp from '../components/index/InvolvedCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'

export default {
  name: 'Index',
  components: {
    UtilsFooterCmp,
    InvolvedCmp,
    UniqueCmp,
    HiwCmp,
    OverviewCmp,
    StringsCmp,
    OwnCmp,
    WdwdCmp,
    PainCmp,
    CtrlCmp,
    EffedCmp,
  },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.page
  width: 100%
  position: relative

.stack
  position: absolute
  top: 0
  left: 0
  width: 100%
  z-index: 1

.clip
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 1000vh
  overflow: hidden

@include for-phone
  .fbSticker
    top: 172vh
    right: 0
    position: absolute
    height: 16vh
    z-index: 2

  .pineapplePizza
    top: 310vh
    right: -6%
    position: absolute
    height: 23vh
    z-index: 2

  .stickerStack
    top: 777vh
    left: -3%
    position: absolute
    height: 18vh
    z-index: 2

  .googleSticker
    top: 707vh
    right: 1%
    position: absolute
    height: 8vh
    z-index: 2

@include for-tablet
  .fbSticker
    top: 183vh
    right: 0
    position: absolute
    height: 24vh
    z-index: 2

  .pineapplePizza
    top: 363vh
    left: -1%
    position: absolute
    height: 38vh
    z-index: 2
    transform: scaleX(-1)

  .stickerStack
    top: 902vh
    left: 31%
    position: absolute
    height: 25vh
    z-index: 2
    display: none

  .googleSticker
    top: 800vh
    right: 30%
    position: absolute
    height: 18vh
    z-index: 2
    display: none
</style>
