<template>
  <div class="overview">
    <div class="logoContainer">
      <utils-svg-cmp name="logo" class="logo" />
    </div>
    <div class="missionContainer">
      <div class="missionRow">
        <span class="missionText">
          <div class="missionTitle">We are on a mission</div>
          <div class="missionText1">
            To flip the data ecosystem, placing users in charge by enabling them
            to exercise their data ownership rights, resulting in a new fair
            market for data.
          </div>
          <div class="missionText2">
            Users own their data. <br />
            Businesses safely get the insights they need. <br />
            TIKI facilitates.
          </div>
        </span>

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
      <div class="buildingRow">
        <div class="strictVideoContainer">
          <utils-yt-cmp
            class="buildingVideo"
            yt-id="QbIO7EiHxcg"
            img-name="jpg/product-video"
            img-type="jpg"
            :img-sizes="[200, 441, 687, 896, 1060, 1379, 1397, 1400]"
          />
        </div>

        <span class="missionText">
          <div class="buildingTitle">We are building</div>
          <div class="buildingText1">
            A vertically integrated user data ownership platform that combines
            data privacy, ownership issuance, and marketplace.
          </div>
        </span>
      </div>
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
  position: relative

::v-deep .logo.svg
  fill: $white

.missionContainer, .buildingContainer
  background-color: $white

.missionTitle, .buildingTitle
  font-family: $font-family-nunito-sans
  font-weight: 800
  display: inline-block

.missionText1, .missionText2, .buildingText1
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  font-weight: 600

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

  .missionText1
    font-size: 1rem
    margin: 2vh -15vw 0 5vw

  .buildingText1
    font-size: 1rem
    margin: 2vh 5vw

  .missionText2
    font-size: 4.25vw
    margin: 2vh 5vw 5vh 5vw

  .imgContainer
    width: 10%
    max-height: 20vh
    margin: 40% 25% 0 -15%

  .img
    height: 100%
    margin: auto

  .buildingVideo
    margin-top: 3vh

  .buildingContainer
    overflow: hidden

@include for-tablet
  .logoContainer
    width: 100%
    height: 20vw

  .logo
    width: 50%
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)

  .missionContainer, .buildingContainer
    width: 66%
    margin: 5vh auto 0 auto
    border-radius: 1vw

  .missionTitle, .buildingTitle
    font-size: 2.25vw
    margin: 3vh auto 0 2vw

  .missionText1, .buildingText1
    font-size: 1.25vw
    margin: 2vh 0 0 2vw

  .missionText2
    font-size: 1.25vw
    margin: 2vh 2vw 5vh 2vw
    width: 60%

  .buildingRow
    display: flex

  .buildingTitle
    float: right
    margin-right: 3vw

  .buildingText1
    float: right
    margin-right: 3vw
    width: 70%
    text-align: right

  .imgContainer
    width: 50%
    justify-content: center
    display: flex

  .img
    height: 20vh
    margin: auto
    display: block

  .strictVideoContainer
    width: 100%
    margin-top: 6vh
    margin-bottom: 6vh
    margin-left: 5vw
    display: block

  .buildingContainer
    overflow: hidden
</style>
