<template>
  <div class="signupPage">
    <div class="signupPageStack">
      <header-money-cmp class="signupHeaderCmp" />
      <how-beta-cmp class="signupWorkCmp" />
      <social-share-cmp class="signupShareCmp" />
      <footer-cmp class="signupFooterCmp" />
    </div>
    <form382-cmp class="signupSignupCmp" />
    <popup-privacy-cmp class="signupPopupDataCmp" />
  </div>
</template>

<script>
import HeaderMoneyCmp from '@/components/header_money/HeaderMoneyCmp'
import HowBetaCmp from '@/components/how_beta/HowBetaCmp'
import SocialShareCmp from '@/components/social/SocialShareCmp'
import Form382Cmp from '@/components/form_382/Form382Cmp'
import FooterCmp from '@/components/footer/FooterCmp'
import PopupPrivacyCmp from '@/components/popup/PopupPrivacyCmp'

export default {
  name: 'Signup382Billion',
  components: {
    FooterCmp,
    Form382Cmp,
    SocialShareCmp,
    HowBetaCmp,
    HeaderMoneyCmp,
    PopupPrivacyCmp,
  },
  mounted() {
    this.$plausible.trackPageview()
    console.log('query code is ' + this.$nuxt.$route.query.code)
    this.$store.commit('form_382/setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.signupPage
  position: relative

.signupPageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.signupSignupCmp
  position: absolute
  z-index: 2

.signupPopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%

@include for-phone
  .signupSignupCmp
    width: 70%
    top: 140%
    left: 50%
    transform: translate(-50%, 140%)
    height: 65vw

@include for-tablet
  .signupSignupCmp
    width: 50%
    top: 155%
    left: 50%
    transform: translate(-50%, 155%)
    height: 14.7vw
</style>
