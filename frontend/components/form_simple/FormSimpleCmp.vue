<template>
  <div class="formSimpleCnt">
    <formSimple-cmp-tribe :class="{ formSimpleHide: !isOpt }" />
    <formSimple-cmp-contact
      :cta="cta"
      :class="{ formSimpleHide: !isContact }"
      :how="how"
    />
    <formSimple-cmp-opt :class="{ formSimpleHide: !isOpt }" />
    <formSimple-cmp-done :class="{ formSimpleHide: !isDone }" />
  </div>
</template>

<script>
import FormSimpleCmpContact from '@/components/form_simple/FormSimpleCmpContact'
import FormSimpleCmpTribe from '@/components/form_simple/FormSimpleCmpTribe'
import FormSimpleCmpOpt from '@/components/form_simple/FormSimpleCmpOpt'
import FormSimpleCmpDone from '@/components/form_simple/FormSimpleCmpDone'

export default {
  name: 'FormSimpleCmp',
  components: {
    FormSimpleCmpContact,
    FormSimpleCmpTribe,
    FormSimpleCmpOpt,
    FormSimpleCmpDone,
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

.formSimpleCnt
  position: relative
  width: 100%

.formSimpleHide
  display: none!important

@include for-phone
  .formSimpleCnt
    margin: 5vh auto 5vh auto

@include for-tablet
  .formSimpleCnt
    margin: 1.5vw auto 1.5vw auto
</style>
