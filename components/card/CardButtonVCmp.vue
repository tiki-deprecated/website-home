<template>
  <div>
    <a :href="cms.url" class="cardButtonVCmpLink">
      <div class="cardButtonVCmpButton">
        <utils-svg-cmp
          v-if="cms.icon != null"
          :name="cms.icon"
          class="cardButtonVCmpIcon"
        />
        <div v-if="cms.text != null" class="cardButtonVCmpText">
          {{ cms.text }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'CardButtonVCmp',
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
.cardButtonVCmpLink
  text-decoration: none

.cardButtonVCmpIcon
  height: 2.25em
  margin: auto

.cardButtonVCmpText
  font-size: x-small
  color: $text-light
  text-align: center
  font-weight: normal
  letter-spacing: 0.2ch
  margin-top: 0.25em
</style>
