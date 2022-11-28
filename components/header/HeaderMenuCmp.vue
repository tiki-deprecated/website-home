<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div id="menu">
    <button type="button" class="button" @click="onClick">
      <utils-svg-cmp name="burger" class="burger" :style="'fill:' + color" />
    </button>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'HeaderMenuCmp',
  components: { UtilsSvgCmp },
  props: {
    color: {
      type: String,
      default: theme.blue,
    },
  },
  methods: {
    onClick() {
      this.$emit('menu-click')
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.button
  cursor: pointer
  background-color: transparent
  border: 0
  border-radius: 0
  padding: 0

.button:focus
  outline: 0

::v-deep .burger.svg
  width: 28px
</style>
