<template>
  <div class="headerControlCmpFormJoinCnt">
    <div class="headerControlCmpFormJoinTitle">
      Ready to control your apps data settings, all in one place? Join the
      tribe.
    </div>
    <div class="headerControlCmpFormJoinText">
      Enter your email below, and you will be amongst the first to know when we
      launch our private Beta. Hurry up, as there are limited spaces available!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderControlCmpFormJoin',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerControlCmpFormJoinTitle
  color: $black-dark
  font-family: $font-family-montserrat

.headerControlCmpFormJoinText
  color: $black-dark
  font-family: $font-family-montserrat

@include for-phone
  .headerControlCmpFormJoinCnt
    width: 90%
    margin: 0 auto

  .headerControlCmpFormJoinTitle
    font-size: 6vw

  .headerControlCmpFormJoinText
    font-size: 5vw
    margin-top: 4vw

@include for-tablet
  .headerControlCmpFormJoinCnt
    margin: 0 0 2vw 0

  .headerControlCmpFormJoinTitle
    font-size: 1.5vw

  .headerControlCmpFormJoinText
    font-size: .9vw
    margin-top: 1vw
</style>
