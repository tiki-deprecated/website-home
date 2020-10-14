<template>
  <div>
    <a :href="cms.url" class="utilsButtonVCmpLink">
      <div class="utilsButtonVCmpButton">
        <utils-svg-cmp
          v-if="cms.icon != null"
          :name="cms.icon"
          class="utilsButtonVCmpIcon"
        />
        <div v-if="cms.text != null" class="utilsButtonVCmpText">
          {{ cms.text }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'UtilsButtonVCmp',
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
.utilsButtonVCmpLink
  text-decoration: none
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  -webkit-tap-highlight-color: transparent

.utilsButtonVCmpLink:focus
  outline: none !important

.utilsButtonVCmpIcon
  height: 2em
  margin: auto

.utilsButtonVCmpText
  font-size: x-small
  color: $text-light
  text-align: center
  font-weight: normal
  letter-spacing: 0.2ch
  margin-top: 0.25em
</style>
