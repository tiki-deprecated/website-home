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
.mnyWorkCnt
  position: relative
  background: $money-blue-xlight
  width: 100%
  height: 215vw

.mnyWorkTitle
  margin: 0 auto
  font-family: $font-family-koara
  width: 56vw
  font-size: 6.5vw
  text-align: center
  color: $money-purple

.mnyWorkSubtitle
  margin: 5vw auto 0 auto
  font-family: $font-family-montserrat
  font-weight: 600
  width: 83vw
  font-size: 5vw
  text-align: center
  color: $money-purple

.mnyWorkSubtitleHlt
  font-weight: 600
  color: $money-orange

.mnyWorkBetaCmp
  margin-top: 7vw
  position: relative

.mnyWorkCntStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%
  padding-top: 80vw

.mnyWorkLearnBtnCmp
  position: absolute
  top: 58%
  left: 50%
  z-index: 2
  transform: translate(-50%, -58%)

.mnyWorkHow
  position: relative
</style>
