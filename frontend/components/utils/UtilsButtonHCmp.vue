<template>
  <div>
    <nuxt-link
      v-if="cms.local === true"
      :to="cms.url"
      class="utilsButtonHCmpLink"
    >
      <utils-button-h-cnt-cmp :cms="cms" />
    </nuxt-link>
    <a v-if="cms.local !== true" :href="cms.url" class="utilsButtonHCmpLink">
      <utils-button-h-cnt-cmp :cms="cms" />
    </a>
  </div>
</template>

<script>
import UtilsButtonHCntCmp from '~/components/utils/UtilsButtonHCntCmp.vue'

export default {
  name: 'UtilsButtonHCmp',
  components: { UtilsButtonHCntCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.utilsButtonHCmpLink
  text-decoration: none
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  -webkit-tap-highlight-color: transparent

.utilsButtonHCmpLink:focus
  outline: none !important
</style>
