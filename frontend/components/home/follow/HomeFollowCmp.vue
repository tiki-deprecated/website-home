<template>
  <div class="follow">
    <home-follow-text-cmp />
    <follow-btn-cmp />
  </div>
</template>

<script>
import FollowBtnCmp from '../../utils/UtilsFollowCmp'
import HomeFollowTextCmp from './HomeFollowTextCmp'

export default {
  name: 'HomeFollowCmp',
  components: { HomeFollowTextCmp, FollowBtnCmp },
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
