<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div style="width: 100%; height: 100%">
    <div class="quotesWrapper">
      <div class="quotes">
        <div class="qtext">“</div>
        <div class="qtext">”</div>
      </div>
    </div>
    <div class="textWrapper">
      <div class="primaryText">
        Those who have a 'why' to live, can bear with almost any 'how'
      </div>
      <div class="author">— Nietzsche via Frankl</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteTxtCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.quotesWrapper
  position: absolute
  z-index: 1
  top: 50%
  left: 50%
  transform: translate(-50%, -35%)
  width: 100%

.textWrapper
  position: absolute
  z-index: 2
  top: 50%
  left: 50%
  transform: translate(-50%, -25%)
  width: 100%

.quotes
  display: flex
  justify-content: space-between
  align-items: center

.qtext
  color: $purple-light
  font-weight: bold

.primaryText
  color: $white
  font-weight: bold
  text-align: center

.author
  color: $white
  font-weight: bold
  text-align: center

@include for-phone

@include for-tablet
  .qtext
    font-size: 30em

  .quotes
    width: 90%
    max-width: 850px
    margin: auto

  .primaryText
    font-size: 2.25em
    width: 85%
    max-width: 700px
    margin: auto

  .author
    margin: 40px auto
</style>
