<template>
  <div class="form382CmpTribeCnt">
    <div class="form382CmpTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="form382CmpTribeText">
      <div class="form382CmpTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="form382CmpTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form382CmpTribe',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.form382CmpTribeTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.form382CmpTribeText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .form382CmpTribeTitle
    font-size: 5vw

  .form382CmpTribeText
    font-size: 4vw
    margin-top: 4vw

  .form382CmpTribeTextLine
    padding: 1vw 0

@include for-tablet
  .form382CmpTribeTitle
    font-size: 1.75vw
    text-align: center

  .form382CmpTribeText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw
</style>
