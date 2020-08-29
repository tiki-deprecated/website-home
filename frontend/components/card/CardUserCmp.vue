<template>
  <div>
    <div class="cardUserCmpCnt">
      <card-title-cmp
        v-if="cms.title != null"
        :title="cms.title"
        :subtitle="cms.subtitle"
        class="cardTitleCmp"
      />
      <card-video-cmp
        v-if="cms.youtube != null"
        :id="cms.youtube"
        class="cardVidCmp"
      />
      <card-signup-cmp
        v-if="cms.cta != null"
        :title="cms.cta"
        class="cardSignupCmp"
        @cardSignupCmpSubmit="cardSignupCmpSubmit"
      />
    </div>
    <utils-svg-cmp
      v-if="cms.tick != null"
      name="tick-left"
      class="cardUserCmpTick"
      :style="{ fill: `${cms.tick}` }"
    />
  </div>
</template>

<script>
import CardTitleCmp from '~/components/card/CardTitleCmp'
import CardVideoCmp from '~/components/card/CardVideoCmp'
import CardSignupCmp from '~/components/card/CardSignupCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'

export default {
  name: 'CardUserCmp',
  components: { CardTitleCmp, CardVideoCmp, CardSignupCmp, UtilsSvgCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
  methods: {
    cardSignupCmpSubmit() {
      this.$emit('cardUserSignupCmpSubmit')
    },
  },
}
</script>

<style scoped lang="sass">
.cardUserCmpCnt
  padding: 1em 1em

.cardTitleCmp
  margin-bottom: 2em

.cardVidCmp
  margin-bottom: 2em

.cardUserCmpTick
  margin-top: 1.25em
  width: 5.5em
  transform: rotate(180deg)
  margin-right: 0
  margin-left: auto

::v-deep .cardUserCmpTick.svg
  fill: $blue
</style>
