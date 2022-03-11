<template>
  <div class="page">
    <div class="hero-cmp"><hero-cmp /></div>
    <div class="features-cmp"><features-cmp /></div>

    <hr class="desktop-divider" />

    <div class="info-cmp"><company-info-cmp /></div>
    <div class="apply-cmp"><apply-for-access-cmp /></div>
    <div><tweet-us-cmp /></div>
    <div><in-the-news-cmp /></div>
    <div><utils-footer-cmp /></div>
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

.desktop-divider
  visibility: hidden
  height: 0
  margin: 0 0
  border: 0

@include for-tablet
  .hero-cmp
    width: 30vw
    height: 100vh
    float: left

  .features-cmp
    width: 60vw

  .info-cmp
    margin-left: 5vw
    margin-right: 3vw
    width: 42vw
    display: inline-block

  .apply-cmp
    margin-left: 3vw
    width: 42vw
    display: inline-block
    vertical-align: top

  .desktop-divider
    visibility: hidden
    padding-top: 10vh
    border-bottom: 1px solid $gray-4
    width: 80%
    margin-left: 10%
</style>
