<template>
  <a :href="url" class="link">
    <div
      class="button"
      :style="{
        'background-color': `${buttonColor}`,
        'box-shadow': `0 0 .5em ${buttonColor}0f`,
      }"
    >
      <div class="cnt">
        <utils-svg-cmp
          v-if="icon != null"
          :name="icon"
          :style="{ fill: `${textColor}` }"
        />
        <div class="text" :style="{ color: `${textColor}` }">{{ text }}</div>
      </div>
      <utils-svg-cmp
        name="right-arrow"
        class="arrow"
        :style="{ fill: `${textColor}` }"
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
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: false,
      default: '#ffffff',
    },
    buttonColor: {
      type: String,
      required: false,
      default: '#63e2ff',
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
