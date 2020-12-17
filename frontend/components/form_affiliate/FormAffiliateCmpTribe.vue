<template>
  <div class="formAffiliateCmpTribeCnt">
    <div class="formAffiliateCmpTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="formAffiliateCmpTribeText">
      <div class="formAffiliateCmpTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="formAffiliateCmpTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAffiliateCmpTribe',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formAffiliateCmpTribeTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.formAffiliateCmpTribeText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .formAffiliateCmpTribeTitle
    font-size: 5vw

  .formAffiliateCmpTribeText
    font-size: 4vw
    margin-top: 4vw

  .formAffiliateCmpTribeTextLine
    padding: 1vw 0

@include for-tablet
  .formAffiliateCmpTribeTitle
    font-size: 1.75vw
    text-align: center

  .formAffiliateCmpTribeText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw
</style>
