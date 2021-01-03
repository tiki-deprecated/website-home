<template>
  <div class="formHomeCmpTribeCnt">
    <div class="formHomeCmpTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="formHomeCmpTribeText">
      <div class="formHomeCmpTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="formHomeCmpTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormHomeCmpTribe',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formHomeCmpTribeTitle
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600

.formHomeCmpTribeText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .formHomeCmpTribeTitle
    font-size: 5vw

  .formHomeCmpTribeText
    font-size: 4vw
    margin-top: 4vw

  .formHomeCmpTribeTextLine
    padding: 1vw 0

@include for-tablet
  .formHomeCmpTribeTitle
    font-size: 1.75vw
    text-align: center

  .formHomeCmpTribeText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw
</style>
