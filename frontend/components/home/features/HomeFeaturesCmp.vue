<template>
  <div class="features">
    <div class="title">
      <home-features-title-cmp />
    </div>
    <home-features-tri-cmp />
    <home-features-how-cmp />
  </div>
</template>

<script>
import HomeFeaturesTriCmp from './HomeFeaturesTriCmp'
import HomeFeaturesTitleCmp from './HomeFeaturesTitleCmp'
import HomeFeaturesHowCmp from './HomeFeaturesHowCmp'

export default {
  name: 'HomeFeaturesCmp',
  components: {
    HomeFeaturesTitleCmp,
    HomeFeaturesTriCmp,
    HomeFeaturesHowCmp,
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.features
  background: $tan-light

@include for-phone
  .features
    padding: 18vw 0 18vw 0

  .title
    margin: 0 auto
    width: fit-content

@include for-tablet
  .features
    padding: 7vw 0 7vw 0

  .title
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content
</style>
