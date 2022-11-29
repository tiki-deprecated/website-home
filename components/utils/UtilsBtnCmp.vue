<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="btnContainer">
    <nuxt-link
      v-if="isLocal"
      :to="link"
      class="btn"
      :style="'background-color: ' + bkgColor + ';color: ' + txtColor"
    >
      {{ txt }}
    </nuxt-link>
    <a
      v-if="!isLocal"
      class="btn"
      :style="'background-color: ' + bkgColor + ';color: ' + txtColor"
      :href="link"
    >
      {{ txt }}
    </a>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'

export default {
  name: 'UtilsBtnCmp',
  props: {
    bkgColor: {
      type: String,
      default: theme.yellow,
    },
    txtColor: {
      type: String,
      default: theme.blue,
    },
    txt: {
      type: String,
      default: "I'm a button",
    },
    link: {
      type: String,
      default: '/',
    },
  },
  computed: {
    isLocal() {
      return this.link.startsWith('/')
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.btnContainer
  width: fit-content
  display: inline-block

.btn
  cursor: pointer
  background-color: transparent
  border: 0
  border-radius: 6px
  font-size: 0.95em
  font-weight: 500
  text-decoration: none
  text-align: center
  display: block
  width: fit-content
  min-width: 130px
  opacity: 1

.btn:focus
  opacity: 0.7

@include for-tablet
  .btn
    padding: 12px 25px

@include for-phone
  .btn
    padding: 12px 15px
</style>
