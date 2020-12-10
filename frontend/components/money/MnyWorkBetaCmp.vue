<template>
  <div class="mnyWorkBetaCnt">
    <utils-svg-cmp name="money/bkg-launch" class="mnyWorkBetaBkgLaunch" />
    <utils-svg-cmp name="money/bkg-launch-lg" class="mnyWorkBetaBkgLaunchLg" />
    <div class="mnyWorkBetaText">
      <div class="mnyWorkBetaTextFeedback">
        We need your help, your feedback, your ideas, your passion, your
        concerns.
      </div>
      <div class="mnyWorkBetaText4u">We’re here for you.</div>
      <div class="mnyWorkBetaContact">
        <a href="mailto:hello@mytiki.com" class="mnyWorkBetaContactHlt"
          >Email us (hello@mytiki.com)</a
        >
        reach out on social with feedback, feature ideas, or anything else.
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'MnyWorkBetaCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnyWorkBetaCnt
  position: relative
  width: 100%

.mnyWorkBetaBkgLaunch, .mnyWorkBetaBkgLaunchLg
  position: absolute
  top: 0
  left: 0
  z-index: 1

::v-deep .mnyWorkBetaBkgLaunch.svg > .bkg, ::v-deep .mnyWorkBetaBkgLaunchLg.svg > .bkg
  fill: $money-blue-light

::v-deep .mnyWorkBetaBkgLaunch.svg > .blob1, ::v-deep .mnyWorkBetaBkgLaunchLg.svg > .blob1
  fill: $money-pink

::v-deep .mnyWorkBetaBkgLaunch.svg > .blob2, ::v-deep .mnyWorkBetaBkgLaunchLg.svg > .blob2
  fill: $money-orange

::v-deep .mnyWorkBetaBkgLaunch.svg > .paint, ::v-deep .mnyWorkBetaBkgLaunchLg.svg > .paint
  fill: $money-yellow-light

::v-deep .mnyWorkBetaBkgLaunch.svg > .date, ::v-deep .mnyWorkBetaBkgLaunchLg.svg > .date
  fill: $money-blue-dark

::v-deep .mnyWorkBetaBkgLaunch.svg > .launch, ::v-deep .mnyWorkBetaBkgLaunchLg.svg > .launch
  fill: $money-pink

::v-deep .mnyWorkBetaBkgLaunch.svg > .bulb, ::v-deep .mnyWorkBetaBkgLaunchLg.svg > .bulb
  fill: $money-black-dark

.mnyWorkBetaText
  font-family: $font-family-montserrat
  color: $money-purple
  text-align: center
  position: absolute
  font-weight: 600
  z-index: 2

@include for-phone
  .mnyWorkBetaCnt
    height: 110vw

  .mnyWorkBetaBkgLaunch
    display: unset

  .mnyWorkBetaBkgLaunchLg
    display: none

  .mnyWorkBetaText
    font-size: 5vw
    bottom: 10%
    left: 0

  .mnyWorkBetaText4u
    margin-top: 5vw

  .mnyWorkBetaContact
    display: none
@include for-tablet
  .mnyWorkBetaCnt
    height: 35vw

  .mnyWorkBetaBkgLaunch
    display: none

  .mnyWorkBetaBkgLaunchLg
    display: unset
    top: -15%

  .mnyWorkBetaText
    font-size: 1.25vw
    top: 65%
    left: 40%
    transform: translate(0, -65%)
    text-align: left
    width: 30%

  .mnyWorkBetaText4u
    margin-top: 1vw

  .mnyWorkBetaContact
    margin-top: 1vw
    display: block

  .mnyWorkBetaContactHlt
    color: $money-orange
    font-weight: 600
    text-decoration: none
</style>
