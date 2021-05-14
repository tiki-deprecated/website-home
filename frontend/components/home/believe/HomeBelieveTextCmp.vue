<template>
  <div>
    <div class="title">
      <utils-svg-cmp name="utils/quote" class="quoteL" />
      <div class="titleText">What we believe in</div>
      <utils-svg-cmp name="utils/quote" class="quoteR" />
    </div>
    <div class="subtitle">
      We believe you deserve a say in what happens to you data.
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeBelieveTextCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.titleText
  font-family: $font-family-koara
  font-weight: bold
  color: $purple

.quoteL
  transform: rotate(23deg)

.quoteR
  transform: rotate(130deg)

.subtitle
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple
  text-align: center

@include for-phone
  .quoteL, .quoteR
    height: 14vw
    margin-top: -20vw

  .titleText
    font-size: 8vw
    width: 35vw
    text-align: center

  .subtitle
    font-size: 4vw
    margin: 8vw auto 0 auto
    width: 75%

  .title
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

@include for-tablet
  .quoteL, .quoteR
    height: 3.5vw
    margin-top: -3.5vw

  .titleText
    font-size: 2.25vw

  .subtitle
    font-size: 1.25vw
    margin-top: 1.25vw

  .title
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content
</style>
