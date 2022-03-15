<template>
  <div class="features">
    <div class="featuresContainer">
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

.features
  background-color: $gray-1

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

.featureRow
  display: flex
  justify-content: center
  align-items: center

.featureText
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  margin-left: 0
  font-weight: 400

.featureTextBold
  font-weight: 700

::v-deep .featureIcon.svg > .background
  fill: $white

::v-deep .featureIcon.svg > .primary
  fill: $tiki-blue

::v-deep .featureIcon.svg > .accent
  fill: $orange

@include for-phone
  .headerText
    font-size: 2rem

  .subHeaderText
    font-size: 1.25rem

  .headerContainer
    width: 87.5vw
    margin: 0 auto
    padding-top: 10vh

  .featureListContainer
    width: 87.5vw

  .featureRow
    margin: 8vh auto 0 auto

  .featureText
    width: 64.25%
    font-size: .94rem

  ::v-deep .featureIcon.svg
    width: 15%
    margin-right: 6%

@include for-tablet
  .features
    max-height: 100vh

  .featuresContainer
    max-height: 100vh

  .headerText
    font-size: 2rem

  .subHeaderText
    font-size: 1.25rem

  .headerContainer
    width: 87.5%
    height: 15%
    margin: 0 auto
    padding-top: 5vh

  .featureListContainer
    width: 87.5%
    height: 85%
    display: grid
    grid-template-columns: 50% 50%

  .featureRow
    margin: 7vh 0.5vw 0 0.5vw

  .featureText
    width: 80%
    font-size: .94rem

  ::v-deep .featureIcon.svg
    width: 15%
    margin-right: 3%
</style>
