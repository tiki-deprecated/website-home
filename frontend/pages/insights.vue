<template>
  <div class="page">
    <hero-cmp />
    <features-cmp />
    <utils-footer-cmp />
  </div>
</template>

<script>
import FeaturesCmp from '../components/insights/FeaturesCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'
import HeroCmp from '../components/insights/HeroCmp'

export default {
  name: 'InsightsPage',
  components: {
    HeroCmp,
    FeaturesCmp,
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
