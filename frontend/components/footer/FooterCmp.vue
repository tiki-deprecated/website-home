<template>
  <div class="footerCnt">
    <div class="footerText">
      <nuxt-link to="/" class="footerLink"
        >© 2020 TIKI Inc.&nbsp;&nbsp;</nuxt-link
      >|
      <nuxt-link to="/privacy" class="footerLink"
        >&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;</nuxt-link
      >|
      <a href="https://github.com/tiki" target="_blank" class="footerLink"
        >&nbsp;&nbsp;Github</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCmp',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.footerCnt
  background: $blue-dark
  display: flex
  align-items: center

.footerText
  font-family: $font-family-montserrat
  color: $white
  margin: 0 auto

.footerLink, .footerLink:hover, .footerLink:link, .footerLink:visited, .footerLink:active
  text-decoration: none
  color: $white

@include for-phone
  .footerCnt
    height: 8vw

  .footerText
    font-size: 4vw

@include for-tablet
  .footerCnt
    height: 2vw

  .footerText
    font-size: 1vw
</style>
