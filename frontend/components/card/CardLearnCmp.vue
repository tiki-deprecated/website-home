<template>
  <div>
    <div class="cardLearnCmpCnt">
      <card-title-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        class="cardTitleCmp"
      />
      <card-button-h-cmp
        v-if="cms.meet != null"
        :cms="cms.meet"
        class="cardButtonHCmpMeet"
      />
      <card-button-h-cmp
        v-if="cms.join != null"
        :cms="cms.join"
        class="cardButtonHCmpJoin"
      />
      <card-title-cmp
        v-if="cms.follow.title != null"
        :title="cms.follow.title"
        :subtitle="cms.follow.subtitle"
        class="cardTitleCmpFollow"
      />
      <div class="cardLearnCmpFollowButtons">
        <card-button-v-cmp
          v-if="cms.follow.button.one != null"
          :cms="cms.follow.button.one"
          class="cardButtonVCmp"
        />
        <card-button-v-cmp
          v-if="cms.follow.button.two != null"
          :cms="cms.follow.button.two"
          class="cardButtonVCmp"
        />
        <card-button-v-cmp
          v-if="cms.follow.button.three != null"
          :cms="cms.follow.button.three"
          class="cardButtonVCmp"
        />
      </div>
      <card-title-cmp
        v-if="cms.tech.title != null"
        :title="cms.tech.title"
        :subtitle="cms.tech.subtitle"
        class="cardTitleCmpTech"
      />
      <div class="cardLearnCmpTechButtons">
        <card-button-v-cmp
          v-if="cms.tech.button.one != null"
          :cms="cms.tech.button.one"
          class="cardButtonVCmp"
        />
        <card-button-v-cmp
          v-if="cms.tech.button.two != null"
          :cms="cms.tech.button.two"
          class="cardButtonVCmp"
        />
      </div>
    </div>
    <utils-svg-cmp
      v-if="cms.tick != null"
      name="tick-left"
      class="cardLearnCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import CardTitleCmp from '~/components/card/CardTitleCmp'
import CardButtonHCmp from '~/components/card/CardButtonHCmp'
import CardButtonVCmp from '~/components/card/CardButtonVCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'CardLearnCmp',
  components: {
    CardTitleCmp,
    CardButtonVCmp,
    CardButtonHCmp,
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
.cardLearnCmpCnt
  padding: 1em 1em

.cardTitleCmp, .cardTitleCmpFollow, .cardTitleCmpTech
  margin-bottom: 1.5em

.cardLearnCmpFollowButtons
  display: flex
  margin-bottom: 2em

.cardButtonVCmp
  margin-right: 1.5em

.cardLearnCmpTechButtons
  display: flex

.cardButtonHCmpMeet
  margin-bottom: 1em

.cardButtonHCmpJoin
  margin-bottom: 2em

.cardLearnCmpTick
  margin-top: 1.25em
  width: 5.5em
  transform: rotate(180deg)
  margin-right: 0
  margin-left: auto

::v-deep .cardLearnCmpTick.svg
  fill: $green
</style>
