<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <p>hello world</p>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},
  mounted() {
    this.$plausible.trackPageview()
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
</style>
