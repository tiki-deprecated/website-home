<template>
  <div class="involved">
    <div class="involvedContainer">
      <div class="title">Get Involved</div>
      <div class="signup">
        <div class="cta">
          Subscribe to our substack (it’s free) to join our growing waitlist and
          get first access
        </div>
        <iframe
          src="https://mytiki.substack.com/embed"
          class="substack"
        ></iframe>
      </div>
      <div class="waitlist">
        Our 100k+ waitlist is a lot of data! Please be patient, we’re building
        as fast as we can :).<br /><br />
        Or tell some investors about us, maybe together we move even faster.
      </div>
      <div class="socials">
        <div class="socialRow">
          <a href="https://discord.com/invite/evjYQq48Be" target="_blank"
            ><utils-svg-cmp name="discord" class="social"
          /></a>
          <a href="https://www.facebook.com/mytikiapp" target="_blank"
            ><utils-svg-cmp name="facebook" class="social"
          /></a>
          <a href="https://twitter.com/my_tiki_" target="_blank"
            ><utils-svg-cmp name="twitter" class="social"
          /></a>
        </div>
        <div class="socialRow">
          <a href="https://www.linkedin.com/company/mytiki" target="_blank"
            ><utils-svg-cmp name="linkedin" class="social"
          /></a>
          <a href="https://www.instagram.com/my.tiki/" target="_blank"
            ><utils-svg-cmp name="instagram" class="social"
          /></a>
          <a href="https://www.tiktok.com/@my.tiki" target="_blank"
            ><utils-svg-cmp name="tiktok" class="social"
          /></a>
        </div>
      </div>
      <div class="hiring">Yes, We're Hiring!</div>
      <a class="hiringLink" href="" target="_blank">
        <span>
          <utils-svg-cmp name="arrow-right" class="arrow" />&nbsp;&nbsp;Mobile
          Developers</span
        ></a
      >
      <a class="hiringLink" href="" target="_blank">
        <span>
          <utils-svg-cmp name="arrow-right" class="arrow" />&nbsp;&nbsp;Data
          Engineers</span
        ></a
      >
      <a class="hiringLink" href="" target="_blank">
        <span>
          <utils-svg-cmp
            name="arrow-right"
            class="arrow"
          />&nbsp;&nbsp;Blockchain Engineers</span
        ></a
      >
      <a class="hiringLink" href="" target="_blank">
        <span>
          <utils-svg-cmp
            name="arrow-right"
            class="arrow"
          />&nbsp;&nbsp;Interns</span
        ></a
      >
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'InvolvedCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.involved
  width: 100%
  position: relative
  background-color: $gray-1

.involvedContainer
  background-color: $white

.title, .hiring
  font-family: $font-family-nunito-sans
  font-weight: 800

.title
  color: $green
  display: inline-block

.hiring
  color: $tiki-purple
  display: block

.hiringLink, .hiringLink:hover, .hiringLink:link, .hiringLink:visited, .hiringLink:active
  font-family: $font-family-nunito-sans
  color: $orange
  font-weight: bold
  text-transform: uppercase
  text-decoration: none
  display: block

::v-deep .arrow.svg
  fill: $orange
  display: inline-block

.waitlist
  font-family: $font-family-nunito-sans
  color: $gray-5
  font-weight: 600
  font-style: italic

.socialRow
  display: flex
  width: fit-content

.signup
  overflow: hidden

.substack
  border: none
  background: white

.cta
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  font-weight: 600

@include for-phone
  .involved
    padding: 3vh 0

  .involvedContainer
    width: 90%
    margin: 0 auto
    border-radius: 6vw
    padding-bottom: 3vh

  .title, .hiring
    font-size: 5.25vw
    margin: 3vh auto 0 5vw

  .hiringLink
    margin: 2vh 5vw 0 10vw
    font-size: 4.25vw

  ::v-deep .arrow.svg
    height: 3.5vw

  .waitlist
    font-size: 4.25vw
    margin: 2vh 5vw 0 5vw

  .socials
    margin: 4vh auto

  .socialRow
    margin: 0 auto

  ::v-deep .social.svg
    height: 4vh
    margin: 2vh 4vw

  .substack
    width: 100%

  .cta
    font-size: 4.25vw
    margin: 2vh 5vw 0 5vw
@include for-tablet
</style>
