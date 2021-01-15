<template>
  <div class="controlSimple5Page">
    <div class="controlSimple5PageStack">
      <div class="controlSimple5PageWrapper">
        <header-simple-cmp
          class="headerSimpleCmp"
          heading="We need your help. **Sign up**. With enough of us, we can take back control."
        />
        <form-simple-cmp class="formSimpleCmp" cta="I want the TIKI app" />
        <notified-cmp class="notifiedCmp" />
      </div>
      <footer-cmp class="footerCmp" />
    </div>
    <popup-privacy-cmp class="controlSimple5PopupDataCmp" />
  </div>
</template>

<script>
import HeaderSimpleCmp from '@/components/header_simple/HeaderSimpleCmp'
import FormSimpleCmp from '@/components/form_simple/FormSimpleCmp'
import NotifiedCmp from '@/components/notified/NotifiedCmp'
import FooterCmp from '@/components/footer/FooterCmp'

export default {
  name: 'ControlSimple5',
  components: { HeaderSimpleCmp, FormSimpleCmp, NotifiedCmp, FooterCmp },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
.controlSimple5Page
  position: relative

.controlSimple5PageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.controlSimple5PageWrapper
  position: relative
  display: flex
  flex-direction: column
  min-height: 100vh

.controlSimple5PopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%
</style>
