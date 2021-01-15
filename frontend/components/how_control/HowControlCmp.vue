<template>
  <div class="howControlCnt">
    <how-control-cmp-take class="howControlCmpTake" />
    <how-control-cmp-risk class="howControlCmpRisk" />
  </div>
</template>

<script>
import HowControlCmpRisk from '@/components/how_control/HowControlCmpRisk'
import HowControlCmpTake from '@/components/how_control/HowControlCmpTake'

export default {
  name: 'HowControlCmp',
  components: { HowControlCmpRisk, HowControlCmpTake },
}
</script>

<style scoped lang="sass"></style>
