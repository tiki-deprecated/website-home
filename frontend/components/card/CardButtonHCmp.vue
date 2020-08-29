<template>
  <div>
    <nuxt-link
      v-if="cms.local === true"
      :to="cms.url"
      class="cardButtonHCmpLink"
    >
      <card-button-h-cnt-cmp :cms="cms" />
    </nuxt-link>
    <a v-if="cms.local !== true" :href="cms.url" class="cardButtonHCmpLink">
      <card-button-h-cnt-cmp :cms="cms" />
    </a>
  </div>
</template>

<script>
import CardButtonHCntCmp from '~/components/card/CardButtonHCntCmp.vue'

export default {
  name: 'CardButtonHCmp',
  components: { CardButtonHCntCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.cardButtonHCmpLink
  text-decoration: none
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  -webkit-tap-highlight-color: transparent

.cardButtonHCmpLink:focus
  outline: none !important
</style>
