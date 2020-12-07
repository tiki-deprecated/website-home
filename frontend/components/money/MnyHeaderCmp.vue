<template>
  <div class="mnyHeaderCnt">
    <div class="myHeaderStack">
      <div class="mnyHeaderTop">
        <utils-svg-cmp name="money/bkg-header" class="mnyHeaderTopBkgHeader" />
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
.mnyHeaderCnt
  position: relative
  background: $money-blue-light
  height: 120vw

.mnyHeaderTop
  height: 60vw
  position: relative

.mnyHeaderTopBkgHeader
  position: absolute
  height: 140%
  width: 100%
  top: 0
  left: 0
  z-index: 1

::v-deep .mnyHeaderTopBkgHeader.svg > .layer1
  fill: $money-yellow-light

::v-deep .mnyHeaderTopBkgHeader.svg > .layer2
  fill: $money-red-dark

::v-deep .mnyHeaderTopBkgHeader.svg > .layer3
  fill: $money-orange

.mnyHeaderTopCnt
  position: absolute
  top: 0
  left: 0
  z-index: 2
  width: 100%

.mnyHeaderTopLogo
  padding: 6vw 0 0 6vw

::v-deep .mnyHeaderTopLogo.svg
  fill: #FFFFFF
  height: 2em

.mnyHeaderBtm
  position: relative
  width: 66%
  margin-left: 2vw

.myHeaderStack
  position: absolute
  top: 0
  left: 0
  z-index: 1

.mnyHeaderPineapple
  position: absolute
  top: 37%
  right: 0
  z-index: 2
</style>
