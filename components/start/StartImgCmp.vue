<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <picture>
    <img
      sizes="(max-width: 1400px) 100vw, 1400px"
      srcset="
        ~/assets/images/png/plane_pineapple_w_200.png   200w,
        ~/assets/images/png/plane_pineapple_w_807.png   807w,
        ~/assets/images/png/plane_pineapple_w_1400.png 1400w
      "
      src="~/assets/images/png/plane_pineapple_w_1400.png"
      alt=""
      class="startImgImg"
    />
  </picture>
</template>

<script>
export default {
  name: 'StartCmp',
}
</script>

<style scoped lang="sass">
.startImgImg
  width: 100%
</style>
