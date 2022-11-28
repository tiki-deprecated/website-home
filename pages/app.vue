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

export default {
  name: 'AppPage',
  components: { HeaderBarCmp, UtilsFooterCmp, BannerAppCmp },
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
      ],
      headerColor: theme.white,
      footerColor: theme.purple,
    }
  },
}
</script>

<style scoped lang="sass">
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
</style>
