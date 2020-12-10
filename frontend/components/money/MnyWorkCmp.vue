<template>
  <div class="mnyWorkCnt">
    <div class="mnyWorkCntStack">
      <div class="mnyWorkHow">
        <div class="mnyWorkTitle">How does it work?</div>
        <div class="mnyWorkSubtitle">
          Link your accounts to the TIKI app and
          <b class="mnyWorkSubtitleHlt">we'll get you paid</b> your fair share
        </div>
      </div>
      <mny-work-beta-cmp class="mnyWorkBetaCmp" />
    </div>
    <mny-work-learn-btn-cmp class="mnyWorkLearnBtnCmp" />
  </div>
</template>

<script>
import MnyWorkLearnBtnCmp from '@/components/money/MnyWorkLearnBtnCmp'
import MnyWorkBetaCmp from '@/components/money/MnyWorkBetaCmp'

export default {
  name: 'MnyWorkCmp',
  components: { MnyWorkBetaCmp, MnyWorkLearnBtnCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnyWorkCnt
  position: relative
  background: $money-blue-xlight
  width: 100%

.mnyWorkTitle
  margin: 0 auto
  font-family: $font-family-koara
  text-align: center
  color: $money-purple

.mnyWorkSubtitle
  font-family: $font-family-montserrat
  font-weight: 600
  text-align: center
  color: $money-purple

.mnyWorkSubtitleHlt
  font-weight: 600
  color: $money-orange

.mnyWorkBetaCmp
  position: relative

.mnyWorkCntStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.mnyWorkLearnBtnCmp
  position: absolute
  z-index: 2

.mnyWorkHow
  position: relative

@include for-phone
  .mnyWorkCnt
    height: 215vw

  .mnyWorkTitle
    width: 56vw
    font-size: 6.5vw

  .mnyWorkSubtitle
    margin: 5vw auto 0 auto
    width: 83vw
    font-size: 5vw

  .mnyWorkBetaCmp
    margin-top: 7vw

  .mnyWorkCntStack
    padding-top: 80vw

  .mnyWorkLearnBtnCmp
    top: 58%
    left: 50%
    transform: translate(-50%, -58%)

@include for-tablet
  .mnyWorkCnt
    height: 45vw

  .mnyWorkTitle
    width: 20vw
    font-size: 2.25vw

  .mnyWorkSubtitle
    margin: 2vw auto 0 auto
    width: 83vw
    font-size: 1.25vw

  .mnyWorkCntStack
    padding-top: 20vw

  .mnyWorkLearnBtnCmp
    top: 68%
    left: 50%
    transform: translate(-50%, -68%)
</style>
