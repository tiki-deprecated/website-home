<template>
  <div class="headerCompaniesCmpCnt">
    <div class="headerCompaniesCmpCntTop">
      <header-companies-bkg-cmp class="headerCompaniesCmpBkg" />
      <div class="headerCompaniesCmpContent">
        <div class="headerCompaniesCmpContentCnt">
          <utils-svg-cmp name="tiki/logo" class="utilsSvgCmpTikiLogo" />
          <header-companies-amount-cmp class="headerCompaniesAmountCmp" />
        </div>
      </div>
    </div>
    <HeaderCompaniesPineappleCmp class="HeaderCompaniesPineappleCmp" />
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'
import HeaderCompaniesBkgCmp from '~/components/header/HeaderCompaniesBkgCmp'
import HeaderCompaniesAmountCmp from '~/components/header/HeaderCompaniesAmountCmp'
import HeaderCompaniesPineappleCmp from '~/components/header/HeaderCompaniesPineappleCmp'

export default {
  name: 'HeaderCompaniesCmp',
  components: {
    UtilsSvgCmp,
    HeaderCompaniesBkgCmp,
    HeaderCompaniesAmountCmp,
    HeaderCompaniesPineappleCmp,
  },
}
</script>

<style scoped lang="sass">
.headerCompaniesCmpCnt
  position: relative

.headerCompaniesCmpCntTop
  height: 14em

.headerCompaniesCmpBkg
  position: absolute
  height: inherit
  width: 100%
  top: 0
  left: 0
  z-index: 1

.headerCompaniesCmpContent
  position: absolute
  top: 0
  left: 0
  z-index: 2
  width: 100%

.headerCompaniesCmpContentCnt
  position: relative
  margin: 1.5em

::v-deep .utilsSvgCmpTikiLogo
  fill: #FFFFFF
  height: 2em

.HeaderCompaniesPineappleCmp
  height: 20em
  position: relative
</style>
