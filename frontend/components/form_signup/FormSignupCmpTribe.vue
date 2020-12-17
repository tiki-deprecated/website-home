<template>
  <div class="formSignupCmpTribeCnt">
    <div class="formSignupCmpTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="formSignupCmpTribeText">
      <div class="formSignupCmpTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="formSignupCmpTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSignupCmpTribe',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formSignupCmpTribeTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.formSignupCmpTribeText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .formSignupCmpTribeTitle
    font-size: 5vw

  .formSignupCmpTribeText
    font-size: 4vw
    margin-top: 4vw

  .formSignupCmpTribeTextLine
    padding: 1vw 0

@include for-tablet
  .formSignupCmpTribeTitle
    font-size: 1.75vw
    text-align: center

  .formSignupCmpTribeText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw
</style>
