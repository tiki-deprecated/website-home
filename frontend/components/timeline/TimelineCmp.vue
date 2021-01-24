<template>
  <div class="timelineCnt">
    <div class="timelineTitleCnt">
      <utils-svg-cmp name="sketch/quote" class="timelineQuoteLeft" />
      <div class="timelineTitleText">Help us complete our mission</div>
      <utils-svg-cmp name="sketch/quote" class="timelineQuoteRight" />
    </div>
    <div class="timelineSubheading">
      We are stronger together. Help us get to the end of the journey and start
      getting you paid.
    </div>
    <div class="timelineWrapper">
      <utils-svg-cmp
        name="background/timeline"
        class="utilsSvgCmp timelineHorizontal"
      />
      <utils-svg-cmp
        name="background/timeline-vertical"
        class="utilsSvgCmp timelineVertical"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'TimelineCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.timelineCnt
  background: $orange

::v-deep .utilsSvgCmp.svg > .blob
  fill: $yellow-xlight

::v-deep .utilsSvgCmp.svg > .blob-bkg
  fill: $yellow

::v-deep .utilsSvgCmp.svg > .text
  fill: $purple

::v-deep .utilsSvgCmp.svg > .accent
  fill: $blue-dark

::v-deep .utilsSvgCmp.svg > .text-inv
  fill: $gray-xxlight

::v-deep .utilsSvgCmp.svg > .hlt
  fill: $blue

::v-deep .utilsSvgCmp.svg > .num
  fill: $white

.timelineQuoteLeft
  transform: rotate(23deg)

.timelineQuoteRight
  transform: rotate(130deg)

::v-deep .timelineQuoteLeft.svg, ::v-deep .timelineQuoteRight.svg
  fill: $white

.timelineTitleText
  font-family: $font-family-koara
  font-weight: 700
  color: $white
  text-align: center

.timelineSubheading
  font-family: $font-family-montserrat
  color: $white
  text-align: center

@include for-phone
  .timelineCnt
    width: 88%

  .timelineWrapper
    width: 80%
    margin: 0 auto
    padding: 2vw 0

  .utilsSvgCmp
    width: 100%

  .timelineTitleCnt
    display: none

  .timelineSubheading
    display: none

  .timelineHorizontal
    display: none

@include for-tablet
  .timelineCnt
    width: 95%

  .timelineWrapper
    width: 80%
    margin: 0 auto

  .utilsSvgCmp
    width: 100%

  .timelineQuoteLeft, .timelineQuoteRight
    height: 3.5vw
    margin-top: -3.5vw

  .timelineTitleText
    font-size: 1.5vw

  .timelineTitleCnt
    margin: 6vw auto 1.25vw auto
    display: flex
    align-items: center
    width: fit-content

  .timelineSubheading
    font-size: 1vw

  .timelineVertical
    display: none
</style>
