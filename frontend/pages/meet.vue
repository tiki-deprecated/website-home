<template>
  <div class="meetPage">
    <header-mission-cmp class="headerMissionCmp" />
    <values-cmp class="valuesCmp" />
    <team-cmp class="teamCmp" />
    <footer-cmp class="footerCmp" />
  </div>
</template>

<script>
import HeaderMissionCmp from '~/components/header_mission/HeaderMissionCmp'
import ValuesCmp from '~/components/values/ValuesCmp'
import TeamCmp from '~/components/team/TeamCmp'
import FooterCmp from '~/components/footer/FooterCmp'

export default {
  name: 'Meet',
  components: {
    HeaderMissionCmp,
    ValuesCmp,
    TeamCmp,
    FooterCmp,
  },
}
</script>

<style lang="sass">
@import "assets/styles/mixins"

@include for-phone
@include for-tablet
</style>
