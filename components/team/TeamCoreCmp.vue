<template>
  <div class="teamCoreCmpCnt">
    <div class="teamCoreCmpHeading">Team</div>
    <div class="teamCoreCmpBios">
      <team-member-cmp
        v-if="cms.one != null"
        :cms="cms.one"
        class="teamMemberCmp"
      />
      <team-member-cmp
        v-if="cms.two != null"
        :cms="cms.two"
        class="teamMemberCmp"
      />
    </div>
  </div>
</template>

<script>
import TeamMemberCmp from '~/components/team/TeamMemberCmp'

export default {
  name: 'TeamCoreCmp',
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
.teamCoreCmpHeading
  color: $text
  font-size: large
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch
  margin-top: 1em

.teamCoreCmpBios
  margin: 0 auto
  width: fit-content

.teamMemberCmp
  margin: 1em auto 1em auto
  width: fit-content
  display: inline-block
</style>
