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
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
          ~/assets/images/png/timeline-horizontal/timeline-horizontal_w_200.png   200w,
          ~/assets/images/png/timeline-horizontal/timeline-horizontal_w_448.png   448w,
          ~/assets/images/png/timeline-horizontal/timeline-horizontal_w_626.png   626w,
          ~/assets/images/png/timeline-horizontal/timeline-horizontal_w_792.png   792w,
          ~/assets/images/png/timeline-horizontal/timeline-horizontal_w_934.png   934w,
          ~/assets/images/png/timeline-horizontal/timeline-horizontal_w_1069.png 1069w,
          ~/assets/images/png/timeline-horizontal/timeline-horizontal_w_1238.png 1238w,
          ~/assets/images/png/timeline-horizontal/timeline-horizontal_w_1400.png 1400w
        "
        src="~/assets/images/png/timeline-horizontal/timeline-horizontal_w_1400.png"
        alt="10,000 signups. Beta Launch. Start getting paid."
        class="timelineHorizontal"
      />
      <img
        sizes="(max-width: 1000px) 100vw, 1000px"
        srcset="
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_200.png   200w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_252.png   252w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_301.png   301w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_343.png   343w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_386.png   386w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_432.png   432w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_476.png   476w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_517.png   517w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_555.png   555w,
          ~/assets/images/png/timeline-vertical/timeline-vertical_w_1000.png 1000w
        "
        src="~/assets/images/png/timeline-vertical/timeline-vertical_w_1000.png"
        alt="10,000 signups. Beta Launch. Start getting paid."
        class="timelineVertical"
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
  background: $yellow

.timelineQuoteLeft
  transform: rotate(23deg)

.timelineQuoteRight
  transform: rotate(130deg)

::v-deep .timelineQuoteLeft.svg, ::v-deep .timelineQuoteRight.svg
  fill: $blue-dark

.timelineTitleText
  font-family: $font-family-koara
  font-weight: 700
  color: $blue-dark
  text-align: center

.timelineSubheading
  font-family: $font-family-montserrat
  color: $blue-dark
  text-align: center

.timelineHorizontal, .timelineVertical
  width: 100%

@include for-phone
  .timelineCnt
    width: 88%

  .timelineWrapper
    width: 80%
    margin: 0 auto
    padding: 2vw 0

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
