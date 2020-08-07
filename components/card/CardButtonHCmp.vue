<template>
  <a :href="cms.url" class="link">
    <div
      class="button"
      :style="{
        'background-color': `${cms.style.color.background}`,
        'box-shadow': `0 0 .5em ${cms.style.color.background}0f`,
      }"
    >
      <div class="cnt">
        <utils-svg-cmp
          v-if="cms.icon != null"
          :name="cms.icon"
          :style="{ fill: `${cms.style.color.text}` }"
        />
        <div class="text" :style="{ color: `${cms.style.color.text}` }">
          {{ cms.text }}
        </div>
      </div>
      <utils-svg-cmp
        name="right-arrow"
        class="arrow"
        :style="{ fill: `${cms.style.color.text}` }"
      />
    </div>
  </a>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'CardHorizButtonCmp',
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
.button
  background-color: $blue
  height: 2.5em
  text-align: center
  color: $white
  display: flex
  align-items: center
  justify-content: space-between
  box-shadow: 0 0 .5em rgba($blue, 0.05)
  width: 100%

.cnt
  display: flex

::v-deep .icon
  width: 1.5em
  margin-left: 0.5em
  fill: $white

.text
  width: fit-content
  font-size: large
  margin-left: 0.5em

.link
  text-decoration: none

::v-deep .arrow
  fill: $white
  width: 1em
  margin-right: 0.5em
</style>
