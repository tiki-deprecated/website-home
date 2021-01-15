<template>
  <div class="socialFollowCnt">
    <div class="socialFollowTitleCnt">
      <utils-svg-cmp name="sketch/quote" class="socialFollowQuoteLeft" />
      <div class="socialFollowTitleText">Follow along</div>
      <utils-svg-cmp name="sketch/quote" class="socialFollowQuoteRight" />
    </div>
    <div class="socialFollowFight">
      We’re all users and in it together. No secrets. Real transparency. Follow
      us, tweet us, hit us up. Together we're a revolution.
    </div>
    <div class="socialFollowBtnGroup">
      <div class="socialFollowBtnRow1">
        <div
          @click="
            socialClick($event, 'https://twitter.com/my_tiki_', 'Twitter')
          "
        >
          <utils-svg-cmp
            name="button/twitter"
            class="socialFollowBtn socialFollowBtnTwt"
          />
        </div>
        <div
          @click="
            socialClick(
              $event,
              'https://www.instagram.com/my.tiki/',
              'Instagram'
            )
          "
        >
          <utils-svg-cmp
            name="button/instagram"
            class="socialFollowBtn socialFollowBtnIg"
          />
        </div>
      </div>
      <div
        @click="
          socialClick($event, 'https://www.facebook.com/mytikiapp', 'Facebook')
        "
      >
        <utils-svg-cmp
          name="button/facebook"
          class="socialFollowBtn socialFollowBtnFb"
        />
      </div>
      <div class="socialFollowBtnRow3">
        <div
          @click="
            socialClick($event, 'https://www.tiktok.com/@my.tiki', 'TikTok')
          "
        >
          <utils-svg-cmp
            name="button/tiktok"
            class="socialFollowBtn socialFollowBtnSh"
          />
          <utils-svg-cmp
            name="button/tiktok-lg"
            class="socialFollowBtn socialFollowBtnShLg"
          />
        </div>
        <div
          @click="
            socialClick(
              $event,
              'https://www.linkedin.com/company/mytiki',
              'LinkedIn'
            )
          "
        >
          <utils-svg-cmp
            name="button/linkedin"
            class="socialFollowBtn socialFollowBtnLi"
          />
          <utils-svg-cmp
            name="button/linkedin-lg"
            class="socialFollowBtn socialFollowBtnLiLg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'SocialFollowCmp',
  components: { UtilsSvgCmp },
  methods: {
    socialClick(clickEvent, href, platform) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Follow', {
        props: { location: 'Component', platform },
      })
      const win = window.open(href, '_blank')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.socialFollowCnt
  width: 100%
  background: rgba($yellow-light, 0.10)

.socialFollowTitleText
  font-family: $font-family-koara
  font-weight: bold
  color: $purple

.socialFollowQuoteLeft
  transform: rotate(23deg)

.socialFollowQuoteRight
  transform: rotate(130deg)

.socialFollowFight
  font-family: $font-family-montserrat
  color: $purple
  font-weight: 600
  text-align: center

.socialFollowBtnFb
  margin: 0 auto

::v-deep .socialFollowBtn.svg > .bkg
  fill: $blue-light

::v-deep .socialFollowBtn.svg > .ico
  fill: $blue-dark

.socialFollowBtn:hover
  animation: wiggle 0.75s infinite

::v-deep .socialFollowBtn:hover.svg > .bkg
  fill: $yellow-light

.socialFollowBtn
  cursor: pointer

@keyframes wiggle
  0%
    transform: rotate(0deg)
  80%
    transform: rotate(0deg)
  85%
    transform: rotate(10deg)
  95%
    transform: rotate(-10deg)
  100%
    transform: rotate(0deg)

.socialFollowBtnRow1
  display: flex
  align-items: center
  justify-content: space-between

.socialFollowBtnRow3
  display: flex
  align-items: center
  justify-content: space-between

@include for-phone
  .socialFollowCnt
    padding-top: 45vw
    padding-bottom: 10vw

  .socialFollowQuoteLeft, .socialFollowQuoteRight
    height: 14vw
    margin-top: -20vw

  .socialFollowTitleText
    font-size: 8vw
    width: 35vw
    text-align: center

  .socialFollowTitleCnt
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

  .socialFollowFight
    font-size: 5vw
    margin: 6vw auto 0 auto
    width: 80%

  ::v-deep .socialFollowBtnTwt.svg
    height: 30vw

  ::v-deep .socialFollowBtnIg.svg
    height: 30vw

  ::v-deep .socialFollowBtnFb.svg
    height: 30vw

  ::v-deep .socialFollowBtnSh.svg
    height: 30vw

  ::v-deep .socialFollowBtnShLg.svg
    display: none
    height: 0

  ::v-deep .socialFollowBtnLi.svg
    height: 35vw

  ::v-deep .socialFollowBtnLiLg.svg
    display: none
    height: 0

  .socialFollowBtnRow3
    margin-top: -10vw

  .socialFollowBtnGroup
    margin-top: 10vw
@include for-tablet
  .socialFollowCnt
    padding-top: 18vw

  .socialFollowQuoteLeft, .socialFollowQuoteRight
    height: 3.5vw
    margin-top: -3.5vw

  .socialFollowTitleText
    font-size: 2.25vw

  .socialFollowTitleCnt
    margin: 0 auto
    display: flex
    align-items: center
    width: fit-content

  .socialFollowFight
    font-size: 1.25vw
    margin: 2vw auto 4vw auto
    width: 50%

  ::v-deep .socialFollowBtnTwt.svg
    height: 6vw

  ::v-deep .socialFollowBtnIg.svg
    height: 6vw

  ::v-deep .socialFollowBtnFb.svg
    height: 6vw

  ::v-deep .socialFollowBtnSh.svg
    height: 0
    display: none

  ::v-deep .socialFollowBtnShLg.svg
    display: unset
    height: 6vw

  ::v-deep .socialFollowBtnLi.svg
    height: 0
    display: none

  ::v-deep .socialFollowBtnLiLg.svg
    display: unset
    height: 7vw

  .socialFollowBtnRow1, .socialFollowBtnRow2, .socialFollowBtnRow3
    width: 33%

  .socialFollowBtnGroup
    display: flex
    align-items: center
    justify-content: space-between
    width: 60%
    margin: 2vw auto 0 auto
    padding-bottom: 2vw
</style>
