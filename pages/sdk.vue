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
      :link-color="headerLinkColor"
    />
    <div class="indexContent">
      <div style="position: relative">
        <banner-sdk-cmp class="bannerCmp" />
        <hiw-cmp class="hiwCmp" />
        <catalog-use-cmp class="catalogUseCmp" />
        <demo-cmp class="demoCmp" />
        <catalog-start-cmp class="catalogStartCmp" />
        <start-cmp class="startCmp" />
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
import HeaderBarCmp from '../components/header/HeaderBarCmp'
import BannerSdkCmp from '../components/banner/BannerSdkCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'
import HiwCmp from '@/components/hiw/HiwCmp'
import CatalogUseCmp from '@/components/catalog/CatalogUseCmp'
import DemoCmp from '@/components/demo/DemoCmp'
import CatalogStartCmp from '@/components/catalog/CatalogStartCmp'
import StartCmp from '@/components/start/StartCmp'

export default {
  name: 'SdkPage',
  components: {
    BannerSdkCmp,
    HeaderBarCmp,
    HiwCmp,
    CatalogUseCmp,
    DemoCmp,
    CatalogStartCmp,
    StartCmp,
    UtilsFooterCmp,
  },
  data: function () {
    return {
      links: [
        {
          name: 'Home',
          href: '/',
        },
        {
          name: 'Learn',
          href: 'https://blog.mytiki.com',
        },
        {
          name: 'Docs',
          href: 'https://docs.mytiki.com',
        },
        {
          name: 'Sign In',
          href: 'https://console.mytiki.com',
        },
      ],
      footerColor: theme.greenLight,
      headerColor: theme.greenDark,
      headerLinkColor: theme.white,
    }
  },
  mounted() {
    this.$plausible.trackPageview()
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

.indexContent
  position: absolute
  z-index: 1
  top: 0
  left: 0
  width: 100%

@include for-phone
  .hiwCmp
    width: 90%
    margin: auto

  .bannerCmp
    margin-bottom: 50px

@include for-tablet
  .bannerCmp
    margin-bottom: 50px

  .hiwCmp
    width: 75%
    margin: auto

  .catalogUseCmp
    width: 75%
    margin: 100px auto 0 auto

  .demoCmp
    margin-top: 50px

  .catalogStartCmp
    margin: 150px auto 0 auto
    width: 75%

  .startCmp
    margin: 150px auto 150px auto
    width: 75%
</style>
