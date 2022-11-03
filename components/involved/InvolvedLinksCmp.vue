<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="linksContainer">
    <utils-btn-cmp txt="Github" class="link" />
    <utils-btn-cmp txt="Discord" class="link" />
    <utils-btn-cmp txt="Careers" class="link" />
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
.linksContainer
  width: fit-content
  margin: auto

.link
  margin: auto 20px
</style>
