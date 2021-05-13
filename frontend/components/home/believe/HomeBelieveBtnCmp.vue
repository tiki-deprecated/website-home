<template>
  <div>
    <nuxt-link to="/meet" class="believeValue">
      <div class="believeValueText">See our values</div>
      <utils-svg-cmp name="utils/arrow" class="believeValueArrow" />
    </nuxt-link>
    <a
      href="https://angel.co/company/mytiki/jobs"
      class="believeJoin"
      target="_blank"
    >
      <div class="believeJoinText">Join us</div>
      <utils-svg-cmp name="utils/arrow" class="believeJoinArrow" />
    </a>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeBelieveBtnCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.believeValue, .believeJoin
  background: $blue-dark
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.believeValue:hover, .believeJoin:hover
  background: $blue-dark-hlt

.believeValue, .believeJoin, .believeValue:hover, .believeJoin:hover, .believeValue:visited, .believeJoin:visited, .believeValue:link, .believeJoin:link, .believeValue:active, .believeJoin:active
  text-decoration: none

.believeValueText, .believeJoinText
  font-family: $font-family-koara
  color: $blue-light
  text-align: right

.believeValueText, .believeJoinText, .believeValueText:hover, .believeJoinText:hover, .believeValueText:visited, .believeJoinText:visited, .believeValueText:link, .believeJoinText:link, .believeValueText:active, .believeJoinText:active
  text-decoration: none

::v-deep .believeValueArrow.svg, ::v-deep .believeJoinArrow.svg
  fill: $blue-light

@include for-phone
  .believeValue, .believeJoin
    height: 14vw
    border-radius: 4vw
    width: 60%
    margin: 2vw auto

  .believeValueText
    font-size: 5.5vw
    width: 66%

  .believeJoinText
    font-size: 5.5vw
    width: 53%

  .believeValueArrow
    margin-left: 10%

  .believeJoinArrow
    margin-left: 22%

  ::v-deep .believeValueArrow.svg, ::v-deep .believeJoinArrow.svg
    height: 50%

@include for-tablet
  .believeValue, .believeJoin
    height: 3vw
    border-radius: 0.75vw
    width: 15%
    margin: 0 0.5vw

  .believeValueText
    font-size: 1.25vw
    width: 65%

  .believeJoinText
    font-size: 1.25vw
    width: 50%

  .believeValueArrow
    margin-left: 8%

  .believeJoinArrow
    margin-left: 20%

  ::v-deep .believeValueArrow.svg, ::v-deep .believeJoinArrow.svg
    height: 50%
</style>
