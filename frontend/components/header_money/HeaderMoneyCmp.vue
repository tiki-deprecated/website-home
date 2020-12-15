<template>
  <div class="headerMoneyCnt">
    <div class="headerMoneyStack">
      <div class="headerMoneyTop">
        <utils-svg-cmp
          name="background/header-1"
          class="headerMoneyTopBkgHeader"
        />
        <utils-svg-cmp
          name="background/header-1-lg"
          class="headerMoneyTopBkgHeaderLg"
        />
        <div class="headerMoneyTopCnt">
          <utils-svg-cmp name="tiki/logo" class="headerMoneyTopLogo" />
          <header-money-cmp-amt class="headerCompaniesAmountCmp" />
        </div>
      </div>
      <div class="headerMoneyBtm">
        <header-money-cmp-make class="headerMoneyMakeCmp" />
      </div>
    </div>
    <utils-svg-cmp name="tiki/pineapple" class="headerMoneyPineapple" />
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import HeaderMoneyCmpAmt from '@/components/header_money/HeaderMoneyCmpAmt'
import HeaderMoneyCmpMake from '@/components/header_money/HeaderMoneyCmpMake'

export default {
  name: 'HeaderMoneyCmp',
  components: { HeaderMoneyCmpAmt, UtilsSvgCmp, HeaderMoneyCmpMake },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerMoneyCnt
  position: relative
  background: $money-blue-light

.headerMoneyTop
  position: relative

.headerMoneyTopBkgHeader, .headerMoneyTopBkgHeaderLg
  position: absolute
  width: 100%
  top: 0
  left: 0
  z-index: 1

.headerMoneyTopCnt
  position: absolute
  top: 0
  left: 0
  z-index: 2
  width: 100%

::v-deep .headerMoneyTopLogo.svg
  fill: #FFFFFF

.headerMoneyBtm
  position: relative

.headerMoneyStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.headerMoneyPineapple
  position: absolute
  right: 0
  z-index: 2

::v-deep .headerMoneyTopBkgHeader.svg > .layer1, ::v-deep .headerMoneyTopBkgHeaderLg.svg > .layer1
  fill: $money-yellow-light

::v-deep .headerMoneyTopBkgHeader.svg > .layer2, ::v-deep .headerMoneyTopBkgHeaderLg.svg > .layer2
  fill: $money-red-dark

::v-deep .headerMoneyTopBkgHeader.svg > .layer3, ::v-deep .headerMoneyTopBkgHeaderLg.svg > .layer3
  fill: $money-orange

::v-deep .headerMoneyPineapple.svg > .layer1
  fill: $money-pink

::v-deep .headerMoneyPineapple.svg > .layer2
  fill: $money-orange

::v-deep .headerMoneyPineapple.svg > .pineapple
  fill: $money-black-light

::v-deep .headerMoneyPineapple.svg > .frames
  fill: $money-black-dark

::v-deep .headerMoneyPineapple.svg > .lens
  fill: $money-orange

::v-deep .headerMoneyPineapple.svg > .paint
  fill: $money-blue-dark

::v-deep .headerMoneyPineapple.svg > .text
  fill: $money-yellow-light

@include for-phone
  .headerMoneyCnt
    height: 120vw

  .headerMoneyTop
    height: 60vw

  .headerMoneyTopBkgHeader
    height: 140%
    display: unset

  .headerMoneyTopBkgHeaderLg
    height: 0
    display: none

  ::v-deep .headerMoneyPineapple.svg
    height: 49%

  ::v-deep .headerMoneyTopLogo.svg
    height: 8.6vw

  .headerMoneyBtm
    width: 65%
    margin-left: 2vw

  .headerMoneyTopLogo
    padding: 6vw 0 0 6vw

  .headerMoneyPineapple
    top: 37%

@include for-tablet
  .headerMoneyCnt
    height: 35vw

  .headerMoneyTop
    height: 19vw

  .headerMoneyTopBkgHeader
    height: 0
    display: none

  .headerMoneyTopBkgHeaderLg
    height: 445%
    display: unset

  ::v-deep .headerMoneyPineapple.svg
    height: 75%

  ::v-deep .headerMoneyTopLogo.svg
    height: 3vw

  .headerMoneyBtm
    width: 100%

  .headerMoneyTopLogo
    padding: 1vw 0 0 3vw

  .headerMoneyPineapple
    top: 20%
</style>
