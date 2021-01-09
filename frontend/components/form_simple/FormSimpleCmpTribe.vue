<template>
  <div class="formSimpleCmpTribeCnt">
    <div class="formSimpleCmpTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="formSimpleCmpTribeText">
      <div class="formSimpleCmpTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="formSimpleCmpTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSimpleCmpTribe',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formSimpleCmpTribeTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.formSimpleCmpTribeText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .formSimpleCmpTribeCnt
    width: 90%
    margin: 0 auto

  .formSimpleCmpTribeTitle
    font-size: 6vw

  .formSimpleCmpTribeText
    font-size: 5vw
    margin-top: 4vw

  .formSimpleCmpTribeTextLine
    padding: 1vw 0

@include for-tablet
  .formSimpleCmpTribeTitle
    font-size: 1.75vw
    text-align: center

  .formSimpleCmpTribeText
    font-size: 1.5vw
    text-align: center
    margin-top: 1vw
</style>
