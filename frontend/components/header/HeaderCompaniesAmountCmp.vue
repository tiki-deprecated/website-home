<template>
  <div class="headerCompaniesAmountCnt">
    <div class="headerCompaniesAmountTop">Companies will make</div>
    <div class="headerCompaniesAmountMiddle">
      <utils-svg-cmp
        name="paint/p1"
        class="utilsSvgCmpPaintP1"
        :class="{ utilsSvgCmpPaintP1Display: isSpalsh }"
      />
      <div class="headerCompaniesAmountMiddleText">$370 BILLION</div>
    </div>
    <div class="headerCompaniesAmountBtm">
      from our data <b style="font-weight: 900">this year</b>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'HeaderCompaniesAmountCmp',
  components: { UtilsSvgCmp },
  data() {
    return {
      isSpalsh: false,
    }
  },
  mounted() {
    this.isSpalsh = true
  },
}
</script>

<style scoped lang="sass">
.headerCompaniesAmountCnt
  width: fit-content
  margin: 1em auto 0
  font-family: $font-family-nunito
  font-weight: bold
  color: $tiki-yellow-xlight
  font-size: larger
  position: relative

.headerCompaniesAmountTop, .headerCompaniesAmountBtm
  width: fit-content
  margin: 0 auto

.headerCompaniesAmountMiddle
  margin: 0.15em auto
  font-family: $font-family-marker-mark
  font-size: xx-large
  font-weight: normal
  position: relative
  width: 8em
  height: 1.6em
  overflow: hidden

.utilsSvgCmpPaintP1
  position: absolute
  top: 0
  left: -80%
  opacity: 0
  z-index: 1
  width: 70%
  height: 100%
  transition-property: opacity, left, width
  transition-delay: 2s
  transition-duration: .15s

.utilsSvgCmpPaintP1Display
  left: 0
  opacity: 100%
  width: 100%

::v-deep .utilsSvgCmpPaintP1.svg
  fill: $tiki-purple

.headerCompaniesAmountMiddleText
  position: absolute
  top: 50%
  left: 50%
  z-index: 2
  transform: translate(-50%, -50%)
  width: inherit
  text-align: center
</style>
