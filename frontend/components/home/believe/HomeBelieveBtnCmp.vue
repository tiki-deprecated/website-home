<template>
  <div>
    <a class="mission" @click="missionClick($event)">
      <div class="missionText">Our Mission</div>
      <utils-svg-cmp name="utils/arrow" class="missionArrow" />
    </a>
    <a class="team" @click="teamClick($event)">
      <div class="teamText">The Team</div>
      <utils-svg-cmp name="utils/arrow" class="teamArrow" />
    </a>
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'

export default {
  name: 'HomeBelieveBtnCmp',
  components: { UtilsSvgCmp },
  methods: {
    missionClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Mission', {
        props: { location: 'Home' },
      })
      this.$router.push('/blog/your-data')
    },
    teamClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Team', {
        props: { location: 'Home' },
      })
      this.$router.push('/blog/team')
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mission, .team
  background: $blue-dark
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.mission:hover, .team:hover
  background: $blue-dark-hlt

.mission, .team, .mission:hover, .team:hover, .mission:visited, .team:visited, .mission:link, .team:link, .mission:active, .team:active
  text-decoration: none

.missionText, .teamText
  font-family: $font-family-koara
  color: $blue-light
  text-align: right

.missionText, .teamText, .missionText:hover, .teamText:hover, .missionText:visited, .teamText:visited, .missionText:link, .teamText:link, .missionText:active, .teamText:active
  text-decoration: none

::v-deep .missionArrow.svg, ::v-deep .teamArrow.svg
  fill: $blue-light

@include for-phone
  .mission, .team
    height: 14vw
    border-radius: 4vw
    width: 60%
    margin: 2vw auto

  .missionText
    font-size: 5.5vw
    width: 66%

  .teamText
    font-size: 5.5vw
    width: 59%

  .missionArrow
    margin-left: 10%

  .teamArrow
    margin-left: 16%

  ::v-deep .missionArrow.svg, ::v-deep .teamArrow.svg
    height: 50%

@include for-tablet
  .mission, .team
    height: 3vw
    border-radius: 0.75vw
    width: 15%
    margin: 0 0.5vw

  .missionText
    font-size: 1.25vw
    width: 65%

  .teamText
    font-size: 1.25vw
    width: 50%

  .missionArrow
    margin-left: 8%

  .teamArrow
    margin-left: 20%

  ::v-deep .missionArrow.svg, ::v-deep .teamArrow.svg
    height: 50%
</style>
