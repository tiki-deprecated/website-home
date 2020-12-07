<template>
  <div class="mnyFooterCnt">
    <div class="mnyFooterText">© 2020 Tiki Inc.</div>
  </div>
</template>

<script>
export default {
  name: 'MnyFooterCmp',
}
</script>

<style scoped lang="sass">
.mnyFooterCnt
  background: $money-blue-dark
  height: 8vw
  display: flex
  align-items: center

.mnyFooterText
  font-family: $font-family-montserrat
  color: $money-white
  font-size: 4vw
  margin: 0 auto
</style>
