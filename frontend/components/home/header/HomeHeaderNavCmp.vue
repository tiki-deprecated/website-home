<template>
  <div>
    <nuxt-link to="/">
      <utils-svg-cmp name="utils/logo" class="logo" />
    </nuxt-link>
    <div class="featuresHow">
      <nuxt-link
        v-scroll-to="{ el: '#signup' }"
        :to="{ path: '/', hash: 'signup' }"
        class="signup signupHide"
        >Sign up
      </nuxt-link>
      <div class="more" @click="moreClick($event)">
        MORE <utils-svg-cmp name="home/header/arrow-lame" class="arrow" />
      </div>
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

::v-deep .arrow.svg
  fill: $blue-dark

.featuresHow
  display: flex
  align-items: center

.more
  font-family: $font-family-montserrat
  color: $blue-dark
  text-decoration: none
  font-weight: 600
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center

.signup
  font-family: $font-family-montserrat
  color: $white
  text-decoration: none
  font-weight: 600
  background: $red

.more:hover, .more:visited, .more:link, .more:active, .signup:hover, .signup:visited, .signup:link, .signup:active
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

  .more
    font-size: 5vw
    margin-right: 4vw

  ::v-deep .arrow.svg
    height: 5vw
    padding-left: 3vw

@include for-tablet
  ::v-deep .logo.svg
    height: 2vw

  .signup
    font-size: 1vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw

  .more
    font-size: 1vw
    margin-left: 2vw

  ::v-deep .arrow.svg
    height: 1.25vw
    padding-left: 1vw
</style>
