<template>
  <div class="betaText">
    <div>
      We need your help, your feedback, your ideas, your passion, your concerns.
    </div>
    <div class="section">
      <div>
        You can leave feedback on our
        <a href="https://feedback.mytiki.com/" class="highlight">roadmap </a>
        here.
      </div>
      <div class="section">
        Join our community on
        <a href="https://discord.com/invite/evjYQq48Be" class="highlight"
          >Discord,</a
        >
        <a href="https://t.me/mytikiapp" class="highlight">Telegram</a>
        or
        <a
          href="https://signal.group/#CjQKIA66Eq2VHecpcCd-cu-dziozMRSH3EuQdcZJNyMOYNi5EhC0coWtjWzKQ1dDKEjMqhkP"
          class="highlight"
          >Signal</a
        >
        or message us on social to chat to us.
      </div>
    </div>
    <div class="btnContainer">
      <a href="https://feedback.mytiki.com/" target="_blank" class="btn">
        <div class="btnText">Feedback</div>
        <utils-svg-cmp name="utils/arrow" class="btnArrow" />
      </a>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeBetaTextCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.btn
  background: $blue-dark
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.betaText
  font-family: $font-family-montserrat
  color: $purple
  text-align: center
  position: absolute
  font-weight: 600
  z-index: 2

.btnText
  font-family: $font-family-koara
  color: $blue-light
  text-align: right

.btn, .btn:hover, .btn:visited, .btn:link, .btn:active
  text-decoration: none

::v-deep .btnArrow.svg
  fill: $blue-light

@include for-phone
  .betaText
    font-size: 5vw
    bottom: 0
    left: 0

  .section
    margin-top: 5vw
    display: none

  .btnContainer
    margin: 5vw 0

  .btn
    height: 14vw
    border-radius: 4vw
    width: 60%
    margin: 2vw auto

  .btnText
    font-size: 5.5vw
    width: 53%

  .btnArrow
    margin-left: 14%

  ::v-deep .btnArrow.svg
    height: 50%

@include for-tablet
  .betaText
    font-size: 1.25vw
    top: 65%
    left: 40%
    transform: translate(0, -65%)
    text-align: left
    width: 30%

  .section
    margin-top: 1vw
    display: block

  .highlight
    color: $orange
    font-weight: 600
    text-decoration: none

  .btnContainer
    margin: 3vw 0
    width: 100%

  .btn
    height: 3vw
    border-radius: 0.75vw
    width: 50%
    margin: 0 auto

  .btnText
    font-size: 1.25vw
    width: 55%

  .btnArrow
    margin-left: 15%

  ::v-deep .btnArrow.svg
    height: 50%
</style>
