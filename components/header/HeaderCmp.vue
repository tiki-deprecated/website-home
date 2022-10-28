<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="headerContainer">
    <header-bkg-cmp :color="color" class="background" />
    <header-bar-cmp :links="links" class="headerBar" />
  </div>
</template>

<script>
import theme from '../../assets/styles/_export.scss'
import HeaderBkgCmp from './HeaderBkgCmp'
import HeaderBarCmp from './HeaderBarCmp'

export default {
  name: 'HeaderCmp',
  components: { HeaderBarCmp, HeaderBkgCmp },
  props: {
    color: {
      type: String,
      default: theme.yellowLight,
      required: true,
    },
    links: {
      type: Array,
      default() {
        return [{}]
      },
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.headerContainer
  position: relative
  width: 100%

.background
  position: absolute
  z-index: 1

.headerBar
  position: absolute
  z-index: 2

@include for-phone
  .headerBar
    margin: 6.52% 8.72%
    left: 0
    right: 0

@include for-tablet
  .headerBar
    margin: 3.73% 12.67%
    left: 0
    right: 0
</style>
