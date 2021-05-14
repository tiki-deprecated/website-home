<template>
  <div class="follow">
    <home-follow-text-cmp />
    <home-follow-btn-cmp />
  </div>
</template>

<script>
import HomeFollowTextCmp from './HomeFollowTextCmp'
import HomeFollowBtnCmp from './HomeFollowBtnCmp'

export default {
  name: 'HomeFollowCmp',
  components: { HomeFollowTextCmp, HomeFollowBtnCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.follow
  width: 100%
  background: rgba($yellow-light, 0.10)

@include for-phone
  .follow
    padding-top: 45vw
    padding-bottom: 10vw

@include for-tablet
  .follow
    padding-top: 18vw
</style>
