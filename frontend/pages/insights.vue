<template>
  <div class="page">
    <hero-cmp />
    <features-cmp />
    <apply-for-access-cmp />
    <company-info-cmp />
    <tweet-us-cmp />
    <in-the-news-cmp />
    <utils-footer-cmp />
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
</style>
