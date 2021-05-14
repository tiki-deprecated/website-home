<template>
  <div class="believeCnt">
    <home-believe-text-cmp />
    <home-believe-btn-cmp class="believeButtons" />
  </div>
</template>

<script>
import HomeBelieveTextCmp from './HomeBelieveTextCmp'
import HomeBelieveBtnCmp from './HomeBelieveBtnCmp'

export default {
  name: 'HomeBelieveCmp',
  components: { HomeBelieveTextCmp, HomeBelieveBtnCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.believeCnt
  background: $blue-xlight

@include for-phone
  .believeCnt
    padding: 18vw 0 55vw 0

  .believeButtons
    margin: 15vw 0

@include for-tablet
  .believeCnt
    padding: 9vw 0 3vw 0

  .believeButtons
    display: flex
    margin-top: 2vw
    align-items: center
    justify-content: center
</style>
