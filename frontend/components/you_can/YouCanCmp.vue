<template>
  <div>
    <div class="productCmpCnt">
      <utils-title-subtitle-cmp
        :v-if="cms.title != null"
        :title="cms.title"
        class="productTitleCmp"
      />
      <utils-colored-string-cmp
        v-if="cms.features.one != null"
        :highlight="cms.features.one.highlight"
        :desc="cms.features.one.description"
        :color="cms.features.one.color"
        class="utilsColoredStringCmp"
      />
      <utils-colored-string-cmp
        v-if="cms.features.two != null"
        :highlight="cms.features.two.highlight"
        :desc="cms.features.two.description"
        :color="cms.features.two.color"
        class="utilsColoredStringCmp"
      />
      <utils-colored-string-cmp
        v-if="cms.features.three != null"
        :highlight="cms.features.three.highlight"
        :desc="cms.features.three.description"
        :color="cms.features.three.color"
        class="utilsColoredStringCmp"
      />
    </div>
    <utils-svg-cmp
      v-if="cms.tick != null"
      name="tick-left"
      class="productCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import UtilsTitleSubtitleCmp from '@/components/utils/UtilsTitleSubtitleCmp'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import UtilsColoredStringCmp from '@/components/utils/UtilsColoredStringCmp'

export default {
  name: 'YouCanCmp',
  components: { UtilsTitleSubtitleCmp, UtilsSvgCmp, UtilsColoredStringCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.productCmpCnt
  padding: 1em 1em

.productTitleCmp
  margin-top: 1em

.productCmpTick
  margin-top: 2.25em
  width: 5.5em

.utilsColoredStringCmp
  margin-top: 2.5em
  font-size: medium

::v-deep .productCmpTick.svg
  fill: $green-dark
</style>
