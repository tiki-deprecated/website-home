<template>
  <div>
    <div class="teamCmpCore">
      <team-core-cmp
        v-if="cms.core != null"
        :cms="cms.core"
        class="teamCoreCmp"
      />
    </div>
    <utils-svg-cmp
      v-if="cms.tick1 != null"
      name="tick-left"
      class="utilsSvgCmpTick1"
      :style="{ fill: `${cms.tick1}` }"
    />
    <div class="teamCmpExtended">
      <team-contr-cmp
        v-if="cms.contributors != null"
        :cms="cms.contributors"
        class="teamContrCmp"
      />
      <team-advisors-cmp
        v-if="cms.advisors != null"
        :cms="cms.advisors"
        class="teamAdvisorsCmp"
      />
    </div>
    <UtilsSvgCmp
      v-if="cms.tick2 != null"
      name="tick-left"
      class="utilsSvgCmpTick2"
      :style="{ fill: `${cms.tick2}` }"
    />
  </div>
</template>

<script>
import TeamCoreCmp from '~/components/team/TeamCoreCmp'
import TeamContrCmp from '~/components/team/TeamContrCmp'
import TeamAdvisorsCmp from '~/components/team/TeamAdvisorsCmp'
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'

export default {
  name: 'TeamCmp',
  components: { TeamCoreCmp, TeamContrCmp, TeamAdvisorsCmp, UtilsSvgCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.teamCmpCore, .teamCmpExtended
  padding: 1em

.utilsSvgCmpTick1
  margin-top: 1.25em
  width: 5.5em
  margin-left: 0
  margin-right: auto

::v-deep .utilsSvgCmpTick1.svg
  fill: $green-dark

.utilsSvgCmpTick2
  margin-top: 1.25em
  width: 5.5em
  transform: rotate(180deg)
  margin-right: 0
  margin-left: auto

::v-deep .utilsSvgCmpTick2.svg
  fill: $red
</style>
