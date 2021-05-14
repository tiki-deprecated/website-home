<template>
  <div class="worth">
    <div class="textContainer">
      <home-worth-text-cmp />
      <home-worth-counter-cmp class="counter" />
    </div>
    <div class="videoContainer">
      <home-worth-video-cmp class="videoCmp" />
    </div>
  </div>
</template>

<script>
import HomeWorthVideoCmp from './HomeWorthVideoCmp'
import HomeWorthTextCmp from './HomeWorthTextCmp'
import HomeWorthCounterCmp from './HomeWorthCounterCmp'

export default {
  name: 'HomeWorthCmp',
  components: { HomeWorthVideoCmp, HomeWorthCounterCmp, HomeWorthTextCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.worth
  background: $blue-dark
  width: 100%

.title
  font-family: $font-family-montserrat
  font-weight: 600
  color: $white

.text
  font-family: $font-family-nunito-sans
  font-weight: 300
  color: $white

.counter
  margin-left: auto
  margin-right: auto

@include for-phone
  .textContainer
    width: 90%
    margin: 0 auto
    padding-top: 8vw

  .title
    font-size: 6vw

  .text
    font-size: 4vw
    margin-top: 5vw

  .counter
    margin-top: 5vw
    margin-bottom: 10vw

  .videoContainer
    width: 90%
    height: 39%
    margin: 0 auto

  .videoCmp
    width: 100%
    height: 100%

@include for-tablet
  .worth
    display: flex
    justify-content: space-around
    align-items: center

  .textContainer
    width: 35%

  .title
    font-size: 1.75vw

  .text
    width: 80%
    font-size: 1vw
    margin-top: 1vw

  .counter
    margin-top: 3vw

  .videoContainer
    width: 35%
    height: 82%

  .videoCmp
    width: 100%
    height: 100%
    margin-left: auto
</style>
