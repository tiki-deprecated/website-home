<template>
  <div class="signupTribe">
    <div class="title">Great, you're now part of the TIKI tribe!</div>
    <div class="text">
      <div class="line">Your feedback is important to us.</div>
      <div class="line">Would you like to take part in design discussions?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSignupTribeCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.title
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600

.text
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .title
    font-size: 5vw

  .text
    font-size: 4vw
    margin-top: 4vw

  .line
    padding: 1vw 0

@include for-tablet
  .title
    font-size: 1.75vw
    text-align: center

  .text
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw
</style>
