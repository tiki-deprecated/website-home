<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="hiringContainer">
    <hiring-bkg-cmp class="bkgContainer" />
    <div class="cntContainer">
      <div class="title">Yes, We're Hiring!</div>
    </div>
  </div>
</template>

<script>
import HiringBkgCmp from './HiringBkgCmp'

export default {
  name: 'HiringCmp',
  components: { HiringBkgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.hiringContainer
  position: relative
  display: inline-block

.bkgContainer
  display: block
  height: auto
  width: 100vw

.cntContainer
  position: absolute
  z-index: 2
  top: 0
  left: 0
  right: 0
  margin: auto
  width: 100%

.title
  font-weight: bold

@include for-phone
  .title
    text-align: center
    margin-top: 130px
    font-size: 2em

@include for-tablet
  .title
    text-align: center
    margin-top: 250px
    font-size: 2em
</style>
