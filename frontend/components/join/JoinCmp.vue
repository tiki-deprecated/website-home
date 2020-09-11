<template>
  <div>
    <div class="joinCmpCnt">
      <utils-title-subtitle-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        class="utilsTitleSubtitleCmp"
      />
      <utils-video-cmp
        v-if="cms.youtube != null"
        :id="cms.youtube"
        class="utilsVidCmp"
      />
      <utils-signup-cmp
        v-if="cms.cta != null"
        :title="cms.cta"
        class="utilsSignupCmp"
        @utilsSignupCmpSubmit="utilsSignupCmpSubmit"
      />
    </div>
    <utils-svg-cmp
      v-if="cms.tick != null"
      name="tick-left"
      class="joinCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import UtilsTitleSubtitleCmp from '@/components/utils/UtilsTitleSubtitleCmp'
import UtilsVideoCmp from '@/components/utils/UtilsVideoCmp'
import UtilsSignupCmp from '@/components/utils/UtilsSignupCmp'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'JoinCmp',
  components: {
    UtilsTitleSubtitleCmp,
    UtilsVideoCmp,
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
      this.$emit('userSignupCmpSubmit')
    },
  },
}
</script>

<style scoped lang="sass">
.joinCmpCnt
  padding: 1em 1em

.utilsTitleSubtitleCmp
  margin-bottom: 2em

.utilsVidCmp
  margin-bottom: 2em

.joinCmpTick
  margin-top: 1.25em
  width: 5.5em
  transform: rotate(180deg)
  margin-right: 0
  margin-left: auto

::v-deep .joinCmpTick.svg
  fill: $blue
</style>
