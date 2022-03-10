<template>
  <div class="apply">
    <div class="applyContainer">
      <div class="applyHeader">
        <span class="applyHeaderText"> Apply for First Access </span>
        <br /><br />
        <div class="applySubHeaderText">
          TIKI IS IN DEVELOPMENT.
          <b class="applySubHeaderTextBold"
            >THE INITIAL COHORT WILL BE CAPPED AT 100 COMPANIES.</b
          >
        </div>
      </div>
      <div class="applyForm">{APPLY FORM}</div>
      <div class="applyBusProp">
        <span>UNLIMITED ACCESS. $10 PER MONTH.</span>
        <span class="enoughSaid">ENOUGH SAID.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyForAccessCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.apply
  background-color: $gray-1

.applyContainer
  margin: 0 auto
  justify-content: center
  align-items: center

.applyHeader
  text-align: center

.applyHeaderText
  font-family: $font-family-koara
  color: $orange

.applySubHeaderText
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  font-weight: 300

.applySubHeaderTextBold
  font-weight: 600

.applyBusProp
  font-family: $font-family-nunito-sans
  color: $tiki-pink
  font-weight: 600
  text-align: center

.enoughSaid
  color: $black

@include for-phone
  .apply
    padding-top: 10vh

  .applyContainer
    width: 86.15vw

  .applyHeaderText
    font-size: 2.9rem
    margin-bottom: 4.3vh

  .applySubHeaderText
    font-size: 1.13rem
    margin-bottom: 4.3vh

  .applyForm
    margin-bottom: 4.3vh

  .applyBusProp
    font-size: 1.1rem
    width: 80%
    margin: 0 auto

@include for-tablet
</style>
