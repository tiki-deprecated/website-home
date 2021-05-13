<template>
  <div class="beta">
    <home-beta-bkg-cmp />
    <home-beta-text-cmp />
  </div>
</template>

<script>
import HomeBetaBkgCmp from './HomeBetaBkgCmp'
import HomeBetaTextCmp from './HomeBetaTextCmp'

export default {
  name: 'HomeBetaCmp',
  components: { HomeBetaTextCmp, HomeBetaBkgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.beta
  position: relative
  width: 100%

@include for-phone
  .beta
    height: 110vw

@include for-tablet
  .beta
    height: 35vw
</style>
