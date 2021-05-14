<template>
  <div>
    <div class="title">Why TIKI?</div>
    <div class="text">
      <div class="line">You think you own your data?</div>
      <div class="line">
        In 2020 alone, the data on our behaviour and purchases was worth more
        than <b>$382 billion</b> in advertising revenue.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWorthTextCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.title
  font-family: $font-family-montserrat
  font-weight: 600
  color: $white

.text
  font-family: $font-family-nunito-sans
  font-weight: 300
  color: $white

@include for-phone
  .title
    font-size: 6vw

  .text
    font-size: 4vw
    margin-top: 5vw

@include for-tablet
  .title
    font-size: 1.75vw

  .text
    width: 80%
    font-size: 1vw
    margin-top: 1vw
</style>
