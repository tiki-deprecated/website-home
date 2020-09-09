<template>
  <div>
    <div class="teamCmpCnt">
      <team-contr-cmp
        v-if="cms.contributors != null"
        :cms="cms.contributors"
        class="teamContrCmp"
      />
      <CardButtonHCmp
        v-if="cms.join != null"
        class="cardButtonHCmp"
        :cms="cms.join"
      />
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
import TeamContrCmp from '~/components/team/TeamContrCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
import CardButtonHCmp from '~/components/card/CardButtonHCmp'

export default {
  name: 'TeamCmp',
  components: { TeamContrCmp, UtilsSvgCmp, CardButtonHCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.teamCmpCnt
  padding: 1em

.utilsSvgCmpTick
  margin-top: 1.25em
  width: 5.5em
  margin-left: 0
  margin-right: auto

::v-deep .utilsSvgCmpTick.svg
  fill: $red

.cardButtonHCmp
  margin-top: 3em
</style>
