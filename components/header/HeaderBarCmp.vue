<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="headerBarContainer">
    <utils-svg-cmp name="logo" class="logo" />
    <div class="links">
      <a
        v-for="link in links"
        :key="link.id"
        class="headerBarLink"
        :href="link.href"
        >{{ link.name }}</a
      >
    </div>
    <header-menu-cmp class="menu" @menu-click="menuActive = !menuActive" />
    <transition name="expand">
      <div v-if="menuActive" class="menuPopup expand">
        <a
          v-for="link in links"
          :key="link.id"
          class="menuLink"
          :href="link.href"
          >{{ link.name }}</a
        >
      </div>
    </transition>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'
import HeaderMenuCmp from './HeaderMenuCmp'

export default {
  name: 'HeaderBarCmp',
  components: { UtilsSvgCmp, HeaderMenuCmp },
  props: {
    links: {
      type: Array,
      default() {
        return [{}]
      },
    },
  },
  data() {
    return {
      menuActive: false,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.logo
  fill: $blue

.headerBarContainer
  display: flex
  justify-content: space-between
  align-items: center

.headerBarLink
  margin: 0 0.5em
  font-weight: normal
  color: $blue
  text-decoration: none

.menuPopup
  position: absolute
  z-index: 99
  background: rgba($blue, 0.95)
  width: 100%
  border-radius: 0.5em
  left: 0
  right: 0
  top: 50px
  margin: 0 auto
  padding: 15px 0

.menuLink
  color: $white
  text-decoration: none
  display: block
  padding: 10px 15px
  margin: 0
  font-size: 0.9em
  font-weight: 500

.expand
  height: 7.7em
  animation: slideDown 400ms linear
  overflow: hidden
  opacity: 1

.expand-leave-active.expand-leave-to
  transition: height 200ms ease, opacity 200ms ease
  height: 0
  opacity: 0

@keyframes slideDown
  from
    height: 0
    opacity: 0
  to
    height: 7.7em
    opacity: 1

@include for-phone
  ::v-deep .logo.svg
    height: 25px

  .links
    display: none

  .menu
    display: contents

@include for-tablet
  ::v-deep .logo.svg
    height: 45px

  .links
    display: block

  .menu
    display: none
</style>
