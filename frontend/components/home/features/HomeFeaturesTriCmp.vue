<template>
  <div class="featuresTri">
    <div class="see">
      <div class="imgWrapper">
        <img
          sizes="(max-width: 768px) 100vw, 768px"
          srcset="
            ~/assets/images/png/home/features/see_w_200.png 200w,
            ~/assets/images/png/home/features/see_w_466.png 466w,
            ~/assets/images/png/home/features/see_w_768.png 768w
          "
          src="~/assets/images/png/home/features/see_w_768.png"
          alt=""
          class="img"
        />
      </div>
      <div class="youCanFeatureWrapper">
        <utils-svg-cmp name="home/features/b1" class="seeBlob" />
        <div class="seeContainer">
          <div class="seeNumber">1. See</div>
          <div class="seeText">
            what data companies are collecting on you, how its used, and how
            secure it really is.
          </div>
        </div>
      </div>
    </div>
    <div class="control">
      <div class="imgWrapper">
        <img
          sizes="(max-width: 772px) 100vw, 772px"
          srcset="
            ~/assets/images/png/home/features/control_w_200.png 200w,
            ~/assets/images/png/home/features/control_w_479.png 479w,
            ~/assets/images/png/home/features/control_w_772.png 772w
          "
          src="~/assets/images/png/home/features/control_w_772.png"
          alt=""
          class="img"
        />
      </div>
      <div class="youCanFeatureWrapper">
        <utils-svg-cmp name="home/features/b2" class="controlBlob" />
        <div class="controlContainer">
          <div class="controlNumber">2. Control</div>
          <div class="controlText">
            who has access to your data and for what purpose. It’s your
            decision.
          </div>
        </div>
      </div>
    </div>
    <div class="monetize">
      <div class="imgWrapper">
        <img
          sizes="(max-width: 768px) 100vw, 768px"
          srcset="
            ~/assets/images/png/home/features/monetize_w_200.png 200w,
            ~/assets/images/png/home/features/monetize_w_402.png 402w,
            ~/assets/images/png/home/features/monetize_w_567.png 567w,
            ~/assets/images/png/home/features/monetize_w_768.png 768w
          "
          src="~/assets/images/png/home/features/monetize_w_768.png"
          alt=""
          class="img"
        />
      </div>
      <div class="youCanFeatureWrapper">
        <utils-svg-cmp name="home/features/b3" class="monetizeBlob" />
        <div class="monetizeContainer">
          <div class="monetizeNumber">3. Monetize</div>
          <div class="monetizeText">
            your data. Get paid your fair share and even decide who gets access.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'HomeFeaturesTriCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.seeNumber, .controlNumber, .monetizeNumber
  color: $black-dark
  font-family: $font-family-montserrat
  font-weight: 600

.see, .control, .monetize
  position: relative

.seeBlob, .controlBlob, .monetizeBlob
  position: absolute
  top: 0
  left: 0
  z-index: 1

.seeContainer, .controlContainer, .monetizeContainer
  position: absolute
  top: 0
  left: 0
  z-index: 2

.seeText, .controlText, .monetizeText
  font-family: $font-family-nunito-sans
  color: $black-dark
  font-weight: normal

.seeBlob
  fill: $yellow

.controlBlob
  fill: $red

.monetizeBlob
  fill: $pink

.youCanFeatureWrapper
  position: relative
  height: 100%

.imgWrapper
  width: fit-content
  margin: 0 auto

@include for-phone
  .featuresTri
    margin-top: 10vw

  .see, .control, .monetize
    margin: 7vw 15vw
    height: 75vw

  .seeNumber, .controlNumber, .monetizeNumber
    font-size: 5vw

  .seeText
    margin-left: 2ch
    margin-top: 0.5vw
    font-size: 4vw

  .controlText, .monetizeText
    margin-left: 2.5ch
    margin-top: 0.5vw
    font-size: 4vw

  .seeBlob
    width: 11.5vw
    top: -3%
    left: -6%

  .controlBlob
    width: 10vw
    top: -3%
    left: -4%

  .monetizeBlob
    width: 10.25vw
    top: -3%
    left: -5%

  .img
    width: 50vw

@include for-tablet
  .featuresTri
    margin-top: 3vw
    display: flex
    align-items: center
    justify-content: center

  .control, .monetize, .see
    width: 20%
    margin: 0 2vw
    height: 17vw

  .seeNumber, .controlNumber, .monetizeNumber
    font-size: 1.5vw

  .seeText
    margin-left: 2.5ch
    margin-top: 0.25vw
    font-size: 1vw

  .controlText, .monetizeText
    margin-left: 3ch
    margin-top: 0.25vw
    font-size: 1vw

  .seeBlob
    width: 3.5vw
    top: -3%
    left: -6%

  .controlBlob
    width: 3vw
    top: -4%
    left: -3%

  .monetizeBlob
    width: 3.25vw
    top: -3%
    left: -5%

  .img
    width: 10vw
</style>
