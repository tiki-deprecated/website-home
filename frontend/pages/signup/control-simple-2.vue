<template>
  <div class="controlSimple2Page">
    <div class="controlSimple2PageStack">
      <div class="controlSimple2PageWrapper">
        <header-simple-cmp
          class="headerSimpleCmp"
          heading="We're building a way for you to **take back control** of your data."
        />
        <form-simple-cmp class="formSimpleCmp" cta="Count me in" />
        <notified-cmp class="notifiedCmp" />
      </div>
      <footer-cmp class="footerCmp" />
    </div>
    <popup-privacy-cmp class="controlSimple2PopupDataCmp" />
  </div>
</template>

<script>
import HeaderSimpleCmp from '@/components/header_simple/HeaderSimpleCmp'
import FormSimpleCmp from '@/components/form_simple/FormSimpleCmp'
import NotifiedCmp from '@/components/notified/NotifiedCmp'
import FooterCmp from '@/components/footer/FooterCmp'

export default {
  name: 'ControlSimple2',
  components: { HeaderSimpleCmp, FormSimpleCmp, NotifiedCmp, FooterCmp },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
.controlSimple2Page
  position: relative

.controlSimple2PageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.controlSimple2PageWrapper
  position: relative
  display: flex
  flex-direction: column
  min-height: 100vh

.controlSimple2PopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%
</style>
