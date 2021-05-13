<template>
  <div class="page">
    <div class="stack">
      <home-header-cmp />
      <div class="divider" />
      <home-worth-cmp class="worthCmp" />
      <home-features-cmp />
      <home-signup-cmp id="signup" class="signupCmp" />
      <home-believe-cmp class="believeCmp" />
      <home-follow-cmp />
      <utils-footer-cmp />
    </div>
    <home-timeline-cmp class="timelineCmp" />
    <home-beta-cmp class="betaCmp" />
    <home-privacy-cmp class="privacyCmp" />
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

export default {
  name: 'Index',
  components: {
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
  z-index: 9

@include for-phone
  .timelineCmp
    top: 120vw
    left: 50%
    transform: translate(-50%, 0)
    height: 210vw
    border-radius: 3vw

  .divider
    height: 192vw

  .worthCmp
    height: 135vw

  .believeCmp
    height: 110vw

  .betaCmp
    top: 972vw
    left: 0
@include for-tablet
  .timelineCmp
    top: 27vw
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
    top: 169vw
    left: 0
</style>
