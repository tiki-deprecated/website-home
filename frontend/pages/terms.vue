<template>
  <div class="terms">
    <div class="copy">
      <nuxt-content :document="page" />
    </div>
    <utils-footer-cmp />
  </div>
</template>

<script>
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'
export default {
  name: 'TermsPage',
  components: { UtilsFooterCmp },
  async asyncData({ $content }) {
    const page = await $content('terms').fetch()
    return {
      page,
    }
  },
}
</script>

<style lang="sass">
h1
  font-family: $font-family-koara
  font-weight: lighter

a, a:hover, a:link, a:visited, a:active
  color: $orange
</style>

<style scoped lang="sass">
@import "assets/styles/mixins"

.copy
  font-family: $font-family-nunito-sans
  color: $tiki-blue

@include for-phone
  .copy
    padding: 2vh 5vw

@include for-tablet
</style>
