<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="linksContainer">
    <utils-btn-cmp txt="Github" class="link" link="https://github.com/tiki" />
    <utils-btn-cmp txt="Discord" class="link" link="https://discord.gg/tiki" />
    <utils-btn-cmp
      txt="Careers"
      class="link"
      link="https://angel.co/company/mytiki/jobs"
    />
  </div>
</template>

<script>
import UtilsBtnCmp from '../utils/UtilsBtnCmp'

export default {
  name: 'InvolvedLinksCmp',
  components: { UtilsBtnCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"
@import "../../assets/styles/theme"

@include for-tablet
  .linksContainer
    width: fit-content
    margin: auto

  .link
    margin: auto 20px

@include for-phone
  .link
    display: block
    margin: 20px auto
</style>
