<template>
  <div class="controlSimple3Page">
    <div class="controlSimple3PageStack">
      <div class="controlSimple3PageWrapper">
        <header-simple-cmp
          class="headerSimpleCmp"
          heading="If we work together, we can all **take back control** of our data."
        />
        <form-simple-cmp class="formSimpleCmp" cta="I'm in. We can do this." />
        <notified-cmp class="notifiedCmp" />
      </div>
      <footer-cmp class="footerCmp" />
    </div>
    <popup-privacy-cmp class="controlSimple3PopupDataCmp" />
  </div>
</template>

<script>
import HeaderSimpleCmp from '@/components/header_simple/HeaderSimpleCmp'
import FormSimpleCmp from '@/components/form_simple/FormSimpleCmp'
import NotifiedCmp from '@/components/notified/NotifiedCmp'
import FooterCmp from '@/components/footer/FooterCmp'

export default {
  name: 'ControlSimple3',
  components: { HeaderSimpleCmp, FormSimpleCmp, NotifiedCmp, FooterCmp },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
.controlSimple3Page
  position: relative

.controlSimple3PageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.controlSimple3PageWrapper
  position: relative
  display: flex
  flex-direction: column
  min-height: 100vh

.controlSimple3PopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%
</style>
