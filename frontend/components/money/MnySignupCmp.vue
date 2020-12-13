<template>
  <div class="mnySignupCnt">
    <mny-signup-ltd-cmp :class="{ mnySignupHide: isOpt || isDone }" />
    <mny-signup-tribe-cmp :class="{ mnySignupHide: !isOpt }" />
    <mny-signup-access-cmp
      :class="{ mnySignupHide: !isAccess }"
      @signupAccessCode="onSignupAccessCode($event)"
    />
    <mny-signup-contact-cmp
      :class="{ mnySignupHide: !isContact }"
      @signupContact="onSignupContact($event)"
    />
    <mny-signup-opt-cmp
      :class="{ mnySignupHide: !isOpt }"
      @signupOpt="onSignupOpt($event)"
    />
    <mny-signup-done-cmp :opt="opt" :class="{ mnySignupHide: !isDone }" />
  </div>
</template>

<script>
import MnySignupLtdCmp from '~/components/money/MnySignupLtdCmp'
import MnySignupAccessCmp from '~/components/money/MnySignupAccessCmp'
import MnySignupContactCmp from '~/components/money/MnySignupContactCmp'
import MnySignupTribeCmp from '~/components/money/MnySignupTribeCmp'
import MnySignupOptCmp from '~/components/money/MnySignupOptCmp'
import MnySignupDoneCmp from '~/components/money/MnySignupDoneCmp'

const STATE_ACCESS = 'access'
const STATE_CONTACT = 'contact'
const STATE_OPT = 'opt'
const STATE_DONE = 'done'

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
  data() {
    return {
      state: STATE_ACCESS,
      code: '',
      contact: '',
      opt: '',
    }
  },
  computed: {
    isAccess() {
      return this.state === STATE_ACCESS
    },
    isContact() {
      return this.state === STATE_CONTACT
    },
    isOpt() {
      return this.state === STATE_OPT
    },
    isDone() {
      return this.state === STATE_DONE
    },
  },
  methods: {
    onSignupAccessCode(code) {
      console.log('emitted code: ' + code)
      this.code = code
      this.state = STATE_CONTACT
    },
    onSignupContact(contact) {
      console.log('emitted contact: ' + contact)
      this.contact = contact
      this.state = STATE_OPT
    },
    onSignupOpt(opt) {
      console.log('emitted opt: ' + opt)
      this.opt = opt
      this.state = STATE_DONE
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
