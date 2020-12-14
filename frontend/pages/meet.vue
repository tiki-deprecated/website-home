<template>
  <div class="meetPage">
    <header-home-cmp
      v-if="cms.header != null"
      class="headerCmp"
      :cms="cms.header"
    />
    <values-cmp v-if="cms.values != null" class="valuesCmp" :cms="cms.values" />
    <team-cmp v-if="cms.team != null" class="teamCmp" :cms="cms.team" />
    <footer-cmp v-if="cms.footer != null" class="footerCmp" :cms="cms.footer" />
  </div>
</template>

<script>
import HeaderHomeCmp from '~/components/header_home/HeaderHomeCmp'
import FooterCmp from '~/components/footer/FooterCmp'
import ValuesCmp from '~/components/values/ValuesCmp'
import TeamCmp from '~/components/team/TeamCmp'

export default {
  name: 'MeetPage',
  components: {
    HeaderHomeCmp,
    FooterCmp,
    ValuesCmp,
    TeamCmp,
  },
  async asyncData({ $content }) {
    const cms = await $content('meet').fetch()
    return { cms }
  },
}
</script>

<style lang="sass">
@import "assets/styles/mixins"

.meetPage
  width: 100%
  position: relative

.teamCmp
  margin-top: 1em

@include for-tablet
  .meetPage
    max-width: 50%
    margin: 0 auto

@include for-desktop
  .meetPage
    max-width: 35%
    margin: 0 auto
</style>
