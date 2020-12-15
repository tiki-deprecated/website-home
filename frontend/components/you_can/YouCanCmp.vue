<template>
  <div class="youCanCnt">
    <div class="youCanTitleCnt">
      <utils-svg-cmp name="sketch/quote" class="youCanQuoteLeft" />
      <div class="youCanTitleText">With TIKI, you can</div>
      <utils-svg-cmp name="sketch/quote" class="youCanQuoteRight" />
    </div>
    <you-can-cmp-features class="youCanCmpFeatures" />
    <you-can-cmp-how class="youCanCmpHow" />
  </div>
</template>

<script>
import YouCanCmpFeatures from '@/components/you_can/YouCanCmpFeatures'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import YouCanCmpHow from '@/components/you_can/YouCanCmpHow'

export default {
  name: 'YouCanCmp',
  components: { YouCanCmpHow, YouCanCmpFeatures, UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.youCanCnt
  background: $money-yellow-xxlight

.youCanTitleText
  font-family: $font-family-koara
  font-weight: bold
  color: $money-purple

.youCanQuoteLeft
  transform: rotate(23deg)

.youCanQuoteRight
  transform: rotate(130deg)

@include for-phone
  .youCanCnt
    padding: 18vw 0 18vw 0

  .youCanQuoteLeft, .youCanQuoteRight
    height: 14vw
    margin-top: -20vw

  .youCanTitleText
    font-size: 8vw
    width: 35vw
    text-align: center

  .youCanTitleCnt
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content
@include for-tablet
  .youCanCnt
    padding: 5vw 0 3vw 0

  .youCanQuoteLeft, .youCanQuoteRight
    height: 3.5vw
    margin-top: -3.5vw

  .youCanTitleText
    font-size: 2.25vw

  .youCanTitleCnt
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content
</style>
