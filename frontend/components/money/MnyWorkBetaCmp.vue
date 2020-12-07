<template>
  <div class="mnyWorkBetaCnt">
    <utils-svg-cmp name="money/bkg-launch" class="mnyWorkBetaBkgLaunch" />
    <div class="mnyWorkBetaText">
      <div class="mnyWorkBetaTextFeedback">
        We need your help, your feedback, your ideas, your passion, your
        concerns.
      </div>
      <div class="mnyWorkBetaText4u">We’re here for you.</div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'MnyWorkBetaCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
.mnyWorkBetaCnt
  position: relative
  width: 100%
  height: 110vw

.mnyWorkBetaBkgLaunch
  position: absolute
  top: 0
  left: 0
  z-index: 1

::v-deep .mnyWorkBetaBkgLaunch.svg > .bkg
  fill: $money-blue-light

::v-deep .mnyWorkBetaBkgLaunch.svg > .blob1
  fill: $money-pink

::v-deep .mnyWorkBetaBkgLaunch.svg > .blob2
  fill: $money-orange

::v-deep .mnyWorkBetaBkgLaunch.svg > .paint
  fill: $money-yellow-light

::v-deep .mnyWorkBetaBkgLaunch.svg > .date
  fill: $money-blue-dark

::v-deep .mnyWorkBetaBkgLaunch.svg > .launch
  fill: $money-pink

.mnyWorkBetaText
  font-family: $font-family-montserrat
  color: $money-purple
  text-align: center
  position: absolute
  font-weight: 600
  font-size: 5vw
  z-index: 2
  bottom: 10%
  left: 0

.mnyWorkBetaText4u
  margin-top: 5vw
</style>
