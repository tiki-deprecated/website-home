<template>
  <div class="formBetaCmpJoinCnt">
    <div class="formBetaCmpJoinTitle">
      TIKI is launching its Beta in January 2021. Sign up to be notified.
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormBetaCmpJoin',
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formBetaCmpJoinTitle
  color: $black-dark
  font-family: $font-family-montserrat
  text-align: center

@include for-phone
  .formBetaCmpJoinCnt
    width: 90%
    margin: 0 auto

  .formBetaCmpJoinTitle
    font-size: 6vw

@include for-tablet
  .formBetaCmpJoinCnt
    margin: 0 0 2vw 0

  .formBetaCmpJoinTitle
    font-size: 1.5vw
</style>
