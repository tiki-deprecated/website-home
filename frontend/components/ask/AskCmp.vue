<template>
  <div class="askCnt">
    <div class="askTitle">
      Any questions? Our team of humans is here to help.
    </div>
    <div class="askButton">
      <div class="askButtonText">Contact the TIKI team</div>
      <utils-svg-cmp name="sketch/arrow" class="askButtonSketch" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'AskCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.askCnt
  background: $gray

.askButton
  display: flex
  align-items: center
  justify-content: space-between
  background: $gray-xdark

::v-deep .askButtonSketch.svg
  fill: $white

.askTitle
  font-family: $font-family-montserrat

.askButtonText
  color: $white

@include for-phone
@include for-tablet
  .askCnt
    padding: 3vw 0

  .askTitle
    font-size: 1.25vw
    text-align: center

  .askButton
    margin: 2vw auto 0 auto
    width: fit-content
    border-radius: 0.75vw

  .askButtonText
    font-size: 1vw
    margin: 0.75vw 0.25vw 0.75vw 1vw

  .askButtonSketch
    margin: 0.75vw 1vw 0.75vw 0.5vw

  ::v-deep .askButtonSketch.svg
    width: 1.25vw
</style>
