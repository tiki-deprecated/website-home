<template>
  <div class="headerCompaniesPineappleCmpCnt">
    <div class="headerCompaniesPineappleCmpBlurb">
      <div class="headerCompaniesPineappleCmpBlurbText">
        <div>Where's</div>
        <div style="width: fit-content; display: inline">your</div>
        <div style="font-size: medium; width: fit-content; display: inline">
          $
        </div>
        <div style="width: fit-content; display: inline; margin-left: -0.5ch">
          ?
        </div>
      </div>
      <utils-svg-cmp name="paint/p2" class="utilsSvgCmpPaintP2" />
    </div>
    <div class="headerCompaniesPineappleCmpPineapple">
      <utils-svg-cmp name="blobs/b4" class="utilsSvgCmpBlobsB4" />
      <utils-svg-cmp name="blobs/b5" class="utilsSvgCmpBlobsB5" />
      <utils-svg-cmp name="tiki/pineapple" class="utilsSvgCmpTikiPineapple" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'HeaderCompaniesPineappleCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
.headerCompaniesPineappleCmpCnt
  position: absolute
  height: inherit
  width: 6.8em
  right: 0
  top: 0

.utilsSvgCmpBlobsB4
  position: absolute
  top: 0
  right: 0
  z-index: 1

.utilsSvgCmpBlobsB5
  position: absolute
  bottom: 0
  right: 0
  z-index: 2

.utilsSvgCmpTikiPineapple
  position: absolute
  top: 10%
  right: 0
  z-index: 3

::v-deep .utilsSvgCmpBlobsB5.svg
  fill: $tiki-orange
  height: 94%

::v-deep .utilsSvgCmpBlobsB4.svg
  fill: $tiki-pink
  height: 90%

::v-deep .utilsSvgCmpTikiPineapple
  height: 80%

::v-deep .utilsSvgCmpTikiPineapple.svg > .pineapple
  fill: $tiki-black-light

::v-deep .utilsSvgCmpTikiPineapple.svg > .lens
  fill: $tiki-orange

.headerCompaniesPineappleCmpPineapple
  position: relative
  height: 50%

.headerCompaniesPineappleCmpBlurb
  position: relative
  height: 23%

.headerCompaniesPineappleCmpBlurbText
  position: absolute
  font-family: $font-family-koara
  font-weight: bold
  font-size: small
  color: $tiki-yellow
  top: 56%
  right: 14%
  z-index: 2
  transform: rotate(9deg)

.utilsSvgCmpPaintP2
  position: absolute
  top: 0
  right: 5%
  z-index: 1
</style>
