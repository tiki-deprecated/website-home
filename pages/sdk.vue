<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <header-bar-cmp class="headerBar" :links="links" />
    <div class="indexContent">
      <div style="position: relative">
        <banner-sdk-cmp class="bannerCmp" />
        boo
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBarCmp from '../components/header/HeaderBarCmp'
import BannerSdkCmp from '../components/banner/BannerSdkCmp'

export default {
  name: 'IndexPage',
  components: {
    BannerSdkCmp,
    HeaderBarCmp,
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
  .involvedCmp
    margin: 75px auto

  .aboutCmp
    margin-bottom: 80px

@include for-tablet
  .aboutCmp
    width: 75%
    margin: 20px auto 150px auto

  .involvedCmp
    margin-bottom: 150px
    margin-top: 100px
</style>
