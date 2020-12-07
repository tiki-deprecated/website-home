<template>
  <div class="mnyHeaderMakeCnt">
    <div class="mnyHeaderMakeTitle">
      <div class="mnyHeaderMakeQuote">
        <utils-svg-cmp
          name="money/sketch-quote"
          class="mnyHeaderMakeQuoteLeft"
        />
        <utils-svg-cmp
          name="money/sketch-quote"
          class="mnyHeaderMakeQuoteRight"
        />
      </div>
      <div class="mnyHeaderMakeTitleText">Make thousands from your data</div>
    </div>
    <div class="mnyHeaderMakeSubtitle">
      Feel like your phone's listening to you? Might as well get
      <b class="mnyHeaderMakeSubtitleHlt">paid for it</b>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'MnyHeaderMakeCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
.mnyHeaderMakeCnt
  width: 100%
  position: relative

.mnyHeaderMakeTitle
  width: inherit
  position: relative
  height: 23vw

.mnyHeaderMakeTitleText
  font-family: $font-family-koara
  color: $money-purple
  font-size: 7.5vw
  width: 55vw
  display: inline
  position: absolute
  top: 35%
  left: 8%

.mnyHeaderMakeQuote
  width: inherit
  position: absolute
  top: 0
  left: 0
  height: 12vw

.mnyHeaderMakeQuoteLeft
  top: 0
  left: 0
  position: absolute

.mnyHeaderMakeQuoteRight
  position: absolute
  top: 10%
  right: 0

::v-deep .mnyHeaderMakeQuoteLeft.svg
  transform: rotate(23deg)
  height: 13vw

::v-deep .mnyHeaderMakeQuoteRight.svg
  transform: rotate(135.5deg)
  top: 25%
  height: 13vw

.mnyHeaderMakeSubtitle
  margin: 2vw 0 0 5vw
  font-family: $font-family-montserrat
  font-weight: 600
  font-size: 5vw
  color: $money-purple

.mnyHeaderMakeSubtitleHlt
  color: $money-orange
  font-weight: 600
</style>
