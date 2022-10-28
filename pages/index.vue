<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <header-cmp :color="bkgColor" :links="links" />
  </div>
</template>

<script>
import theme from 'assets/styles/theme.sass'
import HeaderCmp from '../components/header/HeaderCmp'

export default {
  name: 'IndexPage',
  components: { HeaderCmp },
  data: function () {
    return {
      links: [
        {
          name: 'App',
          href: 'https://mytiki.com',
        },
        {
          name: 'SDK',
          href: 'https://mytiki.com',
        },
        {
          name: 'Learn',
          href: 'https://blog.mytiki.com',
        },
      ],
    }
  },
  computed: {
    bkgColor() {
      return theme.yellowLight
    },
  },
  mounted() {
    this.$plausible.trackPageview()
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
@import "assets/styles/theme"
</style>
