<template>
  <div class="footerCnt">
    <div class="footerText">© 2020 TIKI Inc.</div>
  </div>
</template>

<script>
export default {
  name: 'FooterCmp',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.footerCnt
  background: $money-blue-dark
  display: flex
  align-items: center

.footerText
  font-family: $font-family-montserrat
  color: $money-white
  margin: 0 auto

@include for-phone
  .footerCnt
    height: 8vw

  .footerText
    font-size: 4vw

@include for-tablet
  .footerCnt
    height: 2vw

  .footerText
    font-size: 1vw
</style>
