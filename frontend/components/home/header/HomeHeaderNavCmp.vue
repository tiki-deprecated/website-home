<template>
  <div>
    <nuxt-link to="/">
      <utils-svg-cmp name="utils/logo" class="logo" />
    </nuxt-link>
    <div class="featuresHow">
      <nuxt-link to="/meet" class="mission">Mission</nuxt-link>
      <div
        class="faq"
        @click="
          faqClick(
            $event,
            'https://medium.com/mytiki/tiki-faqs-48c783972df1?source=friends_link&sk=2e2903eecb626bee96070739c16a474c'
          )
        "
      >
        FAQ
      </div>
      <nuxt-link
        v-scroll-to="{ el: '#signup' }"
        :to="{ path: '/', hash: 'signup' }"
        class="signup signupHide"
        >Sign up
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'HomeHeaderNavCmp',
  components: { UtilsSvgCmp },
  methods: {
    faqClick(clickEvent, href) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('FAQ', {
        props: { location: 'Home' },
      })
      const win = window.open(href, '_blank')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

::v-deep .headerHomeLogo.svg
  fill: $black-dark

.featuresHow
  display: flex
  align-items: center

.mission, .faq
  font-family: $font-family-montserrat
  color: $black-dark
  text-decoration: none
  font-weight: 600
  cursor: pointer

.signup
  font-family: $font-family-montserrat
  color: $white
  text-decoration: none
  font-weight: 600
  background: $red

.mission:hover, .mission:visited, .mission:link, .mission:active, .signup:hover, .signup:visited, .signup:link, .signup:active, .faq:hover, .faq:visited, .faq:link, .faq:active
  text-decoration: none

@include for-phone
  .signupHide
    display: none

  ::v-deep .headerHomeLogo.svg
    height: 8vw

  .signup
    font-size: 5vw
    padding: 2vw 10vw
    border-radius: 2.5vw

  .mission, .faq
    font-size: 5vw
    margin-right: 4vw

@include for-tablet
  ::v-deep .headerHomeLogo.svg
    height: 2vw

  .signup
    font-size: 1vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw

  .mission, .faq
    font-size: 1vw
    margin-right: 2vw
</style>
