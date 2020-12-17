<template>
  <div class="formSignupCnt">
    <form-signup-cmp-ltd :class="{ formSignupHide: isOpt || isDone }" />
    <form-signup-cmp-tribe :class="{ formSignupHide: !isOpt }" />
    <form-signup-cmp-contact :class="{ formSignupHide: !isContact }" />
    <form-signup-cmp-opt :class="{ formSignupHide: !isOpt }" />
    <form-signup-cmp-done :class="{ formSignupHide: !isDone }" />
  </div>
</template>

<script>
import FormSignupCmpLtd from '@/components/form_signup/FormSignupCmpLtd'
import FormSignupCmpContact from '@/components/form_signup/FormSignupCmpContact'
import FormSignupCmpTribe from '@/components/form_signup/FormSignupCmpTribe'
import FormSignupCmpOpt from '@/components/form_signup/FormSignupCmpOpt'
import FormSignupCmpDone from '@/components/form_signup/FormSignupCmpDone'

export default {
  name: 'FormSignupCmp',
  components: {
    FormSignupCmpLtd,
    FormSignupCmpContact,
    FormSignupCmpTribe,
    FormSignupCmpOpt,
    FormSignupCmpDone,
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
@import "../../assets/styles/mixins"

.formSignupCnt
  position: relative
  background: $yellow

.formSignupHide
  display: none!important

@include for-phone
  .formSignupCnt
    padding: 7vw 5vw

@include for-tablet
  .formSignupCnt
    padding: 3vw 3vw
</style>
