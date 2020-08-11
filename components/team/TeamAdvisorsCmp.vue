<template>
  <div class="teamAdvisorsCmpCnt">
    <div class="teamAdvisorsCmpHeading">Advisors</div>
    <div class="teamAdvisorsCmpCol">
      <div class="teamAdvisorsCmpCol1">
        <team-member-simple-cmp
          v-if="cms.one != null"
          class="teamMemberSimpleCmp"
          :cms="cms.one"
        />
      </div>
      <div class="teamAdvisorsCmpCol2">
        <team-member-simple-cmp
          v-if="cms.two != null"
          class="teamMemberSimpleCmp"
          :cms="cms.two"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TeamMemberSimpleCmp from '~/components/team/TeamMemberSimpleCmp'

export default {
  name: 'TeamAdvisorsCmp',
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
.teamAdvisorsCmpCol1
  width: 45%

.teamAdvisorsCmpCol2
  width: 45%

.teamAdvisorsCmpHeading
  color: $text
  font-size: large
  font-weight: bold
  text-transform: uppercase
  letter-spacing: 0.2ch
  margin-top: 2em

.teamAdvisorsCmpCol
  display: flex
  justify-content: space-between
</style>
