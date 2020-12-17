<template>
  <div class="youCanCmpHowCnt">
    <div class="youCanCmpHowTitle">How does it work?</div>
    <div class="youCanCmpHowSubtitle">
      Link your accounts to the TIKI app and
      <b class="youCanCmpHowSubtitleHlt">we'll get you paid</b> your fair share
    </div>
  </div>
</template>

<script>
export default {
  name: 'YouCanCmpHow',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.youCanCmpHowCnt
  width: fit-content
  margin: 3vw auto 0 auto

.youCanCmpHowTitle
  font-family: $font-family-koara
  text-align: center
  color: $purple

.youCanCmpHowSubtitle
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center
  color: $purple

.youCanCmpHowSubtitleHlt
  font-weight: 600
  color: $orange

@include for-phone
  .youCanCmpHowTitle
    font-size: 8vw

  .youCanCmpHowSubtitle
    margin: 5vw auto 0 auto
    font-size: 4vw
    width: 80%

@include for-tablet
  .youCanCmpHowTitle
    font-size: 1.5vw

  .youCanCmpHowSubtitle
    margin: 1vw auto 0 auto
    width: 19vw
    font-size: 1vw
</style>
