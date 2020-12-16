<template>
  <div class="formAffiliateCnt">
    <form-affiliate-cmp-ltd :class="{ formAffiliateHide: isOpt || isDone }" />
    <form-affiliate-cmp-tribe :class="{ formAffiliateHide: !isOpt }" />
    <form-affiliate-cmp-code :class="{ formAffiliateHide: !isAccess }" />
    <form-affiliate-cmp-contact :class="{ formAffiliateHide: !isContact }" />
    <form-affiliate-cmp-opt :class="{ formAffiliateHide: !isOpt }" />
    <form-affiliate-cmp-done :class="{ formAffiliateHide: !isDone }" />
  </div>
</template>

<script>
import FormAffiliateCmpLtd from '@/components/form_affiliate/FormAffiliateCmpLtd'
import FormAffiliateCmpCode from '@/components/form_affiliate/FormAffiliateCmpCode'
import FormAffiliateCmpContact from '@/components/form_affiliate/FormAffiliateCmpContact'
import FormAffiliateCmpTribe from '@/components/form_affiliate/FormAffiliateCmpTribe'
import FormAffiliateCmpOpt from '@/components/form_affiliate/FormAffiliateCmpOpt'
import FormAffiliateCmpDone from '@/components/form_affiliate/FormAffiliateCmpDone'

export default {
  name: 'FormAffiliateCmp',
  components: {
    FormAffiliateCmpCode,
    FormAffiliateCmpContact,
    FormAffiliateCmpLtd,
    FormAffiliateCmpTribe,
    FormAffiliateCmpOpt,
    FormAffiliateCmpDone,
  },
  computed: {
    isAccess() {
      return this.$store.getters['form_affiliate/isPosAccess']
    },
    isContact() {
      return this.$store.getters['form_affiliate/isPosContact']
    },
    isOpt() {
      return this.$store.getters['form_affiliate/isPosOpt']
    },
    isDone() {
      return this.$store.getters['form_affiliate/isPosDone']
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formAffiliateCnt
  position: relative
  background: $yellow-light

.formAffiliateHide
  display: none

@include for-phone
  .formAffiliateCnt
    border-radius: 5vw
    padding: 7vw 5vw

@include for-tablet
  .formAffiliateCnt
    border-radius: 1vw
    padding: 3vw 3vw
</style>
