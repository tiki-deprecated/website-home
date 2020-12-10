<template>
  <div class="MnyWorkLearnBtnCnt">
    <div class="MnyWorkLearnBtnText">Learn more</div>
    <utils-svg-cmp name="money/sketch-arrow" class="MnyWorkLearnBtnArrow" />
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'MnyWorkLearnBtnCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.MnyWorkLearnBtnCnt
  background: $money-blue-dark
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.MnyWorkLearnBtnText
  font-family: $font-family-koara
  color: $money-blue-light
  text-align: right

::v-deep .MnyWorkLearnBtnArrow.svg
  fill: $money-blue-light

@include for-phone
  .MnyWorkLearnBtnCnt
    height: 15vw
    border-radius: 4vw
    width: 70%

  .MnyWorkLearnBtnText
    font-size: 6vw
    width: 66%

  .MnyWorkLearnBtnArrow
    margin-left: 10%

  ::v-deep .MnyWorkLearnBtnArrow.svg
    height: 50%

@include for-tablet
  .MnyWorkLearnBtnCnt
    height: 4vw
    border-radius: 0.5vw
    width: 20%

  .MnyWorkLearnBtnText
    font-size: 1.25vw
    width: 55%

  .MnyWorkLearnBtnArrow
    margin-left: 15%

  ::v-deep .MnyWorkLearnBtnArrow.svg
    height: 50%
</style>
