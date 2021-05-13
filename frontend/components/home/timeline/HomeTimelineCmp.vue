<template>
  <div class="timeline">
    <home-timeline-text-cmp />
    <home-timeline-img-cmp class="img" />
  </div>
</template>

<script>
import HomeTimelineImgCmp from './HomeTimelineImgCmp'
import HomeTimelineTextCmp from './HomeTimelineTextCmp'

export default {
  name: 'HomeTimelineCmp',
  components: { HomeTimelineImgCmp, HomeTimelineTextCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.timeline
  background: $yellow

@include for-phone
  .timeline
    width: 88%

  .img
    width: 80%
    margin: 0 auto
    padding: 2vw 0

@include for-tablet
  .timeline
    width: 95%

  .img
    width: 80%
    margin: 0 auto
</style>
