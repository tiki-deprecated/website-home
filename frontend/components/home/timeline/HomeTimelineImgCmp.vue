<template>
  <div>
    <img
      sizes="(max-width: 1400px) 100vw, 1400px"
      srcset="
        ~/assets/images/png/home/timeline/timeline-horizontal_w_200.png   200w,
        ~/assets/images/png/home/timeline/timeline-horizontal_w_820.png   820w,
        ~/assets/images/png/home/timeline/timeline-horizontal_w_1400.png 1400w
      "
      src="~/assets/images/png/home/timeline/timeline-horizontal_w_1400.png"
      alt="10,000 signups. Beta Launch. Start getting paid."
      class="horizontal"
    />
    <img
      sizes="(max-width: 1000px) 100vw, 1000px"
      srcset="
        ~/assets/images/png/home/timeline/timeline-vertical_w_200.png   200w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_375.png   375w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_513.png   513w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_628.png   628w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_1000.png 1000w
      "
      src="~/assets/images/png/home/timeline/timeline-vertical_w_1000.png"
      alt="10,000 signups. Beta Launch. Start getting paid."
      class="vertical"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeTimelineImgCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
.horizontal, .vertical
  width: 100%

@include for-phone
  .horizontal
    display: none

@include for-tablet
  .vertical
    display: none
</style>
