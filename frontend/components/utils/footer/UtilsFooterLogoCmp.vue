<template>
  <div>
    <utils-svg-cmp name="utils/logo" class="logo" />
    <div class="text">
      © 2021 TIKI Inc.&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<nuxt-link
        to="/"
        class="link siteLink"
        >mytiki.com</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../UtilsSvgCmp'

export default {
  name: 'UtilsFooterLogoCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.text
  font-family: $font-family-montserrat
  color: $gray-xlight
  margin: 0 auto
  font-weight : 300

.link, .link:hover, .link:link, .link:visited, .link:active
  font-family: $font-family-montserrat
  text-decoration: none
  color: $gray-xlight
  font-weight: 300
  cursor: pointer

.text .siteLink
  font-weight: 500

::v-deep .logo.svg
  fill: $white

@include for-phone
  .text, .link
    font-size: 3vw

  .logo
    margin: 0 auto 2vw auto

  ::v-deep .logo.svg
    height: 8vw

@include for-tablet
  .text, .link
    font-size: 0.9vw

  .logo
    margin-bottom: 1vw

  ::v-deep .logo.svg
    height: 2vw
</style>
