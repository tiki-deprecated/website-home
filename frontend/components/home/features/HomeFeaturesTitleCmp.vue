<template>
  <div class="featuresTitle">
    <utils-svg-cmp name="utils/quote" class="quoteL" />
    <div class="title">With TIKI, you can</div>
    <utils-svg-cmp name="utils/quote" class="quoteR" />
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeFeaturesTitleCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.featuresTitle
  display: flex
  align-items: center
  width: fit-content

.title
  font-family: $font-family-koara
  font-weight: bold
  color: $purple

.quoteL
  transform: rotate(23deg)

.quoteR
  transform: rotate(130deg)

@include for-phone
  .quoteL, .quoteR
    height: 14vw
    margin-top: -20vw

  .title
    font-size: 8vw
    width: 35vw
    text-align: center

@include for-tablet
  .quoteL, .quoteR
    height: 3.5vw
    margin-top: -3.5vw

  .title
    font-size: 2.25vw
</style>
