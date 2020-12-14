<template>
  <nuxt-link to="/" class="HowBetaCmpLearnBtnCnt">
    <div class="HowBetaCmpLearnBtnText">Learn more</div>
    <utils-svg-cmp name="money/sketch-arrow" class="HowBetaCmpLearnBtnArrow" />
  </nuxt-link>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'HowBetaCmpLearnBtn',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.HowBetaCmpLearnBtnCnt
  background: $money-blue-dark
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.HowBetaCmpLearnBtnCnt:hover
  background: $money-blue-dark-hlt


.HowBetaCmpLearnBtnCnt, .HowBetaCmpLearnBtnCnt:hover, .HowBetaCmpLearnBtnCnt:visited, .HowBetaCmpLearnBtnCntText:link, .HowBetaCmpLearnBtnCnt:active
  text-decoration: none

.HowBetaCmpLearnBtnText
  font-family: $font-family-koara
  color: $money-blue-light
  text-align: right

.HowBetaCmpLearnBtnText, .HowBetaCmpLearnBtnText:hover, .HowBetaCmpLearnBtnText:visited, .HowBetaCmpLearnBtnText:link, .HowBetaCmpLearnBtnText:active
  text-decoration: none

::v-deep .HowBetaCmpLearnBtnArrow.svg
  fill: $money-blue-light

@include for-phone
  .HowBetaCmpLearnBtnCnt
    height: 15vw
    border-radius: 4vw
    width: 70%

  .HowBetaCmpLearnBtnText
    font-size: 6vw
    width: 66%

  .HowBetaCmpLearnBtnArrow
    margin-left: 10%

  ::v-deep .HowBetaCmpLearnBtnArrow.svg
    height: 50%

@include for-tablet
  .HowBetaCmpLearnBtnCnt
    height: 4vw
    border-radius: 0.5vw
    width: 20%

  .HowBetaCmpLearnBtnText
    font-size: 1.25vw
    width: 55%

  .HowBetaCmpLearnBtnArrow
    margin-left: 15%

  ::v-deep .HowBetaCmpLearnBtnArrow.svg
    height: 50%
</style>
