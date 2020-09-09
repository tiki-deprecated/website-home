<template>
  <div>
    <div class="valuesCmpCnt">
      <values-heading-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        :extended="cms.extended"
        class="valuesHeadingCmp"
      />
      <UtilsSvgCmp
        v-if="cms.divider != null"
        name="tick"
        class="utilsSvgCmpDivider"
        :style="{ fill: `${cms.divider}` }"
      />
      <div class="valuesCmpValues">
        <div class="valuesCmpValuesHeading">Values</div>
        <values-detail-cmp
          v-if="cms.values.one != null"
          :value="cms.values.one.value"
          :desc="cms.values.one.description"
          :color="cms.values.one.color"
          class="valuesDetailCmp"
        />
        <values-detail-cmp
          v-if="cms.values.two != null"
          :value="cms.values.two.value"
          :desc="cms.values.two.description"
          :color="cms.values.two.color"
          class="valuesDetailCmp"
        />
        <values-detail-cmp
          v-if="cms.values.three != null"
          :value="cms.values.three.value"
          :desc="cms.values.three.description"
          :color="cms.values.three.color"
          class="valuesDetailCmp"
        />
        <values-detail-cmp
          v-if="cms.values.four != null"
          :value="cms.values.four.value"
          :desc="cms.values.four.description"
          :color="cms.values.four.color"
          class="valuesDetailCmp"
        />
        <values-detail-cmp
          v-if="cms.values.five != null"
          :value="cms.values.five.value"
          :desc="cms.values.five.description"
          :color="cms.values.five.color"
          class="valuesDetailCmp"
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
import ValuesHeadingCmp from '~/components/values/ValuesHeadingCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
import ValuesDetailCmp from '~/components/values/ValuesDetailCmp'

export default {
  name: 'ValuesCmp',
  components: { ValuesHeadingCmp, ValuesDetailCmp, UtilsSvgCmp },
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

.valuesHeadingCmp
  margin-top: 1em

.utilsSvgCmpDivider
  width: 4em
  margin: 1.5em auto 0 auto

.utilsSvgCmpDivider.svg
  fill: $grey

.valuesCmpValues
  margin-top: 1.5em

.valuesDetailCmp
  margin-top: 1.5em

.utilsSvgCmpTick
  margin-top: 1.25em
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
