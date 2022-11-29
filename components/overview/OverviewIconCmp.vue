<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="iconWrapper">
    <utils-svg-cmp :name="icon" class="iconSvg" />
    <div>
      <div class="ovwTitle">
        {{ t1 }}<br class="mobile" />
        {{ t2 }}
      </div>
      <div class="ovwSubtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'OverviewIconCmp',
  components: { UtilsSvgCmp },
  props: {
    icon: {
      type: String,
      required: true,
    },
    t1: {
      type: String,
      required: true,
    },
    t2: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.ovwTitle
  color: $blue
  font-weight: bold
  text-align: center

.ovwSubtitle
  color: $blue
  font-size: 0.95em
  text-align: center

::v-deep .iconSvg.svg
  fill: $purple

@include for-phone
  .ovwTitle
    font-size: 1.2em
    margin-bottom: 10px
    text-align: left
    width: 55vw

  .iconSvg
    margin-right: 20px
    max-width: 150px

  .ovwSubtitle
    text-align: left

  .mobile
    display: none

  .iconWrapper
    display: flex
    justify-content: space-between
    align-items: center

@include for-tablet
  .iconWrapper
    width: fit-content

  .ovwTitle
    font-size: 1.2em

  .iconSvg
    width: 8vw
    max-width: 125px
    margin: auto
    display: block

  .ovwSubtitle
    width: 20vw
    max-width: 250px
    display: block

  .ovwTitle
    margin: 20px auto 10px auto
    display: block
</style>
