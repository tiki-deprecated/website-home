<template>
  <div class="signup">
    <home-signup-ltd-cmp :class="{ signupHide: isOpt || isDone }" />
    <home-signup-tribe-cmp :class="{ signupHide: !isOpt }" />
    <home-signup-contact-cmp :class="{ signupHide: !isContact }" />
    <home-signup-opt-cmp :class="{ signupHide: !isOpt }" />
    <home-signup-done-cmp :class="{ signupHide: !isDone }" />
  </div>
</template>

<script>
import HomeSignupContactCmp from './HomeSignupContactCmp'
import HomeSignupTribeCmp from './HomeSignupTribeCmp'
import HomeSignupDoneCmp from './HomeSignupDoneCmp'
import HomeSignupLtdCmp from './HomeSignupLtdCmp'
import HomeSignupOptCmp from './HomeSignupOptCmp'

export default {
  name: 'FormHomeCmp',
  components: {
    HomeSignupContactCmp,
    HomeSignupTribeCmp,
    HomeSignupDoneCmp,
    HomeSignupLtdCmp,
    HomeSignupOptCmp,
  },
  computed: {
    isContact() {
      return this.$store.getters['form_signup/isPosContact']
    },
    isOpt() {
      return this.$store.getters['form_signup/isPosOpt']
    },
    isDone() {
      return this.$store.getters['form_signup/isPosDone']
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.signup
  position: relative
  background: $yellow

.signupHide
  display: none!important

@include for-phone
  .signup
    padding: 7vw 5vw
    height: 62vw

@include for-tablet
  .signup
    padding: 3vw 3vw
</style>
