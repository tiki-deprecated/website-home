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
            With TIKI: <b>search, discover & get recommended</b> real-time
            insights relevant to your business
          </div>
        </div>
        <div class="featureRow">
          <utils-svg-cmp name="feature-binoculars" class="featureIcon" />
          <div class="featureText">
            Scope out the competition. You read that right, not just your data.
            <b>View any company’s data.</b>
          </div>
        </div>
        <div class="featureRow">
          <utils-svg-cmp name="feature-badge" class="featureIcon" />
          <div class="featureText">
            Get inspired by companies you admire.
            <b>Learn their secrets and benchmark</b> against them.
          </div>
        </div>
        <div class="featureRow">
          <utils-svg-cmp name="feature-insights" class="featureIcon" />
          <div class="featureText">
            <b>Hundreds of thousands of insights</b> out of the box. Millions,
            then billions more coming.
          </div>
        </div>
        <div class="featureRow">
          <utils-svg-cmp name="feature-ethical" class="featureIcon" />
          <div class="featureText">
            Ethically sourced, direct from users, with consent and $$$. The
            <b>highest quality</b> with <b>none of the legal mess</b>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThinkSpotifyCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.featureRow
  display: flex
  justify-content: center
  align-items: center
  margin: 23px auto

.headerContainer
  padding-top: 60px

.headerText
  font-family: $font-family-koara
  font-size: 32px
  color: $tiki-purple
  font-weight: lighter
  text-align: center

.subHeaderText
  font-family: $font-family-koara
  font-size: 20px
  font-weight: lighter

.accentText
  color: $tiki-pink
  font-weight: normal

.featureListContainer
  margin: 0 auto

.featureText
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  font-size: 15px

.ctrl
  background-color: $gray-1
  padding-bottom: 52px

::v-deep .featureIcon.svg
  width: 15vw
  max-width: 150px
  margin-right: 23px
  top: 50%

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

  .featureListContainer
    width: 87.5vw
    margin: 0 auto
    margin-top: 35px

  .featureText
    width: 64.25vw
    margin-left: 0

@include for-tablet
  .ctrl
    display: flex
    justify-content: center
    align-items: center

  .ctrlContainer
    width: 80vw

  .headerText
    font-size: 54px

  .subHeaderText
    font-size: 28px

  .featureRow
    margin: 23px 10px
    float: left

  .featureText
    font-size: 25px
    width: 80%
    margin-left: 0

  .headerContainer
    margin: 10px auto
</style>
