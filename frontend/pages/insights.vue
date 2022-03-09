<template>
  <div class="page">
    <hero-cmp />
    <think-spotify-cmp />
    <utils-footer-cmp />
  </div>
</template>

<script>
import ThinkSpotifyCmp from '../components/insights/ThinkSpotifyCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'
import HeroCmp from '../components/insights/HeroCmp'

export default {
  name: 'Insights',
  components: {
    HeroCmp,
    ThinkSpotifyCmp,
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
