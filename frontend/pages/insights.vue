<template>
  <div class="page">
    <div class="content">
      <div class="wrapper">
        <div class="leftContent">
          <div class="hero-cmp"><hero-cmp /></div>
        </div>
        <div class="rightContent">
          <div class="features-cmp"><features-cmp /></div>
          <div class="info-cmp"><company-info-cmp /></div>
          <div class="apply-cmp"><apply-for-access-cmp /></div>
          <div><tweet-us-cmp /></div>
          <div><in-the-news-cmp /></div>
          <div><utils-footer-cmp /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturesCmp from '../components/insights/FeaturesCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'
import HeroCmp from '../components/insights/HeroCmp'
import CompanyInfoCmp from '../components/insights/CompanyInfoCmp'
import TweetUsCmp from '../components/insights/TweetUsCmp'
import InTheNewsCmp from '../components/insights/InTheNewsCmp'
import ApplyForAccessCmp from '../components/insights/ApplyForAccess'

export default {
  name: 'InsightsPage',
  components: {
    InTheNewsCmp,
    HeroCmp,
    FeaturesCmp,
    CompanyInfoCmp,
    TweetUsCmp,
    ApplyForAccessCmp,
    UtilsFooterCmp,
  },
  mounted() {
    this.$plausible.trackPageview()
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.page
  width: 100%
  position: relative
  display: inline-block
  background-color: $gray-1

@include for-tablet
  .page
    height: 100vh

  .content
    position: relative
    height: 100%
    overflow: hidden

  .wrapper
    position: absolute
    width: 100%
    height: 100%

  .rightContent
    overflow: auto
    height: 100%

  .leftContent
    float: left
    width: (100vh * 0.666)
</style>

<style lang="sass">
@import "assets/styles/mixins"

@include for-tablet
  body
    height: 100vh

  #__nuxt
    height: 100%

  #__layout
    height: 100%
</style>
