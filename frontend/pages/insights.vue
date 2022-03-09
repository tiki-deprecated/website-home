<template>
  <div class="page">
    <hero-cmp />
    <features-cmp />
    <company-info-cmp />
    <utils-footer-cmp />
  </div>
</template>

<script>
import FeaturesCmp from '../components/insights/FeaturesCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'
import HeroCmp from '../components/insights/HeroCmp'
import CompanyInfoCmp from '../components/insights/CompanyInfoCmp'

export default {
  name: 'InsightsPage',
  components: {
    HeroCmp,
    FeaturesCmp,
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
