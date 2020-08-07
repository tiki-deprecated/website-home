<template>
  <a :href="url" class="link">
    <div class="button">
      <utils-svg-cmp :name="icon" />
      <div v-if="text != null" class="text">{{ text }}</div>
    </div>
  </a>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'CardButtonVCmp',
  components: { UtilsSvgCmp },
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: null,
    },
    url: {
      type: String,
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
