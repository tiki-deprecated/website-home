<template>
  <div class="teamContrCmpCnt">
    <div class="teamContrCmpHeading">Contributors</div>
    <div class="teamContrCmpMembers">
      <team-member-cmp
        v-if="cms.one != null"
        class="teamMemberCmp"
        :cms="cms.one"
      />
      <team-member-cmp
        v-if="cms.two != null"
        class="teamMemberCmp"
        :cms="cms.two"
      />
      <team-member-cmp
        v-if="cms.three != null"
        class="teamMemberCmp"
        :cms="cms.three"
      />
      <team-member-cmp
        v-if="cms.four != null"
        class="teamMemberCmp"
        :cms="cms.four"
      />
      <team-member-cmp
        v-if="cms.five != null"
        class="teamMemberCmp"
        :cms="cms.five"
      />
    </div>
  </div>
</template>

<script>
import TeamMemberCmp from '~/components/team/TeamMemberCmp'

export default {
  name: 'TeamContrCmp',
  components: { TeamMemberCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.teamContrCmpHeading
  color: $text
  font-size: large
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch
  margin-top: 1em

.teamContrCmpMembers
  display: flex
  justify-content: space-around
  flex-wrap: wrap

.teamMemberCmp
  width: 8em
  margin: 1em 0
</style>
