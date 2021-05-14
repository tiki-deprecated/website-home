<template>
  <div>
    <div class="title">
      <b class="titleHighlight">Your</b> Data.
      <b class="titleHighlight">Your</b> Decisions.
    </div>
    <div class="subtitle line1">It’s simple: your data is yours.</div>
    <div class="subtitle line2">
      With TIKI, see what data you share online and make informed decisions on
      who else can see it. Best of all, if you choose to share, we make sure you
      get PAID.
    </div>
    <div class="subtitle line3">
      In our future, the people take power back from corporations.
      <b class="subtitleHighlight"
        >Together, TIKI users will triumph. Join us!</b
      >
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
.title
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple

.subtitle
  color: $purple
  font-weight: normal

.signup
  font-family: $font-family-montserrat
  color: $white
  text-decoration: none
  font-weight: 600
  background: $red

.signup:hover, .signup:visited, .signup:link, .signup:active
  text-decoration: none

.titleHighlight
  color: $orange
  font-weight: 600

.subtitleHighlight
  color: $purple
  font-weight: 600

@include for-phone
  .title
    font-size: 10vw
    width: 90%

  .subtitle
    font-size: 4.5vw
    font-weight: 300
    width: 90%

  .signup
    font-size: 5vw
    padding: 2vw 10vw
    border-radius: 2.5vw

  .line1
    margin-top: 5vw

  .line2, .line3
    margin-top: 5vw

  .line3
    margin-bottom: 12vw

@include for-tablet
  .title
    font-size: 2.75vw

  .subtitle
    font-size: 1vw

  .signup
    font-size: 1vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw

  .line1
    margin-top: 1vw

  .line2, .line3
    margin-top: 0.75vw

  .line3
    margin-bottom: 3vw
</style>
