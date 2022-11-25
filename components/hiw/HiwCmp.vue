<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="hiwCmp">
    <hiw-text-cmp class="txtCmp" />
    <hiw-img-cmp class="imgCmp" />
  </div>
</template>

<script>
import HiwImgCmp from '@/components/hiw/HiwImgCmp'
import HiwTextCmp from '@/components/hiw/HiwTextCmp'

export default {
  name: 'HiwCmp',
  components: { HiwTextCmp, HiwImgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

@include for-phone
@include for-tablet
  .hiwCmp
    display: flex
    align-items: center
    justify-content: space-between

  .txtCmp
    width: 40%
    margin: auto

  .imgCmp
    width: 40%
    margin: auto
</style>
