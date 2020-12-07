<template>
  <div class="mnyPageCnt">
    <div class="mnyPageStack">
      <mny-header-cmp class="mnyHeaderCmp" />
      <mny-work-cmp class="mnyWorkCmp" />
      <mny-share-cmp class="mnyShareCmp" />
    </div>
    <mny-signup-cmp class="mnySignupCmp" />
  </div>
</template>

<script>
import MnyHeaderCmp from '@/components/money/MnyHeaderCmp'
import MnyWorkCmp from '@/components/money/MnyWorkCmp'
import MnyShareCmp from '@/components/money/MnyShareCmp'
import MnySignupCmp from '@/components/money/MnySignupCmp'

export default {
  name: 'Money',
  layout: 'tiki',
  components: { MnySignupCmp, MnyShareCmp, MnyWorkCmp, MnyHeaderCmp },
}
</script>

<style scoped lang="sass">
.mnyPageCnt
  position: relative

.mnyPageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1

.mnySignupCmp
  width: 70%
  position: absolute
  z-index: 2
  top: 140%
  left: 50%
  transform: translate(-50%, 140%)
</style>
