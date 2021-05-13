<template>
  <div>
    <div class="headerHomeTitle">It's your data. Get paid for it.</div>
    <div class="headerHomeSubtitle">
      Your data is worth thousands a year. Why aren’t you getting your fair
      share? Take back control. Get paid. Tiki’s got your back.
    </div>
    <nuxt-link
      v-scroll-to="{ el: '#signup' }"
      :to="{ path: '/', hash: 'signup' }"
      class="signup"
      >Sign up
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeaderTextCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
.headerHomeTitle
  font-family: $font-family-montserrat
  font-weight: 600

.signup
  font-family: $font-family-montserrat
  color: $white
  text-decoration: none
  font-weight: 600
  background: $red

.signup:hover, .signup:visited, .signup:link, .signup:active
  text-decoration: none

@include for-phone
  .headerHomeTitle
    font-size: 10vw
    width: 90%

  .headerHomeSubtitle
    font-size: 5vw
    margin-top: 5vw
    margin-bottom: 12vw
    font-weight: 300
    width: 90%

  .signup
    font-size: 5vw
    padding: 2vw 10vw
    border-radius: 2.5vw

@include for-tablet
  .headerHomeTitle
    font-size: 2.75vw

  .headerHomeSubtitle
    font-size: 1vw
    margin-top: 1vw
    margin-bottom: 3vw

  .signup
    font-size: 1vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw
</style>
