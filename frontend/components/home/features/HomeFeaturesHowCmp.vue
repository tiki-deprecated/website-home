<template>
  <div class="featuresHow">
    <div class="title">How does it work?</div>
    <div class="subtitle">
      Just link your existing accounts to the TIKI app to get started.
    </div>
    <div class="subtitle">
      With TIKI, you're in control.
      <b class="highlight">Take back your data</b> and
      <b class="highlight">get paid your fair share</b>. Data should be easy.
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
