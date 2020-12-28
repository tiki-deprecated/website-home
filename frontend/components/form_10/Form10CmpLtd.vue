<template>
  <div class="form10CmpLtdCnt">
    <utils-svg-cmp name="sketch/signup" class="form10CmpLtdSketch" />
    <div class="form10CmpLtdText">
      <b>Beta access</b> is limited to make sure everyone gets their fair share.
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'Form10CmpLtd',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.form10CmpLtdText
  font-family: $font-family-nunito
  color: $blue-dark

@include for-phone
  ::v-deep .form10CmpLtdSketch.svg
    height: 9vw

  .form10CmpLtdText
    margin-top: 5vw
    font-size: 4vw

@include for-tablet
  ::v-deep .form10CmpLtdSketch.svg
    height: 3vw
    margin: 0 auto 1vw auto

  .form10CmpLtdText
    font-size: 1.25vw
    text-align: center
</style>
