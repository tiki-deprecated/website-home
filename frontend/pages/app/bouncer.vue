<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="content">
    <utils-svg-cmp name="arrow-down" class="arrow" />
    <div class="cta">
      Please press the big blue OPEN button in the banner above.
    </div>
    <div class="note">
      You will need to re-click the Login link in your email again after.
    </div>
    <div class="sorry">
      Sorry for the confusion! It's a weird byproduct of link caching on your
      phone.
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../components/utils/UtilsSvgCmp'

export default {
  name: 'BouncerPage',
  components: { UtilsSvgCmp },
  data() {
    return {
      path: this.$nuxt.$route.fullPath,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.content
  position: absolute
  left: 50%
  top: 50%
  -ms-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
  width: 90%
  font-family: $font-family-nunito-sans
  text-align: center

::v-deep .arrow.svg
  fill: $orange

.arrow
  transform: rotate(180deg)

@include for-phone
  .content
    width: 80%

  .arrow
    height: 4vh
    margin: 3vh auto

  .cta
    margin-top: 2vh
    font-size: 1.25em
    color: $tiki-blue

  .note
    margin-top: 2vh
    font-size: 1.25em
    color: $orange

  .sorry
    margin-top: 10vh
    font-size: 1em
    color: $gray-5
    font-style: italic

@include for-tablet
  .content
    width: 50%

  .arrow
    height: 5vh
    margin: 3vh auto

  .cta
    margin-top: 2vh
    font-size: 1.25em
    color: $tiki-blue

  .note
    margin-top: 2vh
    font-size: 1.25em
    color: $orange

  .sorry
    margin-top: 7vh
    font-size: 1em
    color: $gray-5
    font-style: italic
</style>
