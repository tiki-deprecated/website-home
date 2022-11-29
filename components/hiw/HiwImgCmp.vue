<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <picture class="hiwImg">
    <img
      sizes="(max-width: 1400px) 100vw, 1400px"
      srcset="
        ~/assets/images/png/oss_pineapple_w_200.png   200w,
        ~/assets/images/png/oss_pineapple_w_859.png   859w,
        ~/assets/images/png/oss_pineapple_w_1400.png 1400w
      "
      src="~/assets/images/png/oss_pineapple_w_1400.png"
      alt="We're 100% open source!"
      class="hiwImgImg desktop"
    />
  </picture>
</template>

<script>
export default {
  name: 'HiwImgCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
@import "assets/styles/theme"

.hiwImgImg
  width: 100%
</style>
