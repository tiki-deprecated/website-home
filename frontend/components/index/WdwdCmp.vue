<template>
  <div class="wdwd">
    <div class="line1">We can’t live in a world without privacy.</div>
    <div class="line2">And, we can’t just shut off all data.</div>
    <div class="line3">So, What Can We Do?</div>
  </div>
</template>

<script>
export default {
  name: 'WdwdCmp',
  components: {},
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.wdwd
  width: 100%
  position: relative
  background-color: #FFB720

.line1
  font-family: $font-family-koara
  font-weight: lighter
  color: $white
  text-align: left
  display: inline-block

.line2
  font-family: $font-family-koara
  font-weight: lighter
  color: $tiki-black
  text-align: right
  display: block

.line3
  color: $tiki-purple
  font-family: $font-family-courier
  font-weight: normal
  text-align: left
  display: block

@include for-phone
  .wdwd
    height: 80vh

  .line1
    margin: 7vh auto 0 5vw
    font-size: 9vw

  .line2
    margin: 20vh 5vw 0 auto
    font-size: 9vw
    width: 66%

  .line3
    font-size: 8vw
    width: 50%
    margin: 20vh auto 0 10vw

@include for-tablet
  .wdwd
    height: 100vh

  .line1
    margin: 20vh auto 0 5vw
    font-size: 3vw

  .line2
    margin: 20vh 5vw 0 auto
    font-size: 3vw

  .line3
    font-size: 2.75vw
    width: 19%
    margin: 15vh auto 0 12vw
</style>
