<template>
  <div class="mnyHeaderCnt">
    <div class="myHeaderStack">
      <div class="mnyHeaderTop">
        <utils-svg-cmp name="money/bkg-header" class="mnyHeaderTopBkgHeader" />
        <utils-svg-cmp
          name="money/bkg-header-lg"
          class="mnyHeaderTopBkgHeaderLg"
        />
        <div class="mnyHeaderTopCnt">
          <utils-svg-cmp name="tiki/logo" class="mnyHeaderTopLogo" />
          <mny-header-amt-cmp class="headerCompaniesAmountCmp" />
        </div>
      </div>
      <div class="mnyHeaderBtm">
        <mny-header-make-cmp class="mnyHeaderMakeCmp" />
      </div>
    </div>
    <utils-svg-cmp name="money/pineapple" class="mnyHeaderPineapple" />
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import MnyHeaderAmtCmp from '@/components/money/MnyHeaderAmtCmp'
import MnyHeaderMakeCmp from '@/components/money/MnyHeaderMakeCmp'

export default {
  name: 'MnyHeaderCmp',
  components: { MnyHeaderMakeCmp, UtilsSvgCmp, MnyHeaderAmtCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnyHeaderCnt
  position: relative
  background: $money-blue-light

.mnyHeaderTop
  position: relative

.mnyHeaderTopBkgHeader, .mnyHeaderTopBkgHeaderLg
  position: absolute
  width: 100%
  top: 0
  left: 0
  z-index: 1

.mnyHeaderTopCnt
  position: absolute
  top: 0
  left: 0
  z-index: 2
  width: 100%

::v-deep .mnyHeaderTopLogo.svg
  fill: #FFFFFF

.mnyHeaderBtm
  position: relative

.myHeaderStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.mnyHeaderPineapple
  position: absolute
  right: 0
  z-index: 2

::v-deep .mnyHeaderTopBkgHeader.svg > .layer1, ::v-deep .mnyHeaderTopBkgHeaderLg.svg > .layer1
  fill: $money-yellow-light

::v-deep .mnyHeaderTopBkgHeader.svg > .layer2, ::v-deep .mnyHeaderTopBkgHeaderLg.svg > .layer2
  fill: $money-red-dark

::v-deep .mnyHeaderTopBkgHeader.svg > .layer3, ::v-deep .mnyHeaderTopBkgHeaderLg.svg > .layer3
  fill: $money-orange

::v-deep .mnyHeaderPineapple.svg > .layer1
  fill: $money-pink

::v-deep .mnyHeaderPineapple.svg > .layer2
  fill: $money-orange

::v-deep .mnyHeaderPineapple.svg > .pineapple
  fill: $money-black-light

::v-deep .mnyHeaderPineapple.svg > .frames
  fill: $money-black-dark

::v-deep .mnyHeaderPineapple.svg > .lens
  fill: $money-orange

::v-deep .mnyHeaderPineapple.svg > .paint
  fill: $money-blue-dark

::v-deep .mnyHeaderPineapple.svg > .text
  fill: $money-yellow-light

@include for-phone
  .mnyHeaderCnt
    height: 120vw

  .mnyHeaderTop
    height: 60vw

  .mnyHeaderTopBkgHeader
    height: 140%
    display: unset

  .mnyHeaderTopBkgHeaderLg
    height: 0
    display: none

  ::v-deep .mnyHeaderPineapple.svg
    height: 49%

  ::v-deep .mnyHeaderTopLogo.svg
    height: 8.6vw

  .mnyHeaderBtm
    width: 65%
    margin-left: 2vw

  .mnyHeaderTopLogo
    padding: 6vw 0 0 6vw

  .mnyHeaderPineapple
    top: 37%

@include for-tablet
  .mnyHeaderCnt
    height: 35vw

  .mnyHeaderTop
    height: 19vw

  .mnyHeaderTopBkgHeader
    height: 0
    display: none

  .mnyHeaderTopBkgHeaderLg
    height: 445%
    display: unset

  ::v-deep .mnyHeaderPineapple.svg
    height: 75%

  ::v-deep .mnyHeaderTopLogo.svg
    height: 3vw

  .mnyHeaderBtm
    width: 100%

  .mnyHeaderTopLogo
    padding: 1vw 0 0 3vw

  .mnyHeaderPineapple
    top: 20%
</style>
