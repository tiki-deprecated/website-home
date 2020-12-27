<template>
  <div class="faqCnt">
    <div class="faqBkg">
      <div class="faqBkgBlobWrapper">
        <utils-svg-cmp name="blob/b5" class="faqBkgBlob" />
      </div>
      <div class="faqBkgBlobLgWrapper">
        <utils-svg-cmp name="blob/b5-lg" class="faqBkgBlobLg" />
      </div>
      <div class="faqBkgBulbWrapper">
        <utils-svg-cmp name="background/bulb" class="faqBkgBulb" />
      </div>
      <div class="faqBkgExtension" />
    </div>
    <div class="faqContent">
      <div class="faqContentWrapper">
        <div class="faqTitle">Your questions</div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FaqCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.faqCnt
  background: $blue-light
  width: 100%
  position: relative

.faqBkg
  width: 100%
  position: absolute
  top: 0
  left: 0
  z-index: 1
  overflow: hidden
  height: 100%

.faqBkgBlobWrapper, .faqBkgBlobLgWrapper
  position: absolute
  z-index: 2

.faqBkgBulbWrapper
  position: absolute
  z-index: 3

::v-deep .faqBkgBlob.svg, ::v-deep .faqBkgBlobLg.svg
  fill: $tan

::v-deep .faqBkgBulb.svg > .bulb
  fill: $black

::v-deep .faqBkgBulb.svg > .layer2
  fill: $orange

::v-deep .faqBkgBulb.svg > .layer1
  fill: $pink

.faqContent
  position: absolute
  top: 0
  left: 0
  z-index: 2
  width: 100%

.faqBkgExtension
  position: absolute
  bottom: 0
  left: 0
  z-index: 1
  width: 100%
  background: $tan

.faqContentWrapper
  position: relative
  width: 100%

.faqTitle
  text-align: center
  font-family: $font-family-montserrat
  color: $blue-dark
  font-weight: 600

@include for-phone
  .faqCnt
    height: 200vw

  .faqBkgBlobLgWrapper
    display: none

  .faqBkgBlobWrapper
    top: -29vw
    left: 0
    width: 100%

  ::v-deep .faqBkgBulb.svg
    height: 30vw

  .faqBkgBulbWrapper
    top: 30vw
    right: -12vw

  .faqBkgExtension
    height: 140vw

  .faqTitle
    margin-top: 10vw
    font-size: 6vw

@include for-tablet
  .faqCnt
    height: 50vw

  .faqBkgBlobWrapper
    display: none

  .faqBkgBlobLgWrapper
    top: -25vw
    left: 0
    width: 100%

  ::v-deep .faqBkgBulb.svg
    height: 15vw

  .faqBkgBulbWrapper
    top: 8vw
    right: 0

  .faqBkgExtension
    height: 20vw

  .faqTitle
    margin-top: 7vw
    font-size: 1.5vw
</style>
