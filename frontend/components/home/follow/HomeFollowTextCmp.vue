<template>
  <div>
    <div class="title">
      <utils-svg-cmp name="utils/quote" class="quoteL" />
      <div class="titleText">Follow along</div>
      <utils-svg-cmp name="utils/quote" class="quoteR" />
    </div>
    <div class="subtitle">
      We’re all users and in it together. No secrets. Real transparency. Follow
      us, tweet us, hit us up. Together we're a revolution.
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeFollowTextCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.quoteL
  transform: rotate(23deg)

.quoteR
  transform: rotate(130deg)

.subtitle
  font-family: $font-family-montserrat
  color: $purple
  font-weight: 600
  text-align: center

.titleText
  font-family: $font-family-koara
  font-weight: bold
  color: $purple

@include for-phone
  .quoteL, .quoteR
    height: 14vw
    margin-top: -20vw

  .title
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

  .subtitle
    font-size: 5vw
    margin: 6vw auto 0 auto
    width: 80%

  .titleText
    font-size: 8vw
    width: 35vw
    text-align: center

@include for-tablet
  .quoteL, .quoteR
    height: 3.5vw
    margin-top: -3.5vw

  .title
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

  .subtitle
    font-size: 1.25vw
    margin: 2vw auto 4vw auto
    width: 50%

  .titleText
    font-size: 2.25vw
</style>
