<template>
  <div class="ctrl">
    <div class="ctrlContainer">
      <div class="headerContainer">
        <span class="headerText">Think Spotify, for data.</span>
        <br /><br />
        <span class="subHeaderText"
          >You don't need to be a musician to enjoy music.
          <span class="accentText"
            >You shouldn't have to be an engineer to use data.</span
          ></span
        >
      </div>
      <div class="featureListContainer">
        <div class="featureRow">
          <utils-svg-cmp name="feature-looking-glass" class="featureIcon" />
          <div class="featureText">
            With TIKI:
            <b class="featureTextBold">search</b>,
            <b class="featureTextBold">discover</b> &
            <b class="featureTextBold">get recommended</b>
            real-time insights relevant to your business
          </div>
        </div>
        <div class="featureRow">
          <utils-svg-cmp name="feature-binoculars" class="featureIcon" />
          <div class="featureText">
            Scope out the competition. You read that right, not just your data.
            <b class="featureTextBold">View any company’s data.</b>
          </div>
        </div>
        <div class="featureRow">
          <utils-svg-cmp name="feature-badge" class="featureIcon" />
          <div class="featureText">
            Get inspired by companies you admire.
            <b class="featureTextBold">Learn their secrets and benchmark</b>
            against them.
          </div>
        </div>
        <div class="featureRow">
          <utils-svg-cmp name="feature-insights" class="featureIcon" />
          <div class="featureText">
            <b class="featureTextBold">Hundreds of thousands of insights</b> out
            of the box. Millions, then billions more coming.
          </div>
        </div>
        <div class="featureRow">
          <utils-svg-cmp name="feature-ethical" class="featureIcon" />
          <div class="featureText">
            Ethically sourced, direct from users, with consent and $$$. The
            <b class="featureTextBold">highest quality</b> with
            <b class="featureTextBold">none of the legal mess</b>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'

export default {
  name: 'FeaturesCmp',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.featureRow
  display: flex
  justify-content: center
  align-items: center

.headerText
  font-family: $font-family-koara
  color: $tiki-purple
  font-weight: lighter
  text-align: center

.subHeaderText
  font-family: $font-family-koara
  font-weight: lighter

.accentText
  color: $tiki-pink
  font-weight: normal

.featureListContainer
  margin: 0 auto

.featureText
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  margin-left: 0
  font-weight: normal

.featureTextBold
  font-weight: 600

.ctrl
  background-color: $gray-1

::v-deep .featureIcon.svg > .background
  fill: $white

::v-deep .featureIcon.svg > .primary
  fill: $tiki-blue

::v-deep .featureIcon.svg > .accent
  fill: $orange

@include for-phone
  .headerContainer
    width: 87.5vw
    margin: 0 auto
    padding-top: 10vh

  .featureListContainer
    width: 87.5vw

  .featureText
    width: 64.25vw
    font-size: 4vw

  .featureRow
    margin: 8vh auto 0 auto

  ::v-deep .featureIcon.svg
    width: 15vw
    margin-right: 6vw

  .ctrl
    padding-bottom: 10vh

  .headerText
    font-size: 8.5vw

  .subHeaderText
    font-size: 5.25vw

@include for-tablet
</style>
