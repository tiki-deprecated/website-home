<template>
  <div class="page">
    <company-info-cmp />
    <think-spotify-cmp />
    <utils-footer-cmp />
  </div>
</template>

<script>
import ThinkSpotifyCmp from '../components/insights/ThinkSpotifyCmp'
import CompanyInfoCmp from '../components/insights/CompanyInfoCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'

export default {
  name: 'InsightsCmp',
  components: {
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
