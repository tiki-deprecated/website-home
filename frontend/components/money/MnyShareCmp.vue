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
        <utils-svg-cmp
          name="money/btn-sh-lg"
          class="mnyShareBtn mnyShareBtnShLg"
        />
        <utils-svg-cmp name="money/btn-li" class="mnyShareBtn mnyShareBtnLi" />
        <utils-svg-cmp
          name="money/btn-li-lg"
          class="mnyShareBtn mnyShareBtnLiLg"
        />
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
@import "assets/styles/mixins"

.mnyShareCnt
  width: 100%
  background: rgba($money-yellow-light, 0.10)

.mnyShareSketchShare
  margin: 0 auto

.mnyShareFight
  font-family: $font-family-koara
  color: $money-purple
  font-weight: bold
  text-align: center

.mnyShareBtnFb
  margin: 0 auto

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

@include for-phone
  .mnyShareCnt
    padding-top: 23vw

  ::v-deep .mnyShareSketchShare.svg
    height: 13vw

  .mnyShareFight
    font-size: 5vw
    margin: 6vw auto 0 auto
    width: 80%

  ::v-deep .mnyShareBtnTwt.svg
    height: 30vw

  ::v-deep .mnyShareBtnIg.svg
    height: 30vw

  ::v-deep .mnyShareBtnFb.svg
    height: 30vw

  ::v-deep .mnyShareBtnSh.svg
    height: 50vw

  ::v-deep .mnyShareBtnShLg.svg
    display: none
    height: 0

  ::v-deep .mnyShareBtnLi.svg
    height: 35vw

  ::v-deep .mnyShareBtnLiLg.svg
    display: none
    height: 0

  .mnyShareBtnRow3
    margin-top: -10vw

  .mnyShareBtnGroup
    margin-top: 10vw
@include for-tablet
  .mnyShareCnt
    padding-top: 19vw

  ::v-deep .mnyShareSketchShare.svg
    height: 4vw

  .mnyShareFight
    font-size: 1.25vw
    margin: 2vw auto 0 auto
    width: 80%

  ::v-deep .mnyShareBtnTwt.svg
    height: 6vw

  ::v-deep .mnyShareBtnIg.svg
    height: 6vw

  ::v-deep .mnyShareBtnFb.svg
    height: 6vw

  ::v-deep .mnyShareBtnSh.svg
    height: 0
    display: none

  ::v-deep .mnyShareBtnShLg.svg
    display: unset
    height: 10vw

  ::v-deep .mnyShareBtnLi.svg
    height: 0
    display: none

  ::v-deep .mnyShareBtnLiLg.svg
    display: unset
    height: 7vw

  .mnyShareBtnRow1, .mnyShareBtnRow2, .mnyShareBtnRow3
    width: 33%

  .mnyShareBtnGroup
    display: flex
    align-items: center
    justify-content: space-between
    width: 60%
    margin: 2vw auto 0 auto
    padding-bottom: 2vw
</style>
