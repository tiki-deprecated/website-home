<template>
  <div>
    <nuxt-link to="/">
      <utils-svg-cmp name="utils/logo" class="logo" />
    </nuxt-link>
    <div class="featuresHow">
      <div class="team" @click="teamClick($event)">Team</div>
      <div class="faq" @click="faqClick($event)">FAQ</div>
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
    faqClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('FAQ', {
        props: { location: 'Home' },
      })
      const win = window.open(
        'https://medium.com/mytiki/tiki-faqs-48c783972df1?source=friends_link&sk=2e2903eecb626bee96070739c16a474c',
        '_blank'
      )
      win.focus()
    },
    teamClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Team', {
        props: { location: 'Home' },
      })
      const win = window.open(
        'https://medium.com/mytiki/meet-tiki-331f86f6e936?source=friends_link&sk=193f0b8bf53af9e81247e3c9dcb6e7bb',
        '_blank'
      )
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

::v-deep .logo.svg
  fill: $black-dark

.featuresHow
  display: flex
  align-items: center

.team, .faq
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

.team:hover, .team:visited, .team:link, .team:active, .signup:hover, .signup:visited, .signup:link, .signup:active, .faq:hover, .faq:visited, .faq:link, .faq:active
  text-decoration: none

@include for-phone
  .signupHide
    display: none

  ::v-deep .logo.svg
    height: 8vw

  .signup
    font-size: 5vw
    padding: 2vw 10vw
    border-radius: 2.5vw

  .team, .faq
    font-size: 5vw
    margin-right: 4vw

@include for-tablet
  ::v-deep .logo.svg
    height: 2vw

  .signup
    font-size: 1vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw

  .team, .faq
    font-size: 1vw
    margin-right: 2vw
</style>
