<template>
  <div class="controlSimple4Page">
    <div class="controlSimple4PageStack">
      <div class="controlSimple4PageWrapper">
        <header-simple-cmp
          class="headerSimpleCmp"
          heading="We can take back the internet if we work together."
        />
        <form-simple-cmp
          class="formSimpleCmp"
          cta="Join the fight"
          :how="false"
        />
        <notified-cmp class="notifiedCmp" />
        <social-share-cmp class="controlSimple4Share" />
      </div>
      <footer-cmp class="footerCmp" />
    </div>
    <popup-privacy-cmp class="controlSimple4PopupDataCmp" />
  </div>
</template>

<script>
import HeaderSimpleCmp from '@/components/header_simple/HeaderSimpleCmp'
import FormSimpleCmp from '@/components/form_simple/FormSimpleCmp'
import NotifiedCmp from '@/components/notified/NotifiedCmp'
import FooterCmp from '@/components/footer/FooterCmp'
import SocialShareCmp from '@/components/social/SocialShareCmp'

export default {
  name: 'ControlSimple4',
  components: {
    HeaderSimpleCmp,
    FormSimpleCmp,
    NotifiedCmp,
    FooterCmp,
    SocialShareCmp,
  },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.controlSimple4Page
  position: relative

.controlSimple4PageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.controlSimple4PageWrapper
  position: relative
  display: flex
  flex-direction: column
  min-height: 100vh

.controlSimple4PopupDataCmp
  position: fixed
  z-index: 9
  width: 100%
  height: 100%

@include for-phone
  .controlSimple4Share
    margin-top: 5vh

@include for-tablet
  .controlSimple4Share
    margin-top: -12vw
</style>
