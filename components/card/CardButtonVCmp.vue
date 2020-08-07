<template>
  <a :href="cms.url" class="link">
    <div class="button">
      <utils-svg-cmp v-if="cms.icon != null" :name="cms.icon" />
      <div v-if="cms.text != null" class="text">{{ cms.text }}</div>
    </div>
  </a>
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
.link
  text-decoration: none

::v-deep .icon
  width: 3em

.text
  font-size: small
  color: $brown-light
  text-align: center
</style>
