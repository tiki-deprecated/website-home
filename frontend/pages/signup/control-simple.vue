<template>
  <div class="controlSimplePage">
    <div class="controlSimplePageStack">
      <div class="controlSimplePageWrapper">
        <header-simple-cmp
          class="headerSimpleCmp"
          heading="Take back control of your data, with **a single app**."
        />
        <form-simple-cmp class="formSimpleCmp" />
        <notified-cmp class="notifiedCmp" />
      </div>
      <footer-cmp class="footerCmp" />
    </div>
    <popup-privacy-cmp class="controlSimplePopupDataCmp" />
  </div>
</template>

<script>
import HeaderSimpleCmp from '@/components/header_simple/HeaderSimpleCmp'
import FormSimpleCmp from '@/components/form_simple/FormSimpleCmp'
import NotifiedCmp from '@/components/notified/NotifiedCmp'
import FooterCmp from '@/components/footer/FooterCmp'

export default {
  name: 'ControlSimple',
  components: { HeaderSimpleCmp, FormSimpleCmp, NotifiedCmp, FooterCmp },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
.controlSimplePage
  position: relative

.controlSimplePageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.controlSimplePageWrapper
  position: relative
  display: flex
  flex-direction: column
  min-height: 100vh

.controlSimplePopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%
</style>
