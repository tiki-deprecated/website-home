<template>
  <div class="overview">
    <div class="logoContainer">
      <utils-svg-cmp name="logo" class="logo" />
    </div>
    <div class="missionContainer">
      <div class="missionTitle">We are on a mission to</div>
      <div class="missionText1">
        Flip the data ecosystem, placing users in charge by enabling them to
        exercise their data ownership rights, resulting in a new fair market for
        data.
      </div>
      <div class="missionRow">
        <div class="missionText2">
          Users own their data; businesses safely get the insights they need;
          TIKI facilitates.
        </div>
        <div class="imgContainer">
          <img
            sizes="(max-width: 343px) 100vw, 343x"
            srcset="
              ~/assets/images/png/fruit-bowl_w_200.png 200w,
              ~/assets/images/png/fruit-bowl_w_343.png 343w
            "
            src="~/assets/images/png/fruit-bowl_w_343.png"
            alt=""
            class="img"
          />
        </div>
      </div>
    </div>
    <div class="buildingContainer">
      <div class="buildingTitle">We are building</div>
      <div class="buildingText">
        A vertically integrated user data ownership platform that combines data
        privacy, ownership issuance, and marketplace.
      </div>
      <utils-yt-cmp
        class="buildingVideo"
        yt-id="FSQv6CNfy00"
        img-name="yt-placeholder"
        :img-sizes="[
          200, 350, 463, 568, 643, 727, 804, 866, 938, 993, 1045, 1108, 1160,
          1216, 1254, 1305, 1356, 1396, 1400,
        ]"
      />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'
import UtilsYtCmp from '../utils/UtilsYtCmp'

export default {
  name: 'OverviewCmp',
  components: { UtilsYtCmp, UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.overview
  width: 100%
  position: relative
  background-color: $gray-1

.logoContainer
  background-color: $tiki-pink

::v-deep .logo.svg
  fill: $white

.missionContainer, .buildingContainer
  background-color: $white

.missionTitle, .buildingTitle
  font-family: $font-family-nunito-sans
  font-weight: 800
  display: inline-block

.missionText1, .missionText2
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  font-weight: normal

.missionRow
  display: flex

.img
  display: block

.missionTitle
  color: $blue

.buildingTitle
  color: $orange

.buildingVideo
  border-top: solid $orange 1px

@include for-phone
  .logoContainer
    width: 100%
    height: 100vw
    position: relative

  .logo
    width: 80%
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)

  .missionContainer, .buildingContainer
    width: 90%
    margin: 3vh auto 0 auto
    border-radius: 6vw

  .missionTitle, .buildingTitle
    font-size: 5.25vw
    margin: 3vh auto 0 5vw

  .missionText1, .buildingText
    font-size: 4.25vw
    margin: 2vh 5vw 0 5vw

  .missionText2
    font-size: 4.25vw
    margin: 2vh 5vw 5vh 5vw
    width: 50%

  .imgContainer
    width: 33%
    margin: 0 5vw 0 auto

  .img
    height: 15vh
    margin: auto

  .buildingVideo
    margin-top: 3vh

  .buildingContainer
    overflow: hidden
@include for-tablet
</style>
