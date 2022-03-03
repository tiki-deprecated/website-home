<template>
  <div class="page">
    <div class="stack">
      <effed-cmp />
      <ctrl-cmp />
      <pain-cmp />
      <wdwd-cmp />
      <own-cmp />
      <strings-cmp />
      <overview-cmp />
      <hiw-cmp />
      <unique-cmp />
      <involved-cmp />
      <utils-footer-cmp />
    </div>
  </div>
</template>

<script>
import EffedCmp from '../components/index/EffedCmp'
import CtrlCmp from '../components/index/CtrlCmp'
import PainCmp from '../components/index/PainCmp'
import WdwdCmp from '../components/index/WdwdCmp'
import OwnCmp from '../components/index/OwnCmp'
import StringsCmp from '../components/index/StringsCmp'
import OverviewCmp from '../components/index/OverviewCmp'
import HiwCmp from '../components/index/HiwCmp'
import UniqueCmp from '../components/index/UniqueCmp'
import InvolvedCmp from '../components/index/InvolvedCmp'
import UtilsFooterCmp from '../components/utils/UtilsFooterCmp'

export default {
  name: 'Index',
  components: {
    UtilsFooterCmp,
    InvolvedCmp,
    UniqueCmp,
    HiwCmp,
    OverviewCmp,
    StringsCmp,
    OwnCmp,
    WdwdCmp,
    PainCmp,
    CtrlCmp,
    EffedCmp,
  },
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
