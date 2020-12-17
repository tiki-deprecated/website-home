<template>
  <div class="valuesCnt">
    <div class="valuesTitleCnt">
      <utils-svg-cmp name="sketch/quote" class="valuesQuoteLeft" />
      <div class="valuesTitleText">Our values</div>
      <utils-svg-cmp name="sketch/quote" class="valuesQuoteRight" />
    </div>
    <div class="valuesSection">
      <div class="valueWrapper">
        <div class="valueTitle valueTitleTransparency">Transparency</div>
        <div class="valueText">
          helps build trust. Seeing is believing, and nothing is off-limits. No
          shadowbans or secret algorithms at TIKI.
        </div>
      </div>
      <div class="valueWrapper">
        <div class="valueTitle valueTitleCommunity">Community</div>
        <div class="valueText">
          is what connects us. Together, we're an unstoppable force. We expect
          better. We demand better.
        </div>
      </div>
      <div class="valueWrapper">
        <div class="valueTitle valueTitleDiversity">Diversity</div>
        <div class="valueText">
          is not optional within the walls of TIKI. We're here for our users; we
          represent our users
        </div>
      </div>
      <div class="valueWrapper">
        <div class="valueTitle valueTitleSustainability">Sustainability</div>
        <div class="valueText">
          comes before profit. We work tirelessly to bring lasting positive
          change to our users' lives.
        </div>
      </div>
      <div class="valueWrapper">
        <div class="valueTitle valueTitleReliability">Reliability</div>
        <div class="valueText">
          is foundational to trust. We want our users to count on us and aim
          never to break that trust.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'ValuesCmp',
  components: {
    UtilsSvgCmp,
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.valuesCnt
  background: $green-xxlight

.valuesTitleText
  font-family: $font-family-koara
  font-weight: bold
  color: $purple

.valuesQuoteLeft
  transform: rotate(23deg)

.valuesQuoteRight
  transform: rotate(130deg)

.valuesSubtitle
  font-family: $font-family-montserrat
  font-weight: 600
  color: $purple
  text-align: center

.valuesSection
  display: flex
  align-items: start
  justify-content: center
  flex-wrap: wrap
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center

.valueTitle
  text-transform: uppercase

.valueTitleTransparency
  color: $pink

.valueTitleCommunity
  color: $red

.valueTitleDiversity
  color: $yellow

.valueTitleSustainability
  color: $green

.valueTitleReliability
  color: $orange

@include for-phone
  .valuesCnt
    padding: 20vw 10vw

  .valuesQuoteLeft, .valuesQuoteRight
    height: 14vw
    margin-top: -20vw

  .valuesTitleText
    font-size: 8vw
    width: 28vw
    text-align: center

  .valuesTitleCnt
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

  .valueWrapper
    margin: 2.5vw 0

  .valuesSection
    margin: 7.5vw 0
@include for-tablet
  .valuesCnt
    padding: 5vw 0 3vw 0

  .valuesQuoteLeft, .valuesQuoteRight
    height: 3.5vw
    margin-top: -3.5vw

  .valuesTitleText
    font-size: 2.25vw

  .valuesTitleCnt
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

  .valuesSection
    width: 80%
    margin: 0 auto
    font-size: 1vw

  .valueWrapper
    width: 30%
    margin: 3vw 1vw
</style>
