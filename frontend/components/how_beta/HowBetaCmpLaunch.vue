<template>
  <div class="howBetaCmpLaunchCnt">
    <utils-svg-cmp name="background/launch" class="howBetaCmpLaunchBkgLaunch" />
    <utils-svg-cmp
      name="background/launch-lg"
      class="howBetaCmpLaunchBkgLaunchLg"
    />
    <div class="howBetaCmpLaunchText">
      <div class="howBetaCmpLaunchText4u">
        We need your help, your feedback, your ideas, your passion, your
        concerns.
      </div>
      <div class="howBetaCmpLaunchContact">
        <div>
          You can leave feedback
          <a
            href="https://feedback.mytiki.com/"
            class="howBetaCmpLaunchContactHlt"
            >on our roadmap here.</a
          >
        </div>

        <div class="howBetaCmpLaunchContact">
          Join our community on
          <a
            href="https://discord.com/invite/evjYQq48Be"
            class="howBetaCmpLaunchContactHlt"
            >Discord,</a
          >
          <a href="https://t.me/mytikiapp" class="howBetaCmpLaunchContactHlt"
            >Telegram</a
          >
          or
          <a
            href="https://signal.group/#CjQKIA66Eq2VHecpcCd-cu-dziozMRSH3EuQdcZJNyMOYNi5EhC0coWtjWzKQ1dDKEjMqhkP"
            class="howBetaCmpLaunchContactHlt"
            >Signal</a
          >
          or message us on social to chat to us.
        </div>
      </div>
      <div class="believeButtons">
        <a
          href="https://feedback.mytiki.com/"
          class="believeJoin"
          target="_blank"
        >
          <div class="believeJoinText">Feedback</div>
          <utils-svg-cmp name="sketch/arrow" class="believeJoinArrow" />
        </a>
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
  top: 20
  left: 0
  z-index: 1

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .bkg, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .bkg
  fill: $blue-light

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .blob1, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .blob1
  fill: $pink

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .blob2, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .blob2
  fill: $orange

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .paint, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .paint
  fill: $yellow-light

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .date, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .date
  fill: $blue-dark

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .launch, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .launch
  fill: $pink

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .bulb, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .bulb
  fill: $black-dark


.howBetaCmpLaunchText
  font-family: $font-family-montserrat
  color: $purple
  text-align: center
  position: absolute
  font-weight: 600
  z-index: 2

.believeValue, .believeJoin
  background: $blue-dark
  margin: 0 auto
  display: flex
  width: 100%
  align-items: center
  justify-content: center

.believeValue:hover, .believeJoin:hover
  background: $blue-dark-hlt

.believeValue, .believeJoin, .believeValue:hover, .believeJoin:hover, .believeValue:visited, .believeJoin:visited, .believeValue:link, .believeJoin:link, .believeValue:active, .believeJoin:active
  text-decoration: none

.believeValueText, .believeJoinText
  font-family: $font-family-koara
  color: $blue-light
  width: 100%
  text-align: left

.believeValueText, .believeJoinText, .believeValueText:hover, .believeJoinText:hover, .believeValueText:visited, .believeJoinText:visited, .believeValueText:link, .believeJoinText:link, .believeValueText:active, .believeJoinText:active
  text-decoration: none

::v-deep .believeValueArrow.svg, ::v-deep .believeJoinArrow.svg
  fill: $blue-light

@include for-phone
  .believeButtons
    margin: 5vw 0

  .howBetaCmpLaunchCnt
    height: 110vw

  .howBetaCmpLaunchBkgLaunch
    display: unset

  .howBetaCmpLaunchBkgLaunchLg
    display: none

  .howBetaCmpLaunchText
    font-size: 5vw
    bottom: -10%
    left: 0

  .howBetaCmpLaunchText4u
    display: none

  .howBetaCmpLaunchContact
    margin-top: 5vw

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

  .believeButtons
    display: flex
    margin-top: 2vw
    align-items: center
    justify-content: center

  .howBetaCmpLaunchCnt
    height: 35vw

  .howBetaCmpLaunchBkgLaunch
    display: none

  .howBetaCmpLaunchBkgLaunchLg
    display: unset
    top: 5%

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
    color: $orange
    font-weight: 600
    text-decoration: none
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
