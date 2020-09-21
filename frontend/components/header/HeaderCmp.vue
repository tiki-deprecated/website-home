<template>
  <div>
    <div class="headerCmpCnt">
      <nuxt-link to="/">
        <utils-svg-cmp
          v-if="cms.logo != null"
          :name="cms.logo"
          class="utilsSvgCmp headerCmpLogo"
        />
      </nuxt-link>
      <nuxt-link to="/">
        <utils-svg-cmp
          v-if="cms.icon != null"
          :name="cms.icon"
          class="utilsSvgCmp headerCmpIcon"
        />
      </nuxt-link>
    </div>
    <utils-svg-cmp
      v-if="cms.tick != null"
      name="tick-left"
      class="utilsSvgCmp headerCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'HeaderCmp',
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
@import "assets/styles/mixins"

.headerCmpCnt
  display: flex
  justify-content: space-between
  align-items: center
  margin: 1em

.headerCmpLogo
  width: 4.75em

::v-deep .headerCmpLogo.svg
  fill: $blue

.headerCmpIcon
  width: 3em

.headerCmpTick
  width: 5.5em

::v-deep .headerCmpTick.svg
  fill: $orange

@include for-tablet
  .headerCmpCnt
    margin: 1.5em 0

@include for-tablet
  .headerCmpLogo
    width: 5.25em

@include for-tablet
  .headerCmpIcon
    width: 3.25em
</style>
