<template>
  <div class="headerControlCmpFormCnt">
    <header-control-cmp-form-join
      :class="{ headerControlCmpFormHide: !isContact }"
    />
    <header-control-cmp-form-tribe
      :class="{ headerControlCmpFormHide: !isOpt }"
    />
    <header-control-cmp-form-contact
      :cta="cta"
      :class="{ headerControlCmpFormHide: !isContact }"
    />
    <header-control-cmp-form-opt
      :class="{ headerControlCmpFormHide: !isOpt }"
    />
    <header-control-cmp-form-done
      :class="{ headerControlCmpFormHide: !isDone }"
    />
  </div>
</template>

<script>
import HeaderControlCmpFormContact from '@/components/header_control/HeaderControlCmpFormContact'
import HeaderControlCmpFormTribe from '@/components/header_control/HeaderControlCmpFormTribe'
import HeaderControlCmpFormOpt from '@/components/header_control/HeaderControlCmpFormOpt'
import HeaderControlCmpFormDone from '@/components/header_control/HeaderControlCmpFormDone'
import HeaderControlCmpFormJoin from '@/components/header_control/HeaderControlCmpFormJoin'

export default {
  name: 'HeaderControlCmpForm',
  components: {
    HeaderControlCmpFormContact,
    HeaderControlCmpFormTribe,
    HeaderControlCmpFormOpt,
    HeaderControlCmpFormDone,
    HeaderControlCmpFormJoin,
  },
  props: {
    cta: {
      type: String,
      required: false,
      default: 'I want to control my data',
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

.headerControlCmpFormCnt
  position: relative
  width: 100%
  background: $white

.headerControlCmpFormHide
  display: none!important

@include for-phone
  .headerControlCmpFormCnt
    margin: 5vh auto 5vh auto

@include for-tablet
  .headerControlCmpFormCnt
    margin: 1.5vw auto 1.5vw auto
    border-radius: 0.5vw
    padding: 2vw
    height: 16vw
</style>
