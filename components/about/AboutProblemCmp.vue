<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="title">Data is humanity’s most powerful resource.</div>
    <div class="text">
      The most pressing problems we face on the internet trace back to the
      exchange of data —lack of privacy, censorship, digital nudging, invasive
      ads, and much more. Yet, limiting data only results in a worse internet
      for all.
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
@import "assets/styles/theme"

.title
  font-weight: bold

.text
  font-size: .95em

@include for-phone
  .title
    font-size: 2em
    margin-bottom: 30px

@include for-tablet
  .title
    font-size: 2em
    margin-bottom: 20px
</style>
