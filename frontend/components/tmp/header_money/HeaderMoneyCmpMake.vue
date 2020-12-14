<template>
  <div class="headerMoneyCmpMakeCnt">
    <div class="headerMoneyCmpMakeTitle">
      <div class="headerMoneyCmpMakeQuote">
        <utils-svg-cmp
          name="money/sketch-quote"
          class="headerMoneyCmpMakeQuoteLeft"
        />
        <utils-svg-cmp
          name="money/sketch-quote"
          class="headerMoneyCmpMakeQuoteRight"
        />
      </div>
      <div class="headerMoneyCmpMakeTitleText">
        Make thousands from your data
      </div>
    </div>
    <div class="headerMoneyCmpMakeSubtitle">
      Feel like your phone's listening to you? Might as well get
      <b class="headerMoneyCmpMakeSubtitleHlt">paid for it</b>.
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'HeaderMoneyCmpMake',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../../assets/styles/mixins"

.headerMoneyCmpMakeCnt
  width: 100%
  position: relative

.headerMoneyCmpMakeTitle
  width: inherit
  position: relative

.headerMoneyCmpMakeTitleText
  font-family: $font-family-koara
  color: $money-purple
  display: inline
  position: absolute

.headerMoneyCmpMakeQuote
  width: inherit
  position: absolute
  top: 0
  left: 0

.headerMoneyCmpMakeQuoteLeft
  position: absolute

.headerMoneyCmpMakeQuoteRight
  position: absolute

.headerMoneyCmpMakeSubtitle
  font-family: $font-family-montserrat
  font-weight: 600
  color: $money-purple

.headerMoneyCmpMakeSubtitleHlt
  color: $money-orange
  font-weight: 600

@include for-phone
  .headerMoneyCmpMakeTitle
    height: 23vw

  .headerMoneyCmpMakeTitleText
    font-size: 7vw
    width: 55vw
    margin-left: 6vw
    top: 35%

  .headerMoneyCmpMakeQuote
    height: 12vw

  .headerMoneyCmpMakeQuoteLeft
    top: 0
    left: 0

  .headerMoneyCmpMakeQuoteRight
    right: 0
    top: 25%

  ::v-deep .headerMoneyCmpMakeQuoteLeft.svg
    transform: rotate(23deg)
    height: 13vw

  ::v-deep .headerMoneyCmpMakeQuoteRight.svg
    transform: rotate(135.5deg)
    height: 13vw

  .headerMoneyCmpMakeSubtitle
    margin: 1vw 0 0 6vw
    font-size: 4.5vw

@include for-tablet
  .headerMoneyCmpMakeTitle
    height: 5vw
    margin-top: 2vw

  .headerMoneyCmpMakeTitleText
    font-size: 2.25vw
    width: 100%
    top: 40%
    text-align: center

  .headerMoneyCmpMakeQuote
    height: 4vw

  .headerMoneyCmpMakeQuoteLeft
    top: -20%
    left: 32%

  .headerMoneyCmpMakeQuoteRight
    top: -20%
    right: 32%

  ::v-deep .headerMoneyCmpMakeQuoteLeft.svg
    transform: rotate(23deg)
    height: 4vw

  ::v-deep .headerMoneyCmpMakeQuoteRight.svg
    transform: rotate(123deg)
    height: 4vw

  .headerMoneyCmpMakeSubtitle
    margin: 0 auto
    font-size: 1.25vw
    text-align: center
    width: 23%
</style>
