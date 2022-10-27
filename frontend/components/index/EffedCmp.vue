<template>
  <div class="effed">
    <div class="textContainer">
      <div class="line1">The internet is fucked.</div>
      <div class="line2">Together we can fix it.</div>
    </div>

    <div class="signupContainer">
      <nuxt-link
        v-scroll-to="{ el: '#signup' }"
        :to="{ path: '/', hash: 'signup' }"
        class="signupButtonText"
        >Join the beta app
      </nuxt-link>
    </div>

    <div class="arrowContainer">
      <utils-svg-cmp name="arrow-down" class="arrow" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'EffedCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.signupButtonText, .signupButtonText:hover, .signupButtonText:link, .signupButtonText:visited, .signupButtonText:active
  color: $orange
  font-family: $font-family-nunito-sans
  font-weight: 600
  text-decoration: none

.effed
  background: $white
  position: relative
  width: 100%
  height: 100vh
  font-family: $font-family-courier

.line1
  overflow: hidden
  color: $tiki-black
  border-right: 2px solid $tiki-black
  font-size: 6.8vw
  width: 0
  white-space: nowrap
  animation: typing1 3.5s steps(23, end) forwards, blink1 .75s 5

.line2
  overflow: hidden
  color: $green
  border-right: 2px solid transparent
  width: 0
  white-space: nowrap
  animation: typing2 5s steps(23, end) forwards, blink2 .75s 7

.textContainer
  display: inline-block
  width: auto
  margin: 0
  position: absolute
  top: 50%
  left: 50%
  -ms-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)

.arrowContainer
  margin: 0
  position: absolute
  top: 80%
  left: 50%
  align-items: center
  -ms-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)

.signupContainer
  margin: 0
  position: absolute
  animation: signup 8s forwards

::v-deep .arrow.svg
  align: right
  text-align: center
  fill: $tiki-black
  animation: arrow 8s forwards

@keyframes blink1
  from
    border-color: transparent
  to
    border-color: $tiki-black

@keyframes blink2
  from
    border-color: transparent
  to
    border-color: $green

@keyframes arrow
  from
    fill: transparent
  90%
    fill: transparent
  to
    fill: $tiki-black

@keyframes signup
  from
    opacity: 0
  90%
    opacity: 0
  to
    opacity: 1.0

@include for-phone
  ::v-deep .arrow.svg
    height: 4vh

  .line1, .line2
    font-size: 6.8vw

  .signupContainer
    top: 2%
    right: 5%

  .signupButtonText
    font-size: 5.25vw

  @keyframes typing1
    from
      height: 7.8vw
      width: 0
    20%
      height: 7.8vw
      width: 100%
    95%
      height: 7.8vw
      width: 100%
    99%
      height: 7.8vw
      width: 0
    to
      height: 0
      width: 0

  @keyframes typing2
    from
      height: 0
      width: 0
    72%
      height: 0
      width: 0
    73%
      height: 7.8vw
      width: 0
    to
      height: 7.8vw
      width: 100%

@include for-tablet
  ::v-deep .arrow.svg
    height: 5vh

  .line1, .line2
    font-size: 4vw

  .signupButtonText
    font-size: 1.25vw

  .signupContainer
    top: 5%
    right: 3%

  @keyframes typing1
    from
      height: 5vw
      width: 0
    20%
      height: 5vw
      width: 100%
    95%
      height: 5vw
      width: 100%
    99%
      height: 5vw
      width: 0
    to
      height: 0
      width: 0

  @keyframes typing2
    from
      height: 0
      width: 0
    72%
      height: 0
      width: 0
    73%
      height: 5vw
      width: 0
    to
      height: 5vw
      width: 100%
</style>
