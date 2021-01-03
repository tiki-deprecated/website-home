<template>
  <div class="form10Cnt">
    <form10-cmp-ltd :class="{ form10Hide: isOpt || isDone }" />
    <form10-cmp-tribe :class="{ form10Hide: !isOpt }" />
    <form10-cmp-contact :class="{ form10Hide: !isContact }" />
    <form10-cmp-opt :class="{ form10Hide: !isOpt }" />
    <form10-cmp-done :class="{ form10Hide: !isDone }" />
  </div>
</template>

<script>
import Form10CmpLtd from '@/components/form_10/Form10CmpLtd'
import Form10CmpContact from '@/components/form_10/Form10CmpContact'
import Form10CmpTribe from '@/components/form_10/Form10CmpTribe'
import Form10CmpOpt from '@/components/form_10/Form10CmpOpt'
import Form10CmpDone from '@/components/form_10/Form10CmpDone'

export default {
  name: 'Form10Cmp',
  components: {
    Form10CmpContact,
    Form10CmpLtd,
    Form10CmpTribe,
    Form10CmpOpt,
    Form10CmpDone,
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

.form10Cnt
  position: relative
  background: $gray-xxlight

.form10Hide
  display: none!important

@include for-phone
  .form10Cnt
    border-radius: 5vw
    padding: 7vw 5vw

@include for-tablet
  .form10Cnt
    border-radius: 1vw
    padding: 1.5vw 1.5vw
</style>
