<template>
  <div class="howBetaCmpLaunchCnt">
    <utils-svg-cmp name="background/launch" class="howBetaCmpLaunchBkgLaunch" />
    <utils-svg-cmp
      name="background/launch-lg"
      class="howBetaCmpLaunchBkgLaunchLg"
    />
    <div class="howBetaCmpLaunchText">
      <div class="howBetaCmpLaunchTextFeedback">
        We need your help, your feedback, your ideas, your passion, your
        concerns.
      </div>
      <div class="howBetaCmpLaunchText4u">We’re here for you.</div>
      <div class="howBetaCmpLaunchContact">
        <a href="mailto:hello@mytiki.com" class="howBetaCmpLaunchContactHlt"
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
  name: 'HowBetaCmpLaunch',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.howBetaCmpLaunchCnt
  position: relative
  width: 100%

.howBetaCmpLaunchBkgLaunch, .howBetaCmpLaunchBkgLaunchLg
  position: absolute
  top: 0
  left: 0
  z-index: 1

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .bkg, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .bkg
  fill: $money-blue-light

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .blob1, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .blob1
  fill: $money-pink

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .blob2, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .blob2
  fill: $money-orange

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .paint, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .paint
  fill: $money-yellow-light

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .date, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .date
  fill: $money-blue-dark

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .launch, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .launch
  fill: $money-pink

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .bulb, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .bulb
  fill: $money-black-dark

.howBetaCmpLaunchText
  font-family: $font-family-montserrat
  color: $money-purple
  text-align: center
  position: absolute
  font-weight: 600
  z-index: 2

@include for-phone
  .howBetaCmpLaunchCnt
    height: 110vw

  .howBetaCmpLaunchBkgLaunch
    display: unset

  .howBetaCmpLaunchBkgLaunchLg
    display: none

  .howBetaCmpLaunchText
    font-size: 5vw
    bottom: 10%
    left: 0

  .howBetaCmpLaunchText4u
    margin-top: 5vw

  .howBetaCmpLaunchContact
    display: none

@include for-tablet
  .howBetaCmpLaunchCnt
    height: 35vw

  .howBetaCmpLaunchBkgLaunch
    display: none

  .howBetaCmpLaunchBkgLaunchLg
    display: unset
    top: -15%

  .howBetaCmpLaunchText
    font-size: 1.25vw
    top: 65%
    left: 40%
    transform: translate(0, -65%)
    text-align: left
    width: 30%

  .howBetaCmpLaunchText4u
    margin-top: 1vw

  .howBetaCmpLaunchContact
    margin-top: 1vw
    display: block

  .howBetaCmpLaunchContactHlt
    color: $money-orange
    font-weight: 600
    text-decoration: none
</style>
