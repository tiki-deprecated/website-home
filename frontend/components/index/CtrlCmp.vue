<template>
  <div class="ctrl">
    <div class="ctrlContainer">
      <div class="textContainer">
        <span>Those who control data</span>
        <br /><br />
        <span>control the future.</span>
      </div>
      <div class="imgContainer">
        <img
          sizes="(max-width: 1400px) 100vw, 1400px"
          srcset="
            ~/assets/images/png/pineapple-transparent-shades_w_200.png   200w,
            ~/assets/images/png/pineapple-transparent-shades_w_848.png   848w,
            ~/assets/images/png/pineapple-transparent-shades_w_1371.png 1371w,
            ~/assets/images/png/pineapple-transparent-shades_w_1400.png 1400w
          "
          src="~/assets/images/png/pineapple-transparent-shades_w_1400.png"
          alt=""
          class="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtrlCmp',
  components: {},
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.ctrl
  background: $yellow
  height: 100vh
  width: 100%
  position: relative

.imgContainer
  position: absolute
  z-index: 0

.textContainer
  width: auto
  text-align: right
  font-family: $font-family-koara
  font-weight: lighter
  color: $tiki-blue
  position: absolute
  z-index: 1

@include for-phone
  .img
    height: 60vh

  .imgContainer
    top: 50%
    left: 20%
    -ms-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)

  .textContainer
    font-size: 16vw
    max-width: 50%
    top: 50%
    right: 10%
    -ms-transform: translateY(-50%)
    transform: translateY(-50%)

@include for-tablet
  .img
    height: 100vh

  .imgContainer
    top: 50%
    left: 12%
    -ms-transform: translate(-50%, -50%)
    transform: translate(-50%, -50%)
</style>
