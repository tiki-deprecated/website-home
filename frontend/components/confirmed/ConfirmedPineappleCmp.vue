<template>
  <div>
    <img
      sizes="(max-width: 774px) 100vw, 774px"
      srcset="
        ~/assets/images/png/confirmed/pineapple_w_200.png 200w,
        ~/assets/images/png/confirmed/pineapple_w_774.png 774w
      "
      src="~/assets/images/png/confirmed/pineapple_w_774.png"
      alt=""
      class="img"
    />
  </div>
</template>

<script>
export default {
  name: 'ConfirmedPineappleCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

@include for-phone
  .img
    height: 60vw

@include for-tablet
  .img
    height: 15vw
</style>
