<template>
  <div class="mnySignupCnt">
    <mny-signup-ltd-cmp :class="{ mnySignupHide: isOpt || isDone }" />
    <mny-signup-tribe-cmp :class="{ mnySignupHide: !isOpt }" />
    <mny-signup-access-cmp :class="{ mnySignupHide: !isAccess }" />
    <mny-signup-contact-cmp :class="{ mnySignupHide: !isContact }" />
    <mny-signup-opt-cmp :class="{ mnySignupHide: !isOpt }" />
    <mny-signup-done-cmp :class="{ mnySignupHide: !isDone }" />
  </div>
</template>

<script>
import MnySignupLtdCmp from '~/components/money/MnySignupLtdCmp'
import MnySignupAccessCmp from '~/components/money/MnySignupAccessCmp'
import MnySignupContactCmp from '~/components/money/MnySignupContactCmp'
import MnySignupTribeCmp from '~/components/money/MnySignupTribeCmp'
import MnySignupOptCmp from '~/components/money/MnySignupOptCmp'
import MnySignupDoneCmp from '~/components/money/MnySignupDoneCmp'

export default {
  name: 'MnySignupCmp',
  components: {
    MnySignupAccessCmp,
    MnySignupContactCmp,
    MnySignupLtdCmp,
    MnySignupTribeCmp,
    MnySignupOptCmp,
    MnySignupDoneCmp,
  },
  computed: {
    isAccess() {
      return this.$store.getters['signup/isPosAccess']
    },
    isContact() {
      return this.$store.getters['signup/isPosContact']
    },
    isOpt() {
      return this.$store.getters['signup/isPosOpt']
    },
    isDone() {
      return this.$store.getters['signup/isPosDone']
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnySignupCnt
  position: relative
  background: $money-yellow-light

.mnySignupHide
  display: none

@include for-phone
  .mnySignupCnt
    border-radius: 5vw
    padding: 7vw 5vw

@include for-tablet
  .mnySignupCnt
    border-radius: 1vw
    padding: 3vw 3vw
</style>
