<template>
  <div class="page">
    Hello World
    <utils-footer-cmp />
  </div>
</template>

<script>
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'

export default {
  name: 'Insights',
  components: {
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
