<template>
  <div class="form10CmpTribeCnt">
    <div class="form10CmpTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="form10CmpTribeText">
      <div class="form10CmpTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="form10CmpTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form10CmpTribe',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.form10CmpTribeTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.form10CmpTribeText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .form10CmpTribeTitle
    font-size: 5vw

  .form10CmpTribeText
    font-size: 4vw
    margin-top: 4vw

  .form10CmpTribeTextLine
    padding: 1vw 0

@include for-tablet
  .form10CmpTribeTitle
    font-size: 1.75vw
    text-align: center

  .form10CmpTribeText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw
</style>
