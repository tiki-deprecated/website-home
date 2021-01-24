<template>
  <div class="indexPage">
    <div class="indexPageStack">
      <header-home-cmp class="headerHomeCmp" />
      <div class="whyDivider"></div>
      <why-cmp class="whyCmp" />
      <you-can-cmp class="youCanCmp" />
      <form-home-cmp id="signup" class="formHomeCmp" />
      <believe-cmp class="believeCmp" />
      <social-follow-cmp class="socialFollowCmp" />
      <footer-cmp class="footerCmp" />
    </div>
    <timeline-cmp class="timelineCmp" />
    <how-beta-cmp-launch class="howBetaCmpLaunch" />
    <popup-privacy-cmp class="mnyPopupDataCmp" />
  </div>
</template>

<script>
import HowBetaCmpLaunch from '~/components/how_beta/HowBetaCmpLaunch'
import HeaderHomeCmp from '~/components/header_home/HeaderHomeCmp'
import WhyCmp from '~/components/why/WhyCmp'
import YouCanCmp from '~/components/you_can/YouCanCmp'
import FormHomeCmp from '~/components/form_home/FormHomeCmp'
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
    FormHomeCmp,
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

.timelineCmp
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
    height: 192vw

  .whyCmp
    height: 135vw

  .timelineCmp
    top: 120vw
    left: 50%
    transform: translate(-50%, 0)
    height: 210vw
    border-radius: 3vw

  .believeCmp
    height: 110vw

  .howBetaCmpLaunch
    top: 972vw
    left: 0

@include for-tablet
  .whyDivider
    height: 35vw

  .whyCmp
    height: 24vw

  .timelineCmp
    top: 22vw
    left: 50%
    transform: translate(-50%, 0)
    height: 36vw
    border-radius: 0.5vw

  .formHomeCmp
    height: 15.75vw

  .believeCmp
    height: 30vw

  .howBetaCmpLaunch
    top: 167vw
    left: 0
</style>
