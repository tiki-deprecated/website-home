<template>
  <div class="formBetaCmpTribeCnt">
    <div class="formBetaCmpTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="formBetaCmpTribeText">
      <div class="formBetaCmpTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="formBetaCmpTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormBetaCmpTribe',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formBetaCmpTribeTitle
  color: $green
  font-family: $font-family-montserrat

.formBetaCmpTribeText
  color: $blue-dark
  font-family: $font-family-montserrat

@include for-phone
  .formBetaCmpTribeCnt
    width: 90%
    margin: 0 auto

  .formBetaCmpTribeTitle
    font-size: 6vw

  .formBetaCmpTribeText
    font-size: 5vw
    margin-top: 4vw

  .formBetaCmpTribeTextLine
    padding: 1vw 0

@include for-tablet
  .formBetaCmpTribeTitle
    font-size: 1.5vw
    text-align: center

  .formBetaCmpTribeText
    font-size: 1vw
    text-align: center
    margin-top: 1vw
</style>
