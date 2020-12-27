<template>
  <div class="signup10Page">
    <header10-cmp class="signup10Header10Cmp" />
    <launch-tip-cmp class="signup10launchTipCmp" />
    <faq-cmp class="signup10FaqCmp" />
    <footer-cmp class="signup10FooterCmp" />
  </div>
</template>

<script>
import Header10Cmp from '@/components/header_10/Header10Cmp'
import LaunchTipCmp from '@/components/launch_tip/LaunchTipCmp'
import FaqCmp from '@/components/faq/FaqCmp'
import FooterCmp from '@/components/footer/FooterCmp'

export default {
  name: 'Signup10Dollars',
  components: { Header10Cmp, LaunchTipCmp, FaqCmp, FooterCmp },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
.signup10Page
  width: 100%

.signup10Header10Cmp
  width: 100%
  position: relative
</style>
