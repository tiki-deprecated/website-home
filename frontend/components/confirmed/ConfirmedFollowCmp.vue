<template>
  <div class="follow">
    <div>
      <div class="title">
        <utils-svg-cmp name="utils/quote" class="quoteL" />
        <div class="titleText">Follow along</div>
        <utils-svg-cmp name="utils/quote" class="quoteR" />
      </div>
      <div class="subtitle">
        We’re all users and in it together. No secrets. Real transparency. We
        publish everything at TIKI, designs, vision, code, our team, its all out
        there for you. Hit us up!
      </div>
    </div>
    <follow-btn-cmp />
  </div>
</template>

<script>
import FollowBtnCmp from '../utils/UtilsFollowCmp'
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'ConfirmedFollowCmp',
  components: { FollowBtnCmp, UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.follow
  width: 100%

.quoteL
  transform: rotate(23deg)

.quoteR
  transform: rotate(130deg)

.subtitle
  font-family: $font-family-montserrat
  color: $gray-xdark

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
    width: 90%
    text-align: left

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
    font-size: 1.1vw
    margin: 1.5vw auto 2.5vw auto
    width: 40%
    text-align: center

  .titleText
    font-size: 2vw
</style>
