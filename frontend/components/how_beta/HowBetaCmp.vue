<template>
  <div class="howBetaCnt">
    <div class="howBetaCntStack">
      <div class="howBetaHow">
        <div class="howBetaTitle">How does it work?</div>
        <div class="howBetaSubtitle">
          Link your accounts to the TIKI app and
          <b class="howBetaSubtitleHlt">we'll get you paid</b> your fair share
        </div>
      </div>
      <how-beta-cmp-launch class="howBetaCmpLaunch" />
    </div>
    <how-beta-cmp-learn-btn class="howBetaCmpLearnBtn" />
  </div>
</template>

<script>
import HowBetaCmpLearnBtn from '@/components/how_beta/HowBetaCmpLearnBtn'
import HowBetaCmpLaunch from '@/components/how_beta/HowBetaCmpLaunch'

export default {
  name: 'HowBetaCmp',
  components: { HowBetaCmpLaunch, HowBetaCmpLearnBtn },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.howBetaCnt
  position: relative
  background: $blue-xlight
  width: 100%

.howBetaTitle
  margin: 0 auto
  font-family: $font-family-koara
  text-align: center
  color: $purple

.howBetaSubtitle
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center
  color: $purple

.howBetaSubtitleHlt
  font-weight: 600
  color: $orange

.howBetaCmpLaunch
  position: relative

.howBetaCntStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.howBetaCmpLearnBtn
  position: absolute
  z-index: 2

.howBetaHow
  position: relative

@include for-phone
  .howBetaCnt
    height: 215vw

  .howBetaTitle
    width: 56vw
    font-size: 6.5vw

  .howBetaSubtitle
    margin: 5vw auto 0 auto
    width: 83vw
    font-size: 5vw

  .howBetaCmpLaunch
    margin-top: 7vw

  .howBetaCntStack
    padding-top: 80vw

  .howBetaCmpLearnBtn
    top: 58%
    left: 50%
    transform: translate(-50%, -58%)

@include for-tablet
  .howBetaCnt
    height: 62vw

  .howBetaTitle
    width: 20vw
    font-size: 2.25vw

  .howBetaSubtitle
    margin: 2vw auto 0 auto
    width: 83vw
    font-size: 1.25vw

  .howBetaCntStack
    padding-top: 25vw

  .howBetaCmpLaunch
    margin-top: 5vw

  .howBetaCmpLearnBtn
    top: 56%
    left: 50%
    transform: translate(-50%, -56%)
</style>
