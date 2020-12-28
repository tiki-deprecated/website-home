<template>
  <div class="form382Cnt">
    <form382-cmp-ltd :class="{ form382Hide: isOpt || isDone }" />
    <form382-cmp-tribe :class="{ form382Hide: !isOpt }" />
    <form382-cmp-contact :class="{ form382Hide: !isContact }" />
    <form382-cmp-opt :class="{ form382Hide: !isOpt }" />
    <form382-cmp-done :class="{ form382Hide: !isDone }" />
  </div>
</template>

<script>
import Form382CmpLtd from '@/components/form_382/Form382CmpLtd'
import Form382CmpContact from '@/components/form_382/Form382CmpContact'
import Form382CmpTribe from '@/components/form_382/Form382CmpTribe'
import Form382CmpOpt from '@/components/form_382/Form382CmpOpt'
import Form382CmpDone from '@/components/form_382/Form382CmpDone'

export default {
  name: 'Form382Cmp',
  components: {
    Form382CmpContact,
    Form382CmpLtd,
    Form382CmpTribe,
    Form382CmpOpt,
    Form382CmpDone,
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

.form382Cnt
  position: relative
  background: $yellow-light

.form382Hide
  display: none!important

@include for-phone
  .form382Cnt
    border-radius: 5vw
    padding: 7vw 5vw

@include for-tablet
  .form382Cnt
    border-radius: 1vw
    padding: 3vw 3vw
</style>
