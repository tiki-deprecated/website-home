<template>
  <div class="mnyHeaderAmtCnt">
    <div class="mnyHeaderAmtTop">Companies will make</div>
    <div class="mnyHeaderAmtMdl">
      <utils-svg-cmp name="money/paint-hlt" class="mnyHeaderAmtPaintHlt" />
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
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnyHeaderAmtCnt
  font-family: $font-family-nunito
  font-weight: bold
  color: $money-yellow-xlight
  position: relative

.mnyHeaderAmtTop
  margin: 0 auto
  text-align: center

.mnyHeaderAmtBtm
  margin: 0 auto
  text-align: center

.mnyHeaderAmtMdl
  font-family: $font-family-marker-mark
  font-weight: normal
  position: relative
  width: 100%
  overflow: hidden

.mnyHeaderAmtPaintHlt
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%
  height: 100%

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

@include for-phone
  .mnyHeaderAmtCnt
    width: 80%
    margin: 5vw auto 0
    font-size: 5.1vw

  .mnyHeaderAmtTop
    width: 68%

  .mnyHeaderAmtBtm
    width: 74%

  .mnyHeaderAmtMdl
    margin: 1.2vw auto
    font-size: 10vw
    height: 15vw

@include for-tablet
  .mnyHeaderAmtCnt
    width: 80%
    margin: 1vw auto 0
    font-size: 1.7vw

  .mnyHeaderAmtTop
    width: 68%

  .mnyHeaderAmtBtm
    width: 74%

  .mnyHeaderAmtMdl
    margin: 0.6vw auto
    font-size: 3.6vw
    height: 5.5vw
</style>
