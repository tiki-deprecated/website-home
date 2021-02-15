<template>
  <div class="headerMissionCnt">
    <div class="headerMissionNav">
      <nuxt-link to="/">
        <utils-svg-cmp name="tiki/logo" class="headerMissionLogo" />
      </nuxt-link>
      <div class="headerMissionNavRight">
        <nuxt-link to="/meet" class="headerLinkMission">Our mission </nuxt-link>
        <div
          class="headerLinkFAQ"
          @click="
            faqClick(
              $event,
              'https://medium.com/mytiki/tiki-faqs-48c783972df1?source=friends_link&sk=2e2903eecb626bee96070739c16a474c'
            )
          "
        >
          FAQ
        </div>
        <nuxt-link
          v-scroll-to="{ el: '#signup' }"
          :to="{ path: '/', hash: 'signup' }"
          class="headerLinkSignup"
          >Sign up
        </nuxt-link>
      </div>
    </div>
    <div class="headerMissionTitleCnt">
      <utils-svg-cmp name="sketch/quote" class="headerMissionQuoteLeft" />
      <div class="headerMissionTitleText">Our mission</div>
      <utils-svg-cmp name="sketch/quote" class="headerMissionQuoteRight" />
    </div>
    <div class="headerMissionSubtitle">
      We’re building a fair, user-centric, decentralized system giving, you the
      users control of their data. It’s your data; you deserve the right to see,
      control, and monetize it. Your data does not belong to corporations, TIKI
      included! We build tools to protect users from exploitation, greed, and
      carelessness. We build tools to empower users.
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'HeaderMissionCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerMissionCnt
  background: $blue-light
  position: relative

::v-deep .headerMissionLogo.svg
  fill: $black-dark

.headerMissionNav
  display: flex
  align-items: center
  justify-content: space-between

.headerMissionNavRight
  display: flex
  align-items: center

.headerLinkMission, .headerLinkFAQ
  font-family: $font-family-montserrat
  text-decoration: none
  font-weight: 600

.headerLinkMission
  color: $pink

.headerLinkFAQ
  color: $black-dark
  cursor: pointer

.headerLinkSignup
  font-family: $font-family-montserrat
  color: $white
  text-decoration: none
  font-weight: 600
  background: $red

.headerLinkMission:hover, .headerLinkMission:visited, .headerLinkMission:link, .headerLinkMission:active, .headerLinkSignup:hover, .headerLinkSignup:visited, .headerLinkSignup:link, .headerLinkSignup:active, .headerLinkFAQ:hover, .headerLinkFAQ:visited, .headerLinkFAQ:link, .headerLinkFAQ:active
  text-decoration: none

.headerMissionTitleText
  font-family: $font-family-koara
  font-weight: bold
  color: $purple

.headerMissionQuoteLeft
  transform: rotate(23deg)

.headerMissionQuoteRight
  transform: rotate(130deg)

.headerMissionSubtitle
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple
  text-align: center

@include for-phone
  .headerMissionCnt
    padding: 4vw

  .headerLinkSignupNav
    font-size: 5vw

  ::v-deep .headerMissionLogo.svg
    height: 8vw

  .headerLinkSignup
    font-size: 4vw
    padding: 1.5vw 6vw
    border-radius: 2.5vw

  .headerLinkMission
    display: none

  .headerMissionCnt
    padding: 4vw 4vw 20vw 4vw

  .headerMissionQuoteLeft, .headerMissionQuoteRight
    height: 14vw
    margin-top: -20vw

  .headerMissionTitleText
    font-size: 8vw
    width: 28vw
    text-align: center

  .headerMissionTitleCnt
    margin: 20vw auto 5vw auto
    display: flex
    align-items: center
    width: fit-content

  .headerMissionSubtitle
    font-size: 4vw
    margin: 8vw auto 0 auto
    width: 75%

  .headerLinkFAQ
    font-size: 5vw
    margin-right: 4vw

@include for-tablet
  .headerMissionCnt
    height: 25vw
    padding: 1.5vw

  ::v-deep .headerMissionLogo.svg
    height: 2vw

  .headerLinkSignup
    font-size: 1vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw

  .headerLinkMission, .headerLinkFAQ
    font-size: 1vw
    margin-right: 2vw

  .headerMissionQuoteLeft, .headerMissionQuoteRight
    height: 3.5vw
    margin-top: -3.5vw

  .headerMissionTitleText
    font-size: 2.25vw

  .headerMissionTitleCnt
    margin: 6vw auto 3vw auto
    display: flex
    align-items: center
    width: fit-content

  .headerMissionSubtitle
    font-size: 1vw
    margin: 1.25vw auto 0 auto
    width: 50%
</style>
