<template>
  <div class="mnySignupTribeCnt">
    <div class="mnySignupTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="mnySignupTribeText">
      <div class="mnySignupTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="mnySignupTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MnySignupTribeCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnySignupTribeTitle
  color: $money-green
  font-family: $font-family-montserrat
  font-weight: 600

.mnySignupTribeText
  color: $money-blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .mnySignupTribeTitle
    font-size: 5vw

  .mnySignupTribeText
    font-size: 4vw
    margin-top: 4vw

  .mnySignupTribeTextLine
    padding: 1vw 0
@include for-tablet
  .mnySignupTribeTitle
    font-size: 1.75vw
    text-align: center

  .mnySignupTribeText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw
</style>
