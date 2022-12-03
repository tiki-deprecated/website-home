<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <header-bar-cmp
      class="headerBar"
      :links="links"
      :txt-color="headerColor"
      :link-color="footerColor"
    />
    <div class="appContent">
      <div style="position: relative">
        <banner-app-cmp class="bannerAppCmp" />
        <overview-cmp class="overviewCmp" />
        <catalog-latest-cmp class="latestCmp" />
        <faq-cmp class="faqCmp" />
        <utils-footer-cmp
          class="footerCmp"
          :bkg-color="footerColor"
          :txt-color="headerColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import HeaderBarCmp from '@/components/header/HeaderBarCmp'
import UtilsFooterCmp from '@/components/utils/UtilsFooterCmp'
import BannerAppCmp from '@/components/banner/BannerAppCmp'
import OverviewCmp from '@/components/overview/OverviewCmp'
import CatalogLatestCmp from '@/components/catalog/CatalogLatestCmp'
import FaqCmp from '@/components/faq/FaqCmp'

export default {
  name: 'AppPage',
  components: {
    HeaderBarCmp,
    UtilsFooterCmp,
    BannerAppCmp,
    OverviewCmp,
    CatalogLatestCmp,
    FaqCmp,
  },
  data: function () {
    return {
      links: [],
      headerColor: theme.white,
      footerColor: theme.purple,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
@import "assets/styles/theme"

.headerBar
  // position: fixed
  z-index: 99
  top: 0
  left: 0
  right: 0

.appContent
  position: absolute
  z-index: 1
  top: 0
  left: 0
  width: 100%

@include for-phone
  .overviewCmp
    margin: 75px auto

  .latestCmp
    margin: 50px auto
    width: 90%

  .faqCmp
    width: 90%
    margin: 50px auto 75px auto

@include for-tablet
  .overviewCmp
    margin-top: 50px

  .latestCmp
    margin: 50px auto
    width: 75%

  .faqCmp
    width: 75%
    margin: 150px auto 75px auto
</style>
