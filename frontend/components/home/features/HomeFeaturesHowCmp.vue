<template>
  <div class="featuresHow">
    <div class="title">How does it work?</div>
    <div class="subtitle">
      Link your accounts to the TIKI app and
      <b class="highlight">we'll get you paid</b> your fair share
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFeaturesHowCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.featuresHow
  width: fit-content
  margin: 3vw auto 0 auto

.title
  font-family: $font-family-koara
  text-align: center
  color: $purple

.subtitle
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center
  color: $purple

.highlight
  font-weight: 600
  color: $orange

@include for-phone
  .title
    font-size: 8vw

  .subtitle
    margin: 5vw auto 0 auto
    font-size: 4vw
    width: 80%

@include for-tablet
  .title
    font-size: 1.5vw

  .subtitle
    margin: 1vw auto 0 auto
    width: 19vw
    font-size: 1vw
</style>
