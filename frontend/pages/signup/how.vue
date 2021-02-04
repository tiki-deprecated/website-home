<template>
  <div class="howPage">
    <header-control-cmp class="headerControlCmp" />
    <how-control-cmp class="howControlCmp" />
    <transparency-cmp class="transparencyCmp" />
    <how-sell-cmp class="howSellCmp" />
    <div class="formBetaCmpWrapper">
      <form-beta-cmp class="formBetaCmp" />
    </div>
    <ask-cmp class="askCmp" />
    <footer-cmp class="footerCmp" />
  </div>
</template>

<script>
import HeaderControlCmp from '@/components/header_control/HeaderControlCmp'
import HowControlCmp from '@/components/how_control/HowControlCmp'
import TransparencyCmp from '@/components/transparency/TransparencyCmp'
import HowSellCmp from '@/components/how_sell/HowSellCmp'
import FormBetaCmp from '@/components/form_beta/FormBetaCmp'
import AskCmp from '@/components/ask/AskCmp'
import FooterCmp from '@/components/footer/FooterCmp'

export default {
  name: 'How',
  components: {
    HowControlCmp,
    HeaderControlCmp,
    TransparencyCmp,
    HowSellCmp,
    FormBetaCmp,
    AskCmp,
    FooterCmp,
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formBetaCmpWrapper
  background: $gray-xxlight

@include for-phone
@include for-tablet
  .formBetaCmpWrapper
    width: 100%
    padding: 4vw 0
</style>
