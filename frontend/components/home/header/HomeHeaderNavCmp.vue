<template>
  <div>
    <nuxt-link to="/">
      <utils-svg-cmp name="utils/logo" class="logo" />
    </nuxt-link>
    <div class="featuresHow">
      <div class="more" @click="moreClick($event)">More</div>
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
    moreClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('more', {
        props: { location: 'Home' },
      })
      this.$router.push('/blog')
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

.more, .faq
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

.more:hover, .more:visited, .more:link, .more:active, .signup:hover, .signup:visited, .signup:link, .signup:active, .faq:hover, .faq:visited, .faq:link, .faq:active
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

  .more, .faq
    font-size: 5vw
    margin-right: 4vw

@include for-tablet
  ::v-deep .logo.svg
    height: 2vw

  .signup
    font-size: 1vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw

  .more, .faq
    font-size: 1vw
    margin-right: 2vw
</style>
