<template>
  <div class="page">
    <tweet-us-cmp />
    <company-info-cmp />
    <think-spotify-cmp />
    <utils-footer-cmp />
  </div>
</template>

<script>
import ThinkSpotifyCmp from '../components/insights/ThinkSpotifyCmp'
import CompanyInfoCmp from '../components/insights/CompanyInfoCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'
import TweetUsCmp from '../components/insights/TweetUsCmp.vue'

export default {
  name: 'InsightsCmp',
  components: {
    TweetUsCmp,
    ThinkSpotifyCmp,
    CompanyInfoCmp,
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
