<template>
  <div class="page">
    <div class="stack">
      <home-header-cmp />
      <home-raffle-cmp />
      <home-signup-cmp id="signup" class="signupCmp" />
      <home-worth-cmp class="worthCmp" />
      <home-features-cmp />
      <div class="divider" />
      <home-signup-cmp class="signupCmp" />
      <home-believe-cmp class="believeCmp" />
      <home-follow-cmp />
      <utils-footer-cmp />
    </div>
    <home-timeline-cmp class="timelineCmp" />
    <home-beta-cmp class="betaCmp" />
    <home-privacy-cmp class="privacyCmp" />
    <home-cf-popup-cmp class="cfPopupCmp" />
    <home-cf-banner-cmp class="cfBannerCmp" />
  </div>
</template>

<script>
import HomeHeaderCmp from '../components/home/header/HomeHeaderCmp'
import HomeTimelineCmp from '../components/home/timeline/HomeTimelineCmp'
import HomeWorthCmp from '../components/home/worth/HomeWorthCmp'
import HomeFeaturesCmp from '../components/home/features/HomeFeaturesCmp'
import UtilsFooterCmp from '../components/utils/footer/UtilsFooterCmp'
import HomeSignupCmp from '../components/home/signup/HomeSignupCmp'
import HomeBelieveCmp from '../components/home/believe/HomeBelieveCmp'
import HomeBetaCmp from '../components/home/beta/HomeBetaCmp'
import HomeFollowCmp from '../components/home/follow/HomeFollowCmp'
import HomePrivacyCmp from '../components/home/privacy/HomePrivacyCmp'
import HomeRaffleCmp from '../components/home/raffle/HomeRaffleCmp'
import HomeCfPopupCmp from '../components/home/cf/HomeCfPopupCmp'
import HomeCfBannerCmp from '../components/home/cf/HomeCfBannerCmp'

export default {
  name: 'Index',
  components: {
    HomeCfBannerCmp,
    HomeCfPopupCmp,
    HomeRaffleCmp,
    HomePrivacyCmp,
    HomeFollowCmp,
    HomeBetaCmp,
    HomeFeaturesCmp,
    UtilsFooterCmp,
    HomeHeaderCmp,
    HomeTimelineCmp,
    HomeWorthCmp,
    HomeSignupCmp,
    HomeBelieveCmp,
  },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.page
  width: 100%
  position: relative

.stack
  position: absolute
  top: 0
  left: 0
  width: 100%
  z-index: 1

.timelineCmp
  position: absolute
  z-index: 2

.divider
  position: relative

.privacyCmp
  position: fixed
  z-index: 8

.cfPopupCmp, .cfBannerCmp
  position: fixed
  z-index: 9

@include for-phone
  .timelineCmp
    top: 825vw
    left: 50%
    transform: translate(-50%, 0)
    height: 210vw
    border-radius: 3vw

  .divider
    height: 210vw

  .worthCmp
    height: 135vw

  .believeCmp
    height: 110vw

  .betaCmp
    top: 1215vw
    left: 0

  .cfBannerCmp
    bottom: 10vw
    right: 5vw

@include for-tablet
  .timelineCmp
    top: 147vw
    left: 50%
    transform: translate(-50%, 0)
    height: 36vw
    border-radius: 0.5vw

  .divider
    height: 35vw

  .worthCmp
    height: 24vw

  .signupCmp
    height: 15.75vw

  .believeCmp
    height: 30vw

  .betaCmp
    top: 225vw
    left: 0

  .cfBannerCmp
    bottom: 3vw
    left: 2vw
</style>
