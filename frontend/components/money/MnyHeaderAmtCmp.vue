<template>
  <div class="mnyHeaderAmtCnt">
    <div class="mnyHeaderAmtTop">Companies will make</div>
    <div class="mnyHeaderAmtMdl">
      <utils-svg-cmp
        name="money/paint-hlt"
        class="mnyHeaderAmtPaintHlt"
        :class="{ mnyHeaderAmtPaintHltDisplay: isSpalsh }"
      />
      <div class="mnyHeaderAmtMdlText">$370 BILLION</div>
    </div>
    <div class="mnyHeaderAmtBtm">
      from our data <b style="font-weight: 900">this year</b>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'MnyHeaderAmtCmp',
  components: { UtilsSvgCmp },
  data() {
    return {
      isSpalsh: false,
    }
  },
  mounted() {
    this.isSpalsh = true
  },
}
</script>

<style scoped lang="sass">
.mnyHeaderAmtCnt
  width: 75%
  margin: 5vw auto 0
  font-family: $font-family-nunito
  font-weight: bold
  color: $money-yellow-xlight
  font-size: 5.1vw
  position: relative

.mnyHeaderAmtTop
  width: 68%
  margin: 0 auto

.mnyHeaderAmtBtm
  width: 74%
  margin: 0 auto

.mnyHeaderAmtMdl
  margin: 1.2vw auto
  font-family: $font-family-marker-mark
  font-size: 8.7vw
  font-weight: normal
  position: relative
  width: 100%
  height: 14vw
  overflow: hidden

.mnyHeaderAmtPaintHlt
  position: absolute
  top: 0
  left: -80%
  opacity: 0
  z-index: 1
  width: 70%
  height: 100%
  transition-property: opacity, left, width
  transition-delay: 2s
  transition-duration: .15s

.mnyHeaderAmtPaintHltDisplay
  left: 0
  opacity: 100%
  width: 100%

::v-deep .mnyHeaderAmtPaintHlt.svg
  fill: $money-purple

.mnyHeaderAmtMdlText
  position: absolute
  top: 50%
  left: 50%
  z-index: 2
  transform: translate(-50%, -50%)
  width: inherit
  text-align: center
</style>
