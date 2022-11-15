<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div style="width: 100%; height: 100%">
    <div class="quotesWrapper">
      <div class="quotes">
        <div class="qtext q1">“</div>
        <div class="qtext q2">”</div>
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
  color: $yellow
  font-weight: bold
  font-family: $font-family-montserrat

.primaryText
  color: $blue
  font-weight: bold
  text-align: center
  font-family: $font-family-space-grotesk

.author
  color: $blue
  text-align: center
  font-size: .95em

@include for-phone
  .qtext
    font-size: 15em

  .quotes
    width: 95%
    max-width: 375px
    margin: auto

  .primaryText
    font-size: 1.4em
    width: 90%
    max-width: 350px
    margin: auto

  .author
    margin: 25px auto
    font-weight: normal

  .q1
    padding-bottom: 75px

  .q2
    padding-top: 60px

@include for-tablet
  .qtext
    font-size: 30em

  .quotes
    width: 90%
    max-width: 850px
    margin: auto

  .primaryText
    font-size: 2.15em
    width: 85%
    max-width: 700px
    margin: auto

  .author
    margin: 40px auto
    font-weight: bold
</style>
