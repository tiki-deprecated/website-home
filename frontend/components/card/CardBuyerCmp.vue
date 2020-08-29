<template>
  <div>
    <div class="cardBuyerCmpCnt">
      <card-title-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        class="cardTitleCmp"
      />
      <div class="cardBuyerCmpUse">
        <div v-if="cms.story.heading != null" class="cardBuyerCmpUseHeading">
          {{ cms.story.heading }}
        </div>
        <card-button-h-cmp
          v-if="cms.story.one != null"
          :cms="cms.story.one"
          class="cardButtonHCmp"
        />
        <card-button-h-cmp
          v-if="cms.story.two != null"
          :cms="cms.story.two"
          class="cardButtonHCmp"
        />
        <card-button-h-cmp
          v-if="cms.story.three != null"
          :cms="cms.story.three"
          class="cardButtonHCmp"
        />
      </div>
      <card-signup-cmp
        v-if="cms.cta != null"
        :title="cms.cta"
        @cardSignupCmpSubmit="cardSignupCmpSubmit"
      />
    </div>
    <utils-svg-cmp
      v-if="cms.tick != null"
      name="tick-left"
      class="cardBuyerCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import CardTitleCmp from '~/components/card/CardTitleCmp'
import CardButtonHCmp from '~/components/card/CardButtonHCmp'
import CardSignupCmp from '~/components/card/CardSignupCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'

export default {
  name: 'CardBuyerCmp',
  components: { CardTitleCmp, CardButtonHCmp, CardSignupCmp, UtilsSvgCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
  methods: {
    cardSignupCmpSubmit() {
      this.$emit('cardBuyerSignupCmpSubmit')
    },
  },
}
</script>

<style scoped lang="sass">
.cardBuyerCmpCnt
  padding: 1em 1em

.cardTitleCmp
  margin-bottom: 2em

.cardButtonHCmp
  margin: 1em 0

.cardBuyerCmpUse
  margin-bottom: 1.5em

.cardBuyerCmpUseHeading
  font-size: smaller
  font-weight: bold
  margin-bottom: 1em
  color: $text-light
  text-transform: uppercase

.cardBuyerCmpTick
  margin-top: 1.25em
  width: 5.5em

::v-deep .cardBuyerCmpTick.svg
  fill: $green-dark
</style>
