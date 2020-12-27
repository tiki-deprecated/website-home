<template>
  <div class="launchTipCnt">
    <div class="launchTipText">
      The TIKI app is launching its
      <b class="launchTipTextHlt">private Beta</b> in January.
    </div>
    <div class="launchTipTextTip">
      (Tip: our Beta is only open to a limited number of subscribers, so make
      sure to sign up!)
    </div>
  </div>
</template>

<script>
export default {
  name: 'LaunchTipCmp',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.launchTipCnt
  background: $blue-light

.launchTipText
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center
  margin: 0 auto
  color: $blue-dark

.launchTipTextTip
  font-family: $font-family-montserrat
  color: $blue-dark
  text-align: center

.launchTipTextHlt
  font-weight: 600
  color: $red

@include for-phone
  .launchTipCnt
    height: 34vw
    padding-top: 20vw
    padding-bottom: 4vw

  .launchTipText
    width: 80%
    font-size: 5vw

  .launchTipTextTip
    margin: 6vw auto 0 auto
    font-size: 4vw
    width: 80%

@include for-tablet
  .launchTipCnt
    height: 8vw
    padding-top: 7vw
    padding-bottom: 2vw

  .launchTipText
    width: 32%
    font-size: 1.5vw

  .launchTipTextTip
    margin: 1.5vw auto 0 auto
    font-size: 1vw
    width: 32%
</style>
