<template>
  <div
    class="cardButtonHCmpButton"
    :style="{
      'background-color': `${cms.style.color.background}`,
      'box-shadow': `0 0 .5em ${cms.style.color.background}0f`,
    }"
  >
    <div
      class="cardButtonHCmpText"
      :style="{ color: `${cms.style.color.text}` }"
    >
      {{ cms.text }}
    </div>
    <utils-svg-cmp
      name="right-arrow"
      class="cardButtonHCmpArrow"
      :style="{ fill: `${cms.style.color.text}` }"
    />
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'CardButtonHCntCmp',
  components: { UtilsSvgCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.cardButtonHCmpButton
  background-color: $blue
  height: 2.5em
  color: $white
  display: flex
  align-items: center
  justify-content: space-between
  box-shadow: 0 0 .5em rgba($blue, 0.05)
  width: 100%

.cardButtonHCmpText
  width: fit-content
  font-size: small
  margin-left: 0.5em
  text-transform: uppercase
  font-weight: bold
  text-align: left
  height: 1.1em
  overflow: hidden
  padding-bottom: 0.3em

::v-deep .cardButtonHCmpArrow.svg
  fill: $white
  width: 1em
  margin-right: 0.5em
</style>
