<template>
  <div class="headerMoneyCmpAmtCnt">
    <div class="headerMoneyCmpAmtTop">Companies will make</div>
    <div class="headerMoneyCmpAmtMdl">
      <utils-svg-cmp name="paint/highlight" class="headerMoneyCmpAmtPaintHlt" />
      <div class="headerMoneyCmpAmtMdlText">$382 BILLION</div>
    </div>
    <div class="headerMoneyCmpAmtBtm">
      from our data <b style="font-weight: 900">this year</b>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'HeaderMoneyCmpAmt',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerMoneyCmpAmtCnt
  font-family: $font-family-nunito
  font-weight: bold
  color: $money-yellow-neon
  position: relative

.headerMoneyCmpAmtTop
  margin: 0 auto
  text-align: center

.headerMoneyCmpAmtBtm
  margin: 0 auto
  text-align: center

.headerMoneyCmpAmtMdl
  font-family: $font-family-marker-mark
  font-weight: normal
  position: relative
  width: 100%
  overflow: hidden

.headerMoneyCmpAmtPaintHlt
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%
  height: 100%

::v-deep .headerMoneyCmpAmtPaintHlt.svg
  fill: $money-purple

.headerMoneyCmpAmtMdlText
  position: absolute
  top: 50%
  left: 50%
  z-index: 2
  transform: translate(-50%, -50%)
  width: inherit
  text-align: center

@include for-phone
  .headerMoneyCmpAmtCnt
    width: 80%
    margin: 5vw auto 0
    font-size: 5.1vw

  .headerMoneyCmpAmtTop
    width: 68%

  .headerMoneyCmpAmtBtm
    width: 74%

  .headerMoneyCmpAmtMdl
    margin: 1.2vw auto
    font-size: 10vw
    height: 15vw

@include for-tablet
  .headerMoneyCmpAmtCnt
    width: 80%
    margin: 1vw auto 0
    font-size: 1.7vw

  .headerMoneyCmpAmtTop
    width: 68%

  .headerMoneyCmpAmtBtm
    width: 74%

  .headerMoneyCmpAmtMdl
    margin: 0.6vw auto
    font-size: 3.6vw
    height: 5.5vw
</style>
