<template>
  <div>
    <div class="section">Contact us</div>
    <a href="mailto:hello@mytiki.com" class="link content">hello@mytiki.com</a>
    <div class="text content">+1 401-229-4336</div>
  </div>
</template>

<script>
export default {
  name: 'UtilsFooterContactCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.text, .text:hover, .text:link, .text:visited, .text:active
  font-family: $font-family-montserrat
  color: $gray-xlight
  margin: 0 auto
  font-weight : 300
  text-decoration: none

.link, .link:hover, .link:link, .link:visited, .link:active
  font-family: $font-family-montserrat
  text-decoration: none
  color: $gray-xlight
  font-weight: 300
  cursor: pointer

.section
  font-family: $font-family-montserrat
  color: $gray-xlight
  font-weight: 500

.content
  display: block

.text .siteLink
  font-weight: 500

@include for-phone
  .text, .link, .section
    font-size: 3vw

  .content
    margin: 0.25vw 0

  .section
    margin-bottom: 0.25vw

@include for-tablet
  .text, .link, .section
    font-size: 0.9vw

  .content
    margin: 0.25vw 0

  .section
    margin-bottom: 0.25vw
</style>
