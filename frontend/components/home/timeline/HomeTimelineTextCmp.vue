<template>
  <div>
    <div class="header">
      <utils-svg-cmp name="utils/quote" class="quoteL" />
      <div class="title">Help us complete our mission</div>
      <utils-svg-cmp name="utils/quote" class="quoteR" />
    </div>
    <div class="subheader">
      We are stronger together. Help us get to the end of the journey and start
      getting you paid.
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeTimelineTextCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.quoteL
  transform: rotate(23deg)

.quoteR
  transform: rotate(130deg)

::v-deep .quoteL.svg, ::v-deep .quoteR.svg
  fill: $blue-dark

.title
  font-family: $font-family-koara
  font-weight: 700
  color: $blue-dark
  text-align: center

.subheader
  font-family: $font-family-montserrat
  color: $blue-dark
  text-align: center

@include for-phone
  .header
    display: none

  .subheader
    display: none

@include for-tablet
  .quoteL, .quoteR
    height: 3.5vw
    margin-top: -3.5vw

  .title
    font-size: 1.5vw

  .header
    margin: 6vw auto 1.25vw auto
    display: flex
    align-items: center
    width: fit-content

  .subheader
    font-size: 1vw
</style>
