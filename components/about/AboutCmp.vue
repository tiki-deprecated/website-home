<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="aboutContainer">
    <div class="col1">
      <about-problem-cmp class="problem" />
      <about-solution-cmp class="solution" />
    </div>
    <div class="col2">
      <about-graphic-cmp class="graphic" />
    </div>
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

  .problem
    margin-bottom: 20px

@include for-tablet
  .aboutContainer
    display: flex
    align-items: end

  .col1 .col2
    width: 50%

  .col1
    max-width: 400px

  .col2
    margin-left: -10%
    max-width: 60%

  .problem
    margin-bottom: 40px

  .solution
    margin-top: 225px
</style>
