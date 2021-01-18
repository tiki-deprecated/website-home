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
      <social-share-cmp class="faqShareCmp" />
      <faq-cmp-content class="faqCmpContent" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import FaqCmpContent from '@/components/faq/FaqCmpContent'
import SocialShareCmp from '@/components/social/SocialShareCmp'

export default {
  name: 'FaqCmp',
  components: { UtilsSvgCmp, FaqCmpContent, SocialShareCmp },
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

@include for-phone
  .faqCnt
    height: 700vw

  .faqBkgBlobLgWrapper
    display: none

  .faqBkgBlobWrapper
    top: -29vw
    left: 0
    width: 100%

  ::v-deep .faqBkgBulb.svg
    height: 30vw

  .faqBkgBulbWrapper
    top: 160vw
    right: -12vw

  .faqBkgExtension
    height: 650vw

  .faqShareCmp
    margin-top: 12vw

  .faqCmpContent
    margin-top: 12vw
    margin-bottom: 2vw

@include for-tablet
  .faqCnt
    height: 112vw

  .faqBkgBlobWrapper
    display: none

  .faqBkgBlobLgWrapper
    top: -25vw
    left: 0
    width: 100%

  ::v-deep .faqBkgBulb.svg
    height: 15vw

  .faqBkgBulbWrapper
    top: 30vw
    right: 0

  .faqBkgExtension
    height: 20vw

  .faqShareCmp
    padding-top: 7vw

  .faqCmpContent
    margin-top: 1vw
    margin-bottom: 2.5vw
</style>
