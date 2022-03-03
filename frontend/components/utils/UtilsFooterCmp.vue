<template>
  <div class="footer">
    <a class="email" href="mailto:hello@mytiki.com">hello@mytiki.com</a>
    <div class="socials">
      <a href="https://discord.com/invite/evjYQq48Be" target="_blank"
        ><utils-svg-cmp name="discord-mono" class="social"
      /></a>
      <a href="https://www.facebook.com/mytikiapp" target="_blank"
        ><utils-svg-cmp name="facebook-mono" class="social"
      /></a>
      <a href="https://twitter.com/my_tiki_" target="_blank"
        ><utils-svg-cmp name="twitter-mono" class="social"
      /></a>
      <a href="https://www.linkedin.com/company/mytiki" target="_blank"
        ><utils-svg-cmp name="linkedin-mono" class="social"
      /></a>
      <a href="https://www.instagram.com/my.tiki/" target="_blank"
        ><utils-svg-cmp name="instagram-mono" class="social"
      /></a>
      <a href="https://www.tiktok.com/@my.tiki" target="_blank"
        ><utils-svg-cmp name="tiktok-mono" class="social"
      /></a>
    </div>
    <div class="sitemap">
      <a href="https://mytiki.com/privacy" class="link">Privacy Notice</a
      >&nbsp;|&nbsp;<a href="https://blog.mytiki.com" class="link">Blog</a
      >&nbsp;|&nbsp;<a href="https://discord.com/invite/evjYQq48Be" class="link"
        >Community</a
      >&nbsp;|&nbsp;<a href="https://github.com/tiki" class="link">Github</a
      >&nbsp;|&nbsp;<a href="" class="link">Team & Investors</a>&nbsp;|&nbsp;<a
        href=""
        class="link"
        >Roadmap</a
      >&nbsp;|&nbsp;<a href="https://feedback.mytiki.com" class="link"
        >Feedback</a
      >&nbsp;|&nbsp;<a href="" class="link">Job Openings</a>
    </div>
    <div class="copyright">Copyright © 2022 Tiki inc.</div>
  </div>
</template>

<script>
import UtilsSvgCmp from './UtilsSvgCmp'
export default {
  name: 'UtilsFooterCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.footer
  background: $tiki-blue

.email, .email:hover, .email:link, .email:visited, .email:active
  color: $yellow
  text-decoration: none
  font-family: $font-family-nunito-sans
  font-weight: normal
  display: inline-block

.socials
  display: flex

::v-deep .social.svg
  fill: $yellow

.sitemap
  color: $white
  font-family: $font-family-nunito-sans
  font-weight: normal
  display: flex
  flex-wrap: wrap

.link, .link:hover, .link:link, .link:visited, .link:active
  color: $yellow
  text-decoration: none
  font-weight: normal

.copyright
  color: $white
  font-family: $font-family-nunito-sans
  font-weight: normal
  display: inline-block

@include for-phone
  .email
    font-size: 4vw
    margin: 3vh 5vw 0 5vw

  .socials
    margin: 2vh 3vw 0 3vw

  ::v-deep .social.svg
    height: 3vh
    margin: 0 2vw

  .sitemap
    margin: 2vh 5vw 0 5vw
    font-size: 4vw

  .copyright
    font-size: 4vw
    margin: 2vh 5vw

@include for-tablet
  .email
    font-size: 1vw
    margin: 3vh 0 0 0
    text-align: center
    width: 100%

  .socials
    margin: 2vh 0 0 0
    justify-content: center
    width: 100%

  ::v-deep .social.svg
    height: 3vh
    margin: 0 1vw

  .sitemap
    margin: 2vh 0 0 0
    width: 100%
    font-size: 1vw
    justify-content: center

  .copyright
    font-size: 1vw
    margin: 2vh 0
    text-align: center
    width: 100%
</style>
