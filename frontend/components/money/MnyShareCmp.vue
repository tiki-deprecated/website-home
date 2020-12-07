<template>
  <div class="mnyShareCnt">
    <utils-svg-cmp name="money/sketch-share" class="mnyShareSketchShare" />
    <div class="mnyShareFight">
      Together we can fight back against creepy tech.
    </div>
    <div class="mnyShareBtnGroup">
      <div class="mnyShareBtnRow1">
        <utils-svg-cmp
          name="money/btn-twt"
          class="mnyShareBtn mnyShareBtnTwt"
        />
        <utils-svg-cmp name="money/btn-ig" class="mnyShareBtn mnyShareBtnIg" />
      </div>
      <utils-svg-cmp
        name="money/btn-fb"
        class="mnyShareBtn mnyShareBtnFb mnyShareBtnRow2"
      />
      <div class="mnyShareBtnRow3">
        <utils-svg-cmp name="money/btn-sh" class="mnyShareBtn mnyShareBtnSh" />
        <utils-svg-cmp name="money/btn-li" class="mnyShareBtn mnyShareBtnLi" />
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
export default {
  name: 'MnyShareCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
.mnyShareCnt
  width: 100%
  padding-top: 25vw
  background: rgba($money-yellow-light, 0.10)

.mnyShareSketchShare
  margin: 0 auto

::v-deep .mnyShareSketchShare.svg
  height: 13vw

.mnyShareFight
  font-family: $font-family-koara
  color: $money-purple
  font-weight: bold
  font-size: 5vw
  margin: 5vw auto 0 auto
  width: 80%
  text-align: center

.mnyShareBtnFb
  margin: 0 auto

::v-deep .mnyShareBtnTwt.svg
  height: 30vw

::v-deep .mnyShareBtnIg.svg
  height: 30vw

::v-deep .mnyShareBtnFb.svg
  height: 30vw

::v-deep .mnyShareBtnSh.svg
  height: 50vw

::v-deep .mnyShareBtnLi.svg
  height: 35vw

::v-deep .mnyShareBtn.svg > .bkg
  fill: $money-blue-light

.mnyShareBtnRow1
  display: flex
  align-items: center
  justify-content: space-between

.mnyShareBtnRow3
  display: flex
  align-items: center
  justify-content: space-between
  margin-top: -10vw

.mnyShareBtnGroup
  margin-top: 10vw
</style>
