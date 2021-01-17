<template>
  <div class="signup382Page">
    <div class="signup382PageStack">
      <header-money-cmp class="signup382HeaderCmp" />
      <how-beta-cmp class="signup382WorkCmp" />
      <social-share-cmp class="signup382ShareCmp" />
      <footer-cmp class="signup382FooterCmp" />
    </div>
    <form382-cmp class="signup382FormCmp" />
    <popup-privacy-cmp class="signup382PopupDataCmp" />
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
  name: 'Signup382382Billion',
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
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.signup382Page
  position: relative

.signup382PageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.signup382FormCmp
  position: absolute
  z-index: 2

.signup382PopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%

.signup382ShareCmp
  background: rgba($yellow-light, 0.10)

@include for-phone
  .signup382FormCmp
    width: 70%
    top: 140%
    left: 50%
    transform: translate(-50%, 140%)
    height: 65vw

  .signup382ShareCmp
    padding-top: 23vw

@include for-tablet
  .signup382FormCmp
    width: 50%
    top: 155%
    left: 50%
    transform: translate(-50%, 155%)
    height: 14.7vw

  .signup382ShareCmp
    padding-top: 14vw
</style>
