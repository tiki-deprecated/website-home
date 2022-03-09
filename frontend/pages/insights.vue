<template>
  <div class="page">
    <hero-cmp />
    <apply-for-access />
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
import ApplyForAccess from '../components/insights/ApplyForAccess'

export default {
  name: 'InsightsPage',
  components: {
    HeroCmp,
    ApplyForAccess,
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
