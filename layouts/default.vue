<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <Nuxt />
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="sass">
@import "assets/styles/theme"

body
  margin: 0
  font-family: $font-family-space-grotesk
  font-weight: normal
  color: $blue
  font-size: 90%
  background-color: $gray
</style>
