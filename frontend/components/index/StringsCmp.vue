<template>
  <div class="strings">
    <div>
      <div class="imgContainer">
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
            ~/assets/images/png/pull-strings_w_200.png   200w,
            ~/assets/images/png/pull-strings_w_538.png   538w,
            ~/assets/images/png/pull-strings_w_789.png   789w,
            ~/assets/images/png/pull-strings_w_1020.png 1020w,
            ~/assets/images/png/pull-strings_w_1254.png 1254w,
            ~/assets/images/png/pull-strings_w_1400.png 1400w
          "
          src="~/assets/images/png/pull-strings_w_1400.png"
          alt="Behavior, Intimate, and Personal data"
          class="img"
        />
      </div>
      <div class="title">Who pulls your strings?</div>
    </div>
    <div class="stat">
      <b class="stat-num">79%</b> of Americans are concerned about how companies
      use the data collected.
    </div>
    <div class="cta">It’s time to step up and do something about it.</div>
  </div>
</template>

<script>
export default {
  name: 'StringsCmp',
  components: {},
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.strings
  width: 100%
  position: relative
  overflow: hidden

.imgContainer
  position: absolute
  z-index: 1
  top: -4%
  left: -14%

.title, .cta
  font-family: $font-family-courier
  color: $tiki-blue
  text-align: right

.stat
  display: block
  font-family: $font-family-koara
  color: $tiki-blue
  font-weight: lighter

.stat-num
  font-weight: lighter

@include for-phone
  .title
    font-size: 6vw
    margin: 4vh 5vw 0 auto
    width: 55%

  .stat
    margin: 70vh 5vw 0 5vw
    font-size: 6vw

  .stat-num
    font-size: 10vw

  .cta
    margin: 6vh 5vw 0 auto
    font-size: 6vw
    width: 52%

  .strings
    padding-bottom: 5vh
@include for-tablet
</style>
