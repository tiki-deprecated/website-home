<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <header-bar-cmp class="headerBar" :links="links" />
    <div class="indexContent">
      <div style="position: relative">
        <banner-home-cmp class="bannerCmp" />
        <about-cmp class="aboutCmp" />
        <quote-cmp class="quoteCmp" />
        <team-cmp class="teamCmp" />
        <investor-cmp class="investorCmp" />
        <involved-cmp class="involvedCmp" />
        <utils-footer-cmp class="footerCmp" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBarCmp from '../components/header/HeaderBarCmp'
import BannerHomeCmp from '../components/banner/BannerHomeCmp'
import AboutCmp from '../components/about/AboutCmp'
import QuoteCmp from '../components/quote/QuoteCmp'
import TeamCmp from '../components/team/TeamCmp'
import InvestorCmp from '../components/investor/InvestorCmp'
import InvolvedCmp from '../components/involved/InvolvedCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'

export default {
  name: 'IndexPage',
  components: {
    BannerHomeCmp,
    HeaderBarCmp,
    AboutCmp,
    QuoteCmp,
    TeamCmp,
    InvestorCmp,
    InvolvedCmp,
    UtilsFooterCmp,
  },
  data: function () {
    return {
      links: [
        {
          name: 'App',
          href: 'https://mytiki.com',
        },
        {
          name: 'SDK',
          href: 'https://mytiki.com',
        },
        {
          name: 'Learn',
          href: 'https://blog.mytiki.com',
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
  position: fixed
  z-index: 99
  top: 0

.indexContent
  position: absolute
  z-index: 1
  top: 0
  left: 0
  width: 100%

@include for-phone
  .headerBar
    margin: 6.52% 8.72%
    left: 0
    right: 0

@include for-tablet
  .headerBar
    margin: 3.73% 12.67%
    left: 0
    right: 0

  .aboutCmp
    width: 75%
    margin: 20px auto 150px auto

  .involvedCmp
    margin-bottom: 150px
    margin-top: 100px
</style>
