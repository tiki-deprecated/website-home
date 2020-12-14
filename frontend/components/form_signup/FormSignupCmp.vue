<template>
  <div>
    <div class="joinCmpCnt">
      <utils-title-subtitle-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        class="utilsTitleSubtitleCmp"
      />
      <div class="joinCmpVid">
        <utils-video-cmp
          v-if="cms.youtube != null"
          :id="cms.youtube"
          class="utilsVidCmp"
        />
        <utils-share-cmp
          v-if="cms.share != null"
          class="utilsShareCmp"
          :cms="cms.share"
        />
      </div>
      <utils-signup-cmp
        v-if="cms.cta != null"
        :title="cms.cta"
        :disclaimer="cms.disclaimer"
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
import UtilsShareCmp from '@/components/utils/UtilsShareCmp'

export default {
  name: 'FormSignupCmp',
  components: {
    UtilsTitleSubtitleCmp,
    UtilsVideoCmp,
    UtilsSignupCmp,
    UtilsSvgCmp,
    UtilsShareCmp,
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
@import "../../assets/styles/mixins"

.joinCmpCnt
  padding: 1em 1em

.utilsSignupCmp
  margin-top: 3em

.utilsVidCmp
  margin-top: 3em

.joinCmpTick
  margin-top: 2.25em
  width: 5.5em
  transform: rotate(180deg)
  margin-right: 0
  margin-left: auto

::v-deep .joinCmpTick.svg
  fill: $blue

.utilsShareCmp
  margin-top: 0.5em

.joinCmpVid
  width: 100%
  margin: 0 auto
</style>
