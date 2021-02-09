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
      <div class="howBetaCmpLaunchContact">
        <div>
          You can leave feedback on our
          <a
            href="https://feedback.mytiki.com/"
            class="howBetaCmpLaunchContactHlt"
            >roadmap
          </a>
          here.
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
      <div class="howBetaCmpLaunchBtn">
        <a
          href="https://feedback.mytiki.com/"
          target="_blank"
          class="howBetaCmpLaunchBtnCnt"
        >
          <div class="howBetaCmpLaunchBtnText">Feedback</div>
          <utils-svg-cmp name="sketch/arrow" class="howBetaCmpLaunchBtnArrow" />
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
  top: 0
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

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .text, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .text
  fill: $blue-dark

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .live, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .live
  fill: $pink

::v-deep .howBetaCmpLaunchBkgLaunch.svg > .bulb, ::v-deep .howBetaCmpLaunchBkgLaunchLg.svg > .bulb
  fill: $black-dark

.howBetaCmpLaunchBtnCnt
  background: $blue-dark
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.howBetaCmpLaunchText
  font-family: $font-family-montserrat
  color: $purple
  text-align: center
  position: absolute
  font-weight: 600
  z-index: 2

.howBetaCmpLaunchBtnText
  font-family: $font-family-koara
  color: $blue-light
  text-align: right

.howBetaCmpLaunchBtnCnt, .howBetaCmpLaunchBtnCnt:hover, .howBetaCmpLaunchBtnCnt:visited, .howBetaCmpLaunchBtnCnt:link, .howBetaCmpLaunchBtnCnt:active
  text-decoration: none

::v-deep .howBetaCmpLaunchBtnArrow.svg
  fill: $blue-light

@include for-phone
  .howBetaCmpLaunchCnt
    height: 110vw

  .howBetaCmpLaunchBkgLaunch
    display: unset

  .howBetaCmpLaunchBkgLaunchLg
    display: none

  .howBetaCmpLaunchText
    font-size: 5vw
    bottom: 0
    left: 0

  .howBetaCmpLaunchContact
    margin-top: 5vw
    display: none

  .howBetaCmpLaunchBtn
    margin: 5vw 0

  .howBetaCmpLaunchBtnCnt
    height: 14vw
    border-radius: 4vw
    width: 60%
    margin: 2vw auto

  .howBetaCmpLaunchBtnText
    font-size: 5.5vw
    width: 53%

  .howBetaCmpLaunchBtnArrow
    margin-left: 14%

  ::v-deep .howBetaCmpLaunchBtnArrow.svg
    height: 50%

@include for-tablet
  .howBetaCmpLaunchCnt
    height: 35vw

  .howBetaCmpLaunchBkgLaunch
    display: none

  .howBetaCmpLaunchBkgLaunchLg
    display: unset

  .howBetaCmpLaunchText
    font-size: 1.25vw
    top: 65%
    left: 40%
    transform: translate(0, -65%)
    text-align: left
    width: 30%

  .howBetaCmpLaunchContact
    margin-top: 1vw
    display: block

  .howBetaCmpLaunchContactHlt
    color: $orange
    font-weight: 600
    text-decoration: none

  .howBetaCmpLaunchBtn
    margin: 3vw 0
    width: 100%

  .howBetaCmpLaunchBtnCnt
    height: 3vw
    border-radius: 0.75vw
    width: 50%
    margin: 0 auto

  .howBetaCmpLaunchBtnText
    font-size: 1.25vw
    width: 55%

  .howBetaCmpLaunchBtnArrow
    margin-left: 15%

  ::v-deep .howBetaCmpLaunchBtnArrow.svg
    height: 50%
</style>
