<template>
  <div>
    <div class="imgWrapper">
      <img
        sizes="(max-width: 768px) 100vw, 768px"
        srcset="
          ~/assets/images/png/home/header/pineapple_w_200.png   200w,
          ~/assets/images/png/home/header/pineapple_w_1030.png 1030w,
          ~/assets/images/png/home/header/pineapple_w_1400.png 1400w
        "
        src="~/assets/images/png/home/header/pineapple_w_1400.png"
        alt=""
        class="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeaderImgCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.imgWrapper
  position: absolute
  z-index: 1
  right: 0
  bottom: -5%

@include for-phone
  .img
    height: 40vw

@include for-tablet
  .img
    height: 25vw
</style>
