<template>
  <div>
    <div class="buyerCmpCnt">
      <utils-title-subtitle-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        class="utilsTitleSubtitleCmp"
      />
      <div class="buyerCmpUse">
        <div v-if="cms.story.heading != null" class="buyerCmpUseHeading">
          {{ cms.story.heading }}
        </div>
        <utils-button-h-cmp
          v-if="cms.story.one != null"
          :cms="cms.story.one"
          class="utilsButtonHCmp"
        />
        <utils-button-h-cmp
          v-if="cms.story.two != null"
          :cms="cms.story.two"
          class="utilsButtonHCmp"
        />
        <utils-button-h-cmp
          v-if="cms.story.three != null"
          :cms="cms.story.three"
          class="utilsButtonHCmp"
        />
      </div>
      <utils-signup-cmp
        v-if="cms.cta != null"
        :title="cms.cta"
        @utilsSignupCmpSubmit="utilsSignupCmpSubmit"
      />
    </div>
    <utils-svg-cmp
      v-if="cms.tick != null"
      name="tick-left"
      class="buyerCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import UtilsTitleSubtitleCmp from '@/components/utils/UtilsTitleSubtitleCmp'
import UtilsButtonHCmp from '@/components/utils/UtilsButtonHCmp'
import UtilsSignupCmp from '@/components/utils/UtilsSignupCmp'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'BuyerCmp',
  components: {
    UtilsTitleSubtitleCmp,
    UtilsButtonHCmp,
    UtilsSignupCmp,
    UtilsSvgCmp,
  },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
  methods: {
    utilsSignupCmpSubmit() {
      this.$emit('buyerSignupCmpSubmit')
    },
  },
}
</script>

<style scoped lang="sass">
.buyerCmpCnt
  padding: 1em 1em

.utilsTitleSubtitleCmp
  margin-bottom: 2em

.utilsButtonHCmp
  margin: 1em 0

.buyerCmpUse
  margin-bottom: 1.5em

.buyerCmpUseHeading
  font-size: smaller
  font-weight: bold
  margin-bottom: 1em
  color: $text-light
  text-transform: uppercase

.buyerCmpTick
  margin-top: 1.25em
  width: 5.5em

::v-deep .buyerCmpTick.svg
  fill: $green-dark
</style>
