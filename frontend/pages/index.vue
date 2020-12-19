<template>
  <div class="indexPage">
    <div class="indexPageStack">
      <header-home-cmp class="headerHomeCmp" />
      <div class="whyDivider"></div>
      <you-can-cmp class="youCanCmp" />
      <form-signup-cmp id="signup" class="formSignupCmp" />
      <believe-cmp class="believeCmp" />
      <social-follow-cmp class="socialFollowCmp" />
      <footer-cmp class="footerCmp" />
    </div>
    <why-cmp class="whyCmp" />
    <how-beta-cmp-launch class="howBetaCmpLaunch" />
    <popup-privacy-cmp class="mnyPopupDataCmp" />
  </div>
</template>

<script>
import HowBetaCmpLaunch from '~/components/how_beta/HowBetaCmpLaunch'
import HeaderHomeCmp from '~/components/header_home/HeaderHomeCmp'
import WhyCmp from '~/components/why/WhyCmp'
import YouCanCmp from '~/components/you_can/YouCanCmp'
import FormSignupCmp from '~/components/form_signup/FormSignupCmp'
import BelieveCmp from '~/components/believe/BelieveCmp'
import FooterCmp from '~/components/footer/FooterCmp'
import PopupPrivacyCmp from '~/components/popup/PopupPrivacyCmp'
import SocialFollowCmp from '~/components/social/SocialFollowCmp'

export default {
  name: 'Index',
  components: {
    HeaderHomeCmp,
    WhyCmp,
    YouCanCmp,
    FormSignupCmp,
    BelieveCmp,
    FooterCmp,
    PopupPrivacyCmp,
    HowBetaCmpLaunch,
    SocialFollowCmp,
  },
  mounted() {
    this.$plausible.trackPageview()
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.indexPage
  width: 100%
  position: relative

.indexPageStack
  position: absolute
  top: 0
  left: 0
  width: 100%
  z-index: 1

.whyCmp
  position: absolute
  z-index: 2

.mnyPopupDataCmp
  position: fixed
  z-index: 9

.howBetaCmpLaunch
  position: absolute
  z-index: 3

.whyDivider
  position: relative

@include for-phone
  .whyDivider
    height: 100vw

  .whyCmp
    top: 109vw
    left: 50%
    transform: translate(-50%, 0)
    height: 130vw

  .believeCmp
    height: 110vw

  .howBetaCmpLaunch
    top: 595vw
    left: 0

@include for-tablet
  .whyDivider
    height: 22vw

  .whyCmp
    top: 22vw
    left: 50%
    transform: translate(-50%, 0)
    height: 18vw

  .formSignupCmp
    height: 15.75vw

  .believeCmp
    height: 30vw

  .howBetaCmpLaunch
    top: 120vw
    left: 0
</style>
