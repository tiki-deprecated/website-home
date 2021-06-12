<template>
  <div class="title">Email Confirmed!</div>
</template>

<script>
export default {
  name: 'ConfirmedTitleCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.title
  font-family: $font-family-koara
  color: $orange
  font-weight: bold
  width: fit-content

@include for-phone
  .title
    font-size: 9vw

@include for-tablet
  .title
    font-size: 2vw
</style>
