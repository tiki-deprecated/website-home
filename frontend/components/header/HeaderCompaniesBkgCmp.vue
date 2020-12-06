<template>
  <div class="headerCompaniesCmpBkgCnt">
    <utils-svg-cmp name="blobs/b1" class="utilsSvgCmpBlobsB1" />
    <utils-svg-cmp name="blobs/b2" class="utilsSvgCmpBlobsB2" />
    <utils-svg-cmp name="blobs/b3" class="utilsSvgCmpBlobsB3" />
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'HeaderCompaniesBkgCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
.headerCompaniesCmpBkgCnt
  background: $tiki-blue-light
  height: inherit

.utilsSvgCmpBlobsB1, .utilsSvgCmpBlobsB2, .utilsSvgCmpBlobsB3
  position: absolute
  top: 0
  left: 0

.utilsSvgCmpBlobsB1
  z-index: 3

::v-deep .utilsSvgCmpBlobsB1.svg
  fill: $tiki-orange
  height: 77%
  width: 100%

.utilsSvgCmpBlobsB2
  z-index: 1

::v-deep .utilsSvgCmpBlobsB2.svg
  fill: $tiki-yellow-light
  height: 140%
  width: 100%

.utilsSvgCmpBlobsB3
  z-index: 2

::v-deep .utilsSvgCmpBlobsB3.svg
  fill: $tiki-red-dark
  height: 93%
  width: 100%
</style>
