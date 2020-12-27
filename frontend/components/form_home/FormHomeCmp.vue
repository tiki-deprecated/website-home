<template>
  <div class="formHomeCnt">
    <form-home-cmp-ltd :class="{ formHomeHide: isOpt || isDone }" />
    <form-home-cmp-tribe :class="{ formHomeHide: !isOpt }" />
    <form-home-cmp-contact :class="{ formHomeHide: !isContact }" />
    <form-home-cmp-opt :class="{ formHomeHide: !isOpt }" />
    <form-home-cmp-done :class="{ formHomeHide: !isDone }" />
  </div>
</template>

<script>
import FormHomeCmpLtd from '@/components/form_home/FormHomeCmpLtd'
import FormHomeCmpContact from '@/components/form_home/FormHomeCmpContact'
import FormHomeCmpTribe from '@/components/form_home/FormHomeCmpTribe'
import FormHomeCmpOpt from '@/components/form_home/FormHomeCmpOpt'
import FormHomeCmpDone from '@/components/form_home/FormHomeCmpDone'

export default {
  name: 'FormHomeCmp',
  components: {
    FormHomeCmpLtd,
    FormHomeCmpContact,
    FormHomeCmpTribe,
    FormHomeCmpOpt,
    FormHomeCmpDone,
  },
  computed: {
    isContact() {
      return this.$store.getters['form_home/isPosContact']
    },
    isOpt() {
      return this.$store.getters['form_home/isPosOpt']
    },
    isDone() {
      return this.$store.getters['form_home/isPosDone']
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formHomeCnt
  position: relative
  background: $yellow

.formHomeHide
  display: none!important

@include for-phone
  .formHomeCnt
    padding: 7vw 5vw

@include for-tablet
  .formHomeCnt
    padding: 3vw 3vw
</style>
