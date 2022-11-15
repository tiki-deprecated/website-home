<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="text">
      <div class="title">
        We prioritize<br class="mobileOnly" />
        user-centricity, transparency, and trust above all else.
      </div>
      <div class="subtitle">Love what we’re building? Get involved.</div>
    </div>
    <involved-links-cmp class="links" />
  </div>
</template>

<script>
import InvolvedLinksCmp from './InvolvedLinksCmp'

export default {
  name: 'InvolvedCmp',
  components: { InvolvedLinksCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

.title
  font-size: 2em
  font-weight: bold
  text-align: center

.subtitle
  font-size: .95em
  text-align: center

@include for-phone
  .text
    width: 85%
    margin: 30px auto

  .title
    margin-bottom: 30px

@include for-tablet
  .title
    margin-bottom: 20px

  .text
    width: 40%
    margin: 60px auto

  .mobileOnly
    display: none
</style>
