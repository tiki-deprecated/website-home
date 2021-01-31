<template>
  <div class="headerControlCmpFormTribeCnt">
    <div class="headerControlCmpFormTribeTitle">
      Great, you're now part of the TIKI tribe!
    </div>
    <div class="headerControlCmpFormTribeText">
      <div class="headerControlCmpFormTribeTextLine">
        Your feedback is important to us.
      </div>
      <div class="headerControlCmpFormTribeTextLine">
        Would you like to take part in design discussions?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderControlCmpFormTribe',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerControlCmpFormTribeTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.headerControlCmpFormTribeText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .headerControlCmpFormTribeCnt
    width: 90%
    margin: 0 auto

  .headerControlCmpFormTribeTitle
    font-size: 6vw

  .headerControlCmpFormTribeText
    font-size: 5vw
    margin-top: 4vw

  .headerControlCmpFormTribeTextLine
    padding: 1vw 0

@include for-tablet
  .headerControlCmpFormTribeTitle
    font-size: 1.5vw

  .headerControlCmpFormTribeText
    font-size: 1vw
    margin-top: 1vw

  .headerControlCmpFormTribeTextLine
    padding: 0.25vw 0
</style>
