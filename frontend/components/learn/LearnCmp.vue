<template>
  <div>
    <div class="learnCmpCnt">
      <utils-title-subtitle-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        class="utilsTitleSubtitleCmp"
      />
      <utils-button-h-cmp
        v-if="cms.meet != null"
        :cms="cms.meet"
        class="utilsButtonHCmpMeet"
      />
      <utils-button-h-cmp
        v-if="cms.join != null"
        :cms="cms.join"
        class="utilsButtonHCmpJoin"
      />
      <utils-title-subtitle-cmp
        v-if="cms.follow.title != null"
        :title="cms.follow.title"
        :subtitle="cms.follow.subtitle"
        class="utilsTitleSubtitleCmpFollow"
      />
      <div class="learnCmpFollowButtons">
        <utils-button-v-cmp
          v-if="cms.follow.button.one != null"
          :cms="cms.follow.button.one"
          class="utilsButtonVCmp"
        />
        <utils-button-v-cmp
          v-if="cms.follow.button.two != null"
          :cms="cms.follow.button.two"
          class="utilsButtonVCmp"
        />
        <utils-button-v-cmp
          v-if="cms.follow.button.three != null"
          :cms="cms.follow.button.three"
          class="utilsButtonVCmp"
        />
        <utils-button-v-cmp
          v-if="cms.follow.button.four != null"
          :cms="cms.follow.button.four"
          class="utilsButtonVCmp"
        />
      </div>
    </div>
    <utils-svg-cmp
      v-if="cms.tick != null"
      name="tick-left"
      class="learnCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import UtilsTitleSubtitleCmp from '@/components/utils/UtilsTitleSubtitleCmp'
import UtilsButtonHCmp from '@/components/utils/UtilsButtonHCmp'
import UtilsButtonVCmp from '@/components/utils/UtilsButtonVCmp'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'LearnCmp',
  components: {
    UtilsTitleSubtitleCmp,
    UtilsButtonVCmp,
    UtilsButtonHCmp,
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
.learnCmpCnt
  padding: 1em 1em

.utilsTitleSubtitleCmp, .utilsTitleSubtitleCmpFollow
  margin-bottom: 1.5em

.learnCmpFollowButtons
  display: flex

.utilsButtonVCmp
  margin-right: 1.5em

.utilsButtonHCmpMeet
  margin-bottom: 1em

.utilsButtonHCmpJoin
  margin-bottom: 2em

.learnCmpTick
  margin-top: 2em
  width: 5.5em
  transform: rotate(180deg)
  margin-right: 0
  margin-left: auto

::v-deep .learnCmpTick.svg
  fill: $green
</style>
