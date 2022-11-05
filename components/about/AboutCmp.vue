<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="aboutContainer">
    <div class="txt">
      <about-problem-cmp class="problem" />
      <about-solution-cmp class="solution" />
    </div>
    <about-graphic-cmp class="graphic" />
  </div>
</template>

<script>
import AboutProblemCmp from './AboutProblemCmp'
import AboutSolutionCmp from './AboutSolutionCmp'
import AboutGraphicCmp from './AboutGraphicCmp'

export default {
  name: 'AboutCmp',
  components: { AboutProblemCmp, AboutSolutionCmp, AboutGraphicCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
@import "assets/styles/theme"

@include for-phone
  .aboutContainer
    margin: 40px 5% 0 5%
    position: relative
    display: inline-block

  .problem
    margin-bottom: 450px

  .graphic
    position: absolute
    height: 350px
    left: 0
    top: 33%
    right: 0
    display: block
    margin: auto
    width: fit-content

@include for-tablet
  .aboutContainer
    position: relative
    margin: auto
    display: block

  .txt
    max-width: 425px
    // margin-left: 20%
    margin-right: auto

  .problem
    margin-bottom: 40px

  .solution
    margin-top: 175px

  .graphic
    position: absolute
    // width: 80%
    max-width: 700px
    top: 30%
    right: 0
</style>
