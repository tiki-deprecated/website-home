<template>
  <div
    class="utilsButtonHCmpButton"
    :style="{
      'background-color': `${cms.style.color.background}`,
      'box-shadow': `0 0 .5em ${cms.style.color.background}0f`,
    }"
  >
    <div
      class="utilsButtonHCmpText"
      :style="{ color: `${cms.style.color.text}` }"
    >
      {{ cms.text }}
    </div>
    <utils-svg-cmp
      name="right-arrow"
      class="utilsButtonHCmpArrow"
      :style="{ fill: `${cms.style.color.text}` }"
    />
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'UtilsButtonHCntCmp',
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
.utilsButtonHCmpButton
  background-color: $blue
  height: 2.5em
  color: $white
  display: flex
  align-items: center
  justify-content: space-between
  box-shadow: 0 0 .5em rgba($blue, 0.05)
  width: 100%

.utilsButtonHCmpText
  width: fit-content
  font-size: small
  margin-left: 0.5em
  text-transform: uppercase
  font-weight: bold
  text-align: left
  height: 1.1em
  overflow: hidden
  padding-bottom: 0.3em

::v-deep .utilsButtonHCmpArrow.svg
  fill: $white
  width: 1em
  margin-right: 0.5em
</style>
