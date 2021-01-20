<template>
  <div class="footerCnt">
    <div class="footerCol footerCol1">
      <utils-svg-cmp name="tiki/logo" class="footerLogo" />
      <div class="footerText">
        © 2021 TIKI Inc.&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<nuxt-link
          to="/"
          class="footerLink siteLink"
          >mytiki.com</nuxt-link
        >
      </div>
    </div>
    <div class="footerCol footerCol2">
      <div class="footerSection">Information</div>
      <nuxt-link to="/privacy" class="footerLink footerSectionContent"
        >Privacy Policy</nuxt-link
      >
      <div class="footerLink footerSectionContent" @click="githubClick">
        Github
      </div>
    </div>
    <div class="footerCol footerCol3">
      <div class="footerSection">Contact us</div>
      <a href="mailto:hello@mytiki.com" class="footerLink footerSectionContent"
        >hello@mytiki.com</a
      >
      <div class="footerText footerSectionContent">+1 401-229-4336</div>
    </div>
    <div class="footerCol footerCol4">
      <div class="footerSection">Follow us</div>
      <div class="footerFollowButtons">
        <div
          @click="
            socialClick($event, 'https://twitter.com/my_tiki_', 'Twitter')
          "
        >
          <utils-svg-cmp name="icon/twitter" class="footerFollowButton" />
        </div>
        <div
          @click="
            socialClick($event, 'https://www.tiktok.com/@my.tiki', 'TikTok')
          "
        >
          <utils-svg-cmp name="icon/tiktok" class="footerFollowButton" />
        </div>
        <div
          @click="
            socialClick(
              $event,
              'https://www.facebook.com/mytikiapp',
              'Facebook'
            )
          "
        >
          <utils-svg-cmp name="icon/facebook" class="footerFollowButton" />
        </div>
        <div
          @click="
            socialClick(
              $event,
              'https://www.instagram.com/my.tiki/',
              'Instagram'
            )
          "
        >
          <utils-svg-cmp name="icon/instagram" class="footerFollowButton" />
        </div>
        <div
          @click="
            socialClick(
              $event,
              'https://www.linkedin.com/company/mytiki',
              'LinkedIn'
            )
          "
        >
          <utils-svg-cmp name="icon/linkedin" class="footerFollowButton" />
        </div>
        <div
          @click="socialClick($event, 'https://medium.com/mytiki', 'Medium')"
        >
          <utils-svg-cmp name="icon/medium" class="footerFollowButton" />
        </div>
        <div
          @click="
            socialClick($event, 'https://discord.gg/evjYQq48Be', 'Discord')
          "
        >
          <utils-svg-cmp name="icon/discord" class="footerFollowButton" />
        </div>
        <div
          @click="
            socialClick(
              $event,
              'https://t.me/joinchat/Ud15PQBiW4eTWJR3',
              'Telegram'
            )
          "
        >
          <utils-svg-cmp name="icon/telegram" class="footerFollowButton" />
        </div>
        <div
          @click="
            socialClick(
              $event,
              'https://signal.group/#CjQKIA66Eq2VHecpcCd-cu-dziozMRSH3EuQdcZJNyMOYNi5EhC0coWtjWzKQ1dDKEjMqhkP',
              'Signal'
            )
          "
        >
          <utils-svg-cmp name="icon/signal" class="footerFollowButton" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'

export default {
  name: 'FooterCmp',
  components: { UtilsSvgCmp },
  methods: {
    socialClick(clickEvent, href, platform) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Follow', {
        props: { location: 'Footer', platform },
      })
      const win = window.open(href, '_blank')
      win.focus()
    },
    githubClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Github', {
        props: { location: 'How?' },
      })
      const win = window.open('https://github.com/tiki', '_blank')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.footerCnt
  background: $blue-dark
  display: flex
  align-items: flex-start
  justify-content: center
  flex-wrap: wrap

.footerText
  font-family: $font-family-montserrat
  color: $gray-xlight
  margin: 0 auto
  font-weight : 300

.footerLink, .footerLink:hover, .footerLink:link, .footerLink:visited, .footerLink:active
  font-family: $font-family-montserrat
  text-decoration: none
  color: $gray-xlight
  font-weight: 300
  cursor: pointer

.footerSection
  font-family: $font-family-montserrat
  color: $gray-xlight
  font-weight: 500

.footerSectionContent
  display: block

.footerText .siteLink
  font-weight: 500

::v-deep .footerLogo.svg
  fill: $white

::v-deep .footerFollowButton.svg
  fill: $yellow-light
  cursor: pointer

.footerFollowButtons
  display: flex
  align-items: center
  flex-wrap: wrap

@include for-phone
  .footerText, .footerLink, .footerSection
    font-size: 3vw

  .footerCnt
    height: 57vw

  .footerCol
    margin-top: 5vw
    text-align: center

  .footerCol1, .footerCol4
    width: 100%
    justify-content: space-between

  .footerCol2, .footerCol3
    width: 50%

  .footerCol4
    margin-bottom: 5vw

  .footerLogo
    margin: 0 auto 2vw auto

  .footerSectionContent
    margin: 0.25vw 0

  .footerSection
    margin-bottom: 0.25vw

  ::v-deep .footerLogo.svg
    height: 8vw

  ::v-deep .footerFollowButton.svg
    height: 4vw

  .footerFollowButton
    margin: 2vw 2vw 0 2vw

  .footerFollowButtons
    justify-content: center

@include for-tablet
  .footerText, .footerLink, .footerSection
    font-size: 0.9vw

  .footerCnt
    height: 7vw

  .footerCol
    margin-top: 1.5vw

  .footerCol1
    width: 35%

  .footerCol2, .footerCol3, .footerCol4
    width: 15%

  .footerLogo
    margin-bottom: 1vw

  .footerSectionContent
    margin: 0.25vw 0

  .footerSection
    margin-bottom: 0.25vw

  ::v-deep .footerLogo.svg
    height: 2vw

  ::v-deep .footerFollowButton.svg
    height: 1vw

  .footerFollowButton
    margin-right: 1vw
    margin-top: 0.5vw
</style>
