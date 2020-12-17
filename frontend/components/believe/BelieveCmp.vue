<template>
  <div class="believeCnt">
    <div class="believeTitleCnt">
      <utils-svg-cmp name="sketch/quote" class="believeQuoteLeft" />
      <div class="believeTitleText">What we believe in</div>
      <utils-svg-cmp name="sketch/quote" class="believeQuoteRight" />
    </div>
    <div class="believeSubtitle">
      We believe users deserve to be in control of their data.
    </div>
    <div class="believeButtons">
      <nuxt-link to="/meet" class="believeValue">
        <div class="believeValueText">See our values</div>
        <utils-svg-cmp name="sketch/arrow" class="believeValueArrow" />
      </nuxt-link>
      <a
        href="https://angel.co/company/mytiki/jobs"
        class="believeJoin"
        target="_blank"
      >
        <div class="believeJoinText">Join us</div>
        <utils-svg-cmp name="sketch/arrow" class="believeJoinArrow" />
      </a>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'BelieveCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.believeCnt
  background: $blue-xlight

.believeTitleText
  font-family: $font-family-koara
  font-weight: bold
  color: $purple

.believeQuoteLeft
  transform: rotate(23deg)

.believeQuoteRight
  transform: rotate(130deg)

.believeSubtitle
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple
  text-align: center

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
  .believeCnt
    padding: 18vw 0 55vw 0

  .believeQuoteLeft, .believeQuoteRight
    height: 14vw
    margin-top: -20vw

  .believeTitleText
    font-size: 8vw
    width: 35vw
    text-align: center

  .believeTitleCnt
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

  .believeSubtitle
    font-size: 4vw
    margin: 8vw auto 0 auto
    width: 75%

  .believeButtons
    margin: 15vw 0

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
  .believeCnt
    padding: 5vw 0 3vw 0

  .believeQuoteLeft, .believeQuoteRight
    height: 3.5vw
    margin-top: -3.5vw

  .believeTitleText
    font-size: 2.25vw

  .believeTitleCnt
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

  .believeButtons
    display: flex
    margin-top: 2vw
    align-items: center
    justify-content: center

  .believeSubtitle
    font-size: 1.25vw
    margin-top: 1.25vw

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
