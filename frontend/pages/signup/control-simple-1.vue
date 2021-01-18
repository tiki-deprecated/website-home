<template>
  <div class="controlSimple1Page">
    <div class="controlSimple1PageStack">
      <div class="controlSimple1PageWrapper">
        <header-simple-cmp
          class="headerSimpleCmp"
          heading="Take back control of your data, with **a single app**."
        />
        <form-simple-cmp class="formSimpleCmp" />
        <notified-cmp class="notifiedCmp" />
        <social-share-cmp class="controlSimple1Share" />
      </div>
      <footer-cmp class="footerCmp" />
    </div>
    <popup-privacy-cmp class="controlSimple1PopupDataCmp" />
  </div>
</template>

<script>
import HeaderSimpleCmp from '@/components/header_simple/HeaderSimpleCmp'
import FormSimpleCmp from '@/components/form_simple/FormSimpleCmp'
import NotifiedCmp from '@/components/notified/NotifiedCmp'
import FooterCmp from '@/components/footer/FooterCmp'

export default {
  name: 'ControlSimple1',
  components: { HeaderSimpleCmp, FormSimpleCmp, NotifiedCmp, FooterCmp },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.controlSimple1Page
  position: relative

.controlSimple1PageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.controlSimple1PageWrapper
  position: relative
  display: flex
  flex-direction: column
  min-height: 100vh

.controlSimple1PopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%

@include for-phone
  .controlSimple1Share
    margin-top: 5vh

@include for-tablet
  .controlSimple1Share
    margin-top: -12vw
</style>
