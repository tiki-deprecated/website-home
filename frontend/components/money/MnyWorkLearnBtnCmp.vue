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
.MnyWorkLearnBtnCnt
  background: $money-blue-dark
  height: 15vw
  border-radius: 4vw
  width: 70%
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.MnyWorkLearnBtnText
  font-family: $font-family-koara
  color: $money-blue-light
  font-size: 6vw
  width: 31vw
  margin-left: 13vw

.MnyWorkLearnBtnArrow
  margin-left: 5vw

::v-deep .MnyWorkLearnBtnArrow.svg
  height: 8vw
  fill: $money-blue-light
</style>
