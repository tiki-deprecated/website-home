<template>
  <div>
    <img
      sizes="(max-width: 1400px) 100vw, 1400px"
      srcset="
        ~/assets/images/png/home/timeline/timeline-horizontal_w_200.png   200w,
        ~/assets/images/png/home/timeline/timeline-horizontal_w_448.png   448w,
        ~/assets/images/png/home/timeline/timeline-horizontal_w_626.png   626w,
        ~/assets/images/png/home/timeline/timeline-horizontal_w_792.png   792w,
        ~/assets/images/png/home/timeline/timeline-horizontal_w_934.png   934w,
        ~/assets/images/png/home/timeline/timeline-horizontal_w_1069.png 1069w,
        ~/assets/images/png/home/timeline/timeline-horizontal_w_1238.png 1238w,
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
        ~/assets/images/png/home/timeline/timeline-vertical_w_252.png   252w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_301.png   301w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_343.png   343w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_386.png   386w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_432.png   432w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_476.png   476w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_517.png   517w,
        ~/assets/images/png/home/timeline/timeline-vertical_w_555.png   555w,
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
