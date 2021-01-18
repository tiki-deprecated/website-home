<template>
  <div class="formBetaCnt">
    <form-beta-cmp-join :class="{ formBetaHide: !isContact }" />
    <form-beta-cmp-tribe :class="{ formBetaHide: !isOpt }" />
    <form-beta-cmp-contact
      :cta="cta"
      :class="{ formBetaHide: !isContact }"
      :how="how"
    />
    <form-beta-cmp-opt :class="{ formBetaHide: !isOpt }" />
    <form-beta-cmp-done :class="{ formBetaHide: !isDone }" />
  </div>
</template>

<script>
import FormBetaCmpContact from '@/components/form_beta/FormBetaCmpContact'
import FormBetaCmpTribe from '@/components/form_beta/FormBetaCmpTribe'
import FormBetaCmpOpt from '@/components/form_beta/FormBetaCmpOpt'
import FormBetaCmpDone from '@/components/form_beta/FormBetaCmpDone'
import FormBetaCmpJoin from '@/components/form_beta/FormBetaCmpJoin'

export default {
  name: 'FormBetaCmp',
  components: {
    FormBetaCmpContact,
    FormBetaCmpTribe,
    FormBetaCmpOpt,
    FormBetaCmpDone,
    FormBetaCmpJoin,
  },
  props: {
    cta: {
      type: String,
      required: false,
      default: 'I want to control my data',
    },
    how: {
      type: Boolean,
      required: false,
      default: true,
    },
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

.formBetaCnt
  position: relative
  background: $white

.formBetaHide
  display: none!important

@include for-phone
  .formBetaCnt
    margin: 5vh auto 5vh auto

@include for-tablet
  .formBetaCnt
    margin: 0 auto
    padding: 2vw
    width: 30%
    border-radius: 1vw
    height: 13vw
</style>
