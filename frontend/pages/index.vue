<template>
  <div class="page">
    <div class="stack">
      <effed-cmp />
      <ctrl-cmp />
      <pain-cmp />
    </div>
  </div>
</template>

<script>
import EffedCmp from '../components/index/EffedCmp'
import CtrlCmp from '../components/index/CtrlCmp'
import PainCmp from '../components/index/PainCmp'

export default {
  name: 'Index',
  components: { PainCmp, CtrlCmp, EffedCmp },
  mounted() {
    this.$plausible.trackPageview()
    this.$store.commit('setCode', this.$nuxt.$route.query.code)
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.page
  width: 100%
  position: relative

.stack
  position: absolute
  top: 0
  left: 0
  width: 100%
  z-index: 1

@include for-phone

@include for-tablet
</style>
