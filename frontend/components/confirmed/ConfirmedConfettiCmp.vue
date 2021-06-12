<template>
  <div>
    <img
      sizes="(max-width: 1400px) 100vw, 1400px"
      srcset="
        ~/assets/images/png/confirmed/confetti_w_200.png   200w,
        ~/assets/images/png/confirmed/confetti_w_1124.png 1124w,
        ~/assets/images/png/confirmed/confetti_w_1400.png 1400w
      "
      src="~/assets/images/png/confirmed/confetti_w_1400.png"
      alt=""
      class="img"
    />
  </div>
</template>

<script>
export default {
  name: 'ConfirmedConfettiCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

@include for-phone
  .img
    height: 60vw

@include for-tablet
  .img
    height: 20vw
</style>
