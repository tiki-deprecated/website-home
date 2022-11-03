<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="text">
      <div class="title">
        We prioritize <b>user-centricity</b>, <b>transparency</b>, and
        <b>trust</b> above all else.
      </div>
      <div class="subtitle">Love what we’re building? Get involved.</div>
    </div>
    <involved-links-cmp />
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
.title
  font-size: 2em
  font-weight: 500
  text-align: center
  margin-bottom: 20px

.text
  width: 40%
  margin: 60px auto

.subtitle
  font-size: .95em
  text-align: center
</style>
