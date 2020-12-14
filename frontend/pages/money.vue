<template>
  <div class="mnyPageCnt">
    <div class="mnyPageStack">
      <mny-header-cmp class="mnyHeaderCmp" />
      <mny-work-cmp class="mnyWorkCmp" />
      <mny-share-cmp class="mnyShareCmp" />
      <mny-footer-cmp class="mnyFooterCmp" />
    </div>
    <mny-signup-cmp class="mnySignupCmp" />
    <mny-popup-data-cmp class="mnyPopupDataCmp" />
  </div>
</template>

<script>
import MnyHeaderCmp from '@/components/money/MnyHeaderCmp'
import MnyWorkCmp from '@/components/money/MnyWorkCmp'
import MnyShareCmp from '@/components/money/MnyShareCmp'
import MnySignupCmp from '@/components/money/MnySignupCmp'
import MnyFooterCmp from '@/components/money/MnyFooterCmp'
import MnyPopupDataCmp from '@/components/money/MnyPopupDataCmp'

export default {
  name: 'Money',
  layout: 'tiki',
  components: {
    MnyFooterCmp,
    MnySignupCmp,
    MnyShareCmp,
    MnyWorkCmp,
    MnyHeaderCmp,
    MnyPopupDataCmp,
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnyPageCnt
  position: relative

.mnyPageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.mnySignupCmp
  position: absolute
  z-index: 2

.mnyPopupDataCmp
  position: fixed
  z-index: 9

@include for-phone
  .mnySignupCmp
    width: 70%
    top: 140%
    left: 50%
    transform: translate(-50%, 140%)
    height: 65vw

@include for-tablet
  .mnySignupCmp
    width: 50%
    top: 155%
    left: 50%
    transform: translate(-50%, 155%)
    height: 14.7vw
</style>
