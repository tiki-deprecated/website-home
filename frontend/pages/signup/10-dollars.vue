<template>
  <div class="signup10Page">
    <div class="signup10PageStack">
      <header10-cmp class="signup10Header10Cmp" />
      <launch-tip-cmp class="signup10launchTipCmp" />
      <faq-cmp class="signup10FaqCmp" />
      <footer-cmp class="signup10FooterCmp" />
    </div>
    <form10-cmp class="signup10FormCmp" />
    <popup-privacy-cmp class="signup10PopupDataCmp" />
  </div>
</template>

<script>
import Header10Cmp from '@/components/header_10/Header10Cmp'
import LaunchTipCmp from '@/components/launch_tip/LaunchTipCmp'
import FaqCmp from '@/components/faq/FaqCmp'
import FooterCmp from '@/components/footer/FooterCmp'
import Form10Cmp from '@/components/form_10/Form10Cmp'
import PopupPrivacyCmp from '@/components/popup/PopupPrivacyCmp'

export default {
  name: 'Signup10Dollars',
  components: {
    Header10Cmp,
    LaunchTipCmp,
    FaqCmp,
    FooterCmp,
    Form10Cmp,
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

.signup10Page
  position: relative

.signup10PageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.signup10FormCmp
  position: absolute
  z-index: 2

.signup10PopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%

@include for-phone
  .signup10FormCmp
    width: 70%
    top: 45vw
    left: 50%
    transform: translate(-50%, 0)
    height: 57vw

@include for-tablet
  .signup10FormCmp
    width: 50%
    top: 13vw
    left: 50%
    transform: translate(-50%, 0)
    height: 13vw
</style>
