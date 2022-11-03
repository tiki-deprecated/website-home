<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <picture class="aboutImg">
    <img
      sizes="(max-width: 1400px) 100vw, 1400px"
      srcset="
        ~/assets/images/png/about_pineapple_w_200.png   200w,
        ~/assets/images/png/about_pineapple_w_846.png   846w,
        ~/assets/images/png/about_pineapple_w_1400.png 1400w
      "
      src="~/assets/images/png/about_pineapple_w_1400.png"
      alt='We build better ways to exchange data. Or, as we like to say, "unfuck the internet."'
      class="aboutImgImg"
    />
  </picture>
</template>

<script>
export default {
  name: 'AboutCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
@import "assets/styles/theme"

.aboutImgImg
  width: 100%

@include for-tablet
  .aboutImg
    width: 100%
    height: auto
    display: block
</style>
