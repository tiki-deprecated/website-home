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
      <b class="mnyHeaderMakeSubtitleHlt">paid for it</b>.
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
@import "assets/styles/mixins"

.mnyHeaderMakeCnt
  width: 100%
  position: relative

.mnyHeaderMakeTitle
  width: inherit
  position: relative

.mnyHeaderMakeTitleText
  font-family: $font-family-koara
  color: $money-purple
  display: inline
  position: absolute

.mnyHeaderMakeQuote
  width: inherit
  position: absolute
  top: 0
  left: 0

.mnyHeaderMakeQuoteLeft
  position: absolute

.mnyHeaderMakeQuoteRight
  position: absolute

.mnyHeaderMakeSubtitle
  font-family: $font-family-montserrat
  font-weight: 600
  color: $money-purple

.mnyHeaderMakeSubtitleHlt
  color: $money-orange
  font-weight: 600

@include for-phone
  .mnyHeaderMakeTitle
    height: 23vw

  .mnyHeaderMakeTitleText
    font-size: 7vw
    width: 55vw
    margin-left: 6vw
    top: 35%

  .mnyHeaderMakeQuote
    height: 12vw

  .mnyHeaderMakeQuoteLeft
    top: 0
    left: 0

  .mnyHeaderMakeQuoteRight
    right: 0
    top: 25%

  ::v-deep .mnyHeaderMakeQuoteLeft.svg
    transform: rotate(23deg)
    height: 13vw

  ::v-deep .mnyHeaderMakeQuoteRight.svg
    transform: rotate(135.5deg)
    height: 13vw

  .mnyHeaderMakeSubtitle
    margin: 1vw 0 0 6vw
    font-size: 4.5vw

@include for-tablet
  .mnyHeaderMakeTitle
    height: 5vw
    margin-top: 2vw

  .mnyHeaderMakeTitleText
    font-size: 2.25vw
    width: 100%
    top: 40%
    text-align: center

  .mnyHeaderMakeQuote
    height: 4vw

  .mnyHeaderMakeQuoteLeft
    top: -20%
    left: 32%

  .mnyHeaderMakeQuoteRight
    top: -20%
    right: 32%

  ::v-deep .mnyHeaderMakeQuoteLeft.svg
    transform: rotate(23deg)
    height: 4vw

  ::v-deep .mnyHeaderMakeQuoteRight.svg
    transform: rotate(123deg)
    height: 4vw

  .mnyHeaderMakeSubtitle
    margin: 0 auto
    font-size: 1.25vw
    text-align: center
    width: 23%
</style>
