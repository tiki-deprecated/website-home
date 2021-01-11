<template>
  <div class="howPage">
    <header-control-cmp class="headerControlCmp" />
    <how-control-cmp class="howControlCmp" />
    <transparency-cmp class="transparencyCmp" />
  </div>
</template>

<script>
import HeaderControlCmp from '@/components/header_control/HeaderControlCmp'
import HowControlCmp from '@/components/how_control/HowControlCmp'
import TransparencyCmp from '@/components/transparency/TransparencyCmp'

export default {
  name: 'How',
  components: { HowControlCmp, HeaderControlCmp, TransparencyCmp },
}
</script>

<style scoped lang="sass"></style>
