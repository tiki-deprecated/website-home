<template>
  <div>
    <div class="valuesCmpCnt">
      <utils-title-subtitle-extended-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        :extended="cms.extended"
        class="utilsTitleSubtitleExtendedCmp"
      />
      <UtilsSvgCmp
        v-if="cms.divider != null"
        name="tick"
        class="utilsSvgCmpDivider"
        :style="{ fill: `${cms.divider}` }"
      />
      <div class="valuesCmpValues">
        <div class="valuesCmpValuesHeading">Values</div>
        <utils-colored-string-cmp
          v-if="cms.values.one != null"
          :highlight="cms.values.one.highlight"
          :desc="cms.values.one.description"
          :color="cms.values.one.color"
          class="utilsColoredStringCmp"
        />
        <utils-colored-string-cmp
          v-if="cms.values.two != null"
          :highlight="cms.values.two.highlight"
          :desc="cms.values.two.description"
          :color="cms.values.two.color"
          class="utilsColoredStringCmp"
        />
        <utils-colored-string-cmp
          v-if="cms.values.three != null"
          :highlight="cms.values.three.highlight"
          :desc="cms.values.three.description"
          :color="cms.values.three.color"
          class="utilsColoredStringCmp"
        />
        <utils-colored-string-cmp
          v-if="cms.values.four != null"
          :highlight="cms.values.four.highlight"
          :desc="cms.values.four.description"
          :color="cms.values.four.color"
          class="utilsColoredStringCmp"
        />
        <utils-colored-string-cmp
          v-if="cms.values.five != null"
          :highlight="cms.values.five.highlight"
          :desc="cms.values.five.description"
          :color="cms.values.five.color"
          class="utilsColoredStringCmp"
        />
      </div>
    </div>
    <UtilsSvgCmp
      v-if="cms.tick != null"
      name="tick-left"
      class="utilsSvgCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import UtilsTitleSubtitleExtendedCmp from '~/components/utils/UtilsTitleSubtitleExtendedCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
import UtilsColoredStringCmp from '~/components/utils/UtilsColoredStringCmp'

export default {
  name: 'ValuesCmp',
  components: {
    UtilsTitleSubtitleExtendedCmp,
    UtilsColoredStringCmp,
    UtilsSvgCmp,
  },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.valuesCmpCnt
  padding: 1em

.utilsTitleSubtitleExtendedCmp
  margin-top: 1em

.utilsSvgCmpDivider
  width: 4em
  margin: 3em auto 0 auto

.utilsSvgCmpDivider.svg
  fill: $grey

.valuesCmpValues
  margin-top: 3em

.utilsColoredStringCmp
  margin-top: 2em
  font-size: medium

.utilsSvgCmpTick
  margin-top: 2.25em
  width: 5.5em
  transform: rotate(180deg)
  margin-right: 0
  margin-left: auto

::v-deep .utilsSvgCmpTick.svg
  fill: $orange

.valuesCmpValuesHeading
  color: $text
  width: fit-content
  font-size: large
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch
</style>
