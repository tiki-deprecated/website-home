<template>
  <div class="teamContrCmpCnt">
    <div class="teamContrCmpHeading">Contributors</div>
    <div class="teamContrCmpCol">
      <div class="teamContrCmpCol1">
        <team-member-simple-cmp
          v-if="cms.one != null"
          class="teamMemberSimpleCmp"
          :cms="cms.one"
        />
      </div>
      <div class="teamContrCmpCol2"></div>
    </div>
  </div>
</template>

<script>
import TeamMemberSimpleCmp from '~/components/team/TeamMemberSimpleCmp'

export default {
  name: 'TeamContrCmp',
  components: { TeamMemberSimpleCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.teamContrCmpCol1
  width: 45%

.teamContrCmpCol2
  width: 45%

.teamContrCmpHeading
  color: $text
  font-size: large
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch
  margin-top: 1em

.teamContrCmpCol
  display: flex
  justify-content: space-between
</style>
