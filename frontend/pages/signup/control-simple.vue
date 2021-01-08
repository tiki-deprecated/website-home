<template>
  <div class="controlSimplePage">
    <div class="controlSimplePageWrapper">
      <header-simple-cmp
        class="headerSimpleCmp"
        heading="Take back control of your data, with **a single app**."
      />
      <form-simple-cmp class="formSimpleCmp" />
      <notified-cmp class="notifiedCmp" />
    </div>
    <footer-cmp class="footerCmp" />
  </div>
</template>

<script>
import HeaderSimpleCmp from '@/components/header_simple/HeaderSimpleCmp'
import FormSimpleCmp from '@/components/form_simple/FormSimpleCmp'
import NotifiedCmp from '@/components/notified/NotifiedCmp'
import FooterCmp from '@/components/footer/FooterCmp'

export default {
  name: 'ControlSimple',
  components: { HeaderSimpleCmp, FormSimpleCmp, NotifiedCmp, FooterCmp },
}
</script>

<style scoped lang="sass">
.controlSimplePageWrapper
  display: flex
  flex-direction: column
  min-height: 100vh
</style>
