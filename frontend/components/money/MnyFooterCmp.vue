<template>
  <div class="mnyFooterCnt">
    <div class="mnyFooterText">© 2020 TIKI Inc.</div>
  </div>
</template>

<script>
export default {
  name: 'MnyFooterCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnyFooterCnt
  background: $money-blue-dark
  display: flex
  align-items: center

.mnyFooterText
  font-family: $font-family-montserrat
  color: $money-white
  margin: 0 auto

@include for-phone
  .mnyFooterCnt
    height: 8vw

  .mnyFooterText
    font-size: 4vw

@include for-tablet
  .mnyFooterCnt
    height: 2vw

  .mnyFooterText
    font-size: 1vw
</style>
