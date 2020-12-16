<template>
  <div class="formAffiliateCmpLtdCnt">
    <utils-svg-cmp name="sketch/signup" class="formAffiliateCmpLtdSketch" />
    <div class="formAffiliateCmpLtdTextCnt">
      <div class="formAffiliateCmpLtdText">
        Beta access is limited to make sure everyone gets their fair (and
        significant) share.&nbsp;
        <b class="formAffiliateCmpLtdTextHlt"> Only 9,568 left</b>
      </div>
      <utils-svg-cmp name="paint/warn" class="formAffiliateCmpLtdPaintWarn" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormAffiliateCmpLtd',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formAffiliateCmpLtdTextCnt
  position: relative

.formAffiliateCmpLtdText
  font-family: $font-family-nunito
  color: $blue-dark
  font-weight: bold
  position: absolute
  top: 0
  left: 0
  z-index: 1

.formAffiliateCmpLtdTextHlt
  color: $red-dark
  font-weight: bold

.formAffiliateCmpLtdPaintWarn
  position: absolute

::v-deep .formAffiliateCmpLtdPaintWarn.svg > .warn
  fill: $red-dark

::v-deep .formAffiliateCmpLtdPaintWarn.svg > .layer1
  fill: $yellow

@include for-phone
  ::v-deep .formAffiliateCmpLtdSketch.svg
    height: 9vw

  .formAffiliateCmpLtdTextCnt
    height: 22vw

  .formAffiliateCmpLtdText
    margin-top: 5vw
    font-size: 4vw

  .formAffiliateCmpLtdPaintWarn
    bottom: -4%
    right: -3%

  ::v-deep .formAffiliateCmpLtdPaintWarn.svg
    height: 8vw

@include for-tablet
  ::v-deep .formAffiliateCmpLtdSketch.svg
    height: 3vw
    margin: 0 auto

  .formAffiliateCmpLtdTextCnt
    height: 6.75vw

  .formAffiliateCmpLtdText
    font-size: 1.25vw
    text-align: center
    top: 40%
    left: 50%
    transform: translate(-50%, -40%)
    width: 60%

  .formAffiliateCmpLtdPaintWarn
    bottom: 22%
    right: 16%

  ::v-deep .formAffiliateCmpLtdPaintWarn.svg
    height: 2.6vw
</style>
