<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <button
    type="button"
    class="btn"
    :style="'background-color: ' + bkgColor + ';color: ' + txtColor"
    @click="onClick"
  >
    {{ txt }}
  </button>
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
  methods: {
    async onClick() {
      this.$plausible.trackEvent('Outbound Link: Click', {
        props: { url: this.link },
      })
      if (this.link.startsWith('/')) {
        await this.$router.push(this.link)
      } else {
        window.location.href = this.link
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.btn:focus
  outline: 0

.btn
  cursor: pointer
  background-color: transparent
  border: 0
  border-radius: 29.5px
  font-size: 0.95em
  font-weight: 500

@include for-tablet
  .btn
    padding: 6px 25px
    min-width: 175px

@include for-phone
  .btn
    padding: 6px 15px
</style>
