<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div style="width: fit-content">
    <utils-svg-cmp :name="icon" class="iconSvg" />
    <div class="ovwTitle">
      {{ t1 }}<br />
      {{ t2 }}
    </div>
    <div class="ovwSubtitle">{{ subtitle }}</div>
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
@include for-tablet
  .ovwTitle
    font-size: 1.2em

  .iconSvg
    width: 8vw
    max-width: 125px
    margin: auto

  .ovwSubtitle
    width: 20vw
    max-width: 250px

  .ovwTitle
    margin: 20px auto 10px auto
</style>
