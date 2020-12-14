<template>
  <div class="socialShareCnt">
    <utils-svg-cmp name="money/sketch-share" class="socialShareSketchShare" />
    <div class="socialShareFight">
      Together we can fight back against creepy tech.
    </div>
    <div class="socialShareBtnGroup">
      <div class="socialShareBtnRow1">
        <share-network
          network="twitter"
          :url="twitter.url"
          :title="twitter.title"
          :description="twitter.description"
          :hashtags="twitter.hashtags"
        >
          <utils-svg-cmp
            name="money/btn-twt"
            class="socialShareBtn socialShareBtnTwt"
          />
        </share-network>
        <a class="socialShareBtnIgShare" @click="igShare">
          <utils-svg-cmp
            name="money/btn-ig"
            class="socialShareBtn socialShareBtnIg"
          />
        </a>
      </div>
      <share-network
        network="facebook"
        :url="facebook.url"
        :title="facebook.title"
        :description="facebook.description"
        :hashtags="facebook.hashtags"
        class="socialShareBtnRow2"
      >
        <utils-svg-cmp
          name="money/btn-fb"
          class="socialShareBtn socialShareBtnFb"
        />
      </share-network>
      <div class="socialShareBtnRow3">
        <a class="socialShareBtnIgShare" @click="webShare">
          <utils-svg-cmp
            name="money/btn-sh"
            class="socialShareBtn socialShareBtnSh"
          />
          <utils-svg-cmp
            name="money/btn-sh-lg"
            class="socialShareBtn socialShareBtnShLg"
          />
        </a>
        <share-network
          network="linkedin"
          :url="linkedin.url"
          :title="linkedin.title"
          :description="linkedin.description"
          :hashtags="linkedin.hashtags"
        >
          <utils-svg-cmp
            name="money/btn-li"
            class="socialShareBtn socialShareBtnLi"
          />
          <utils-svg-cmp
            name="money/btn-li-lg"
            class="socialShareBtn socialShareBtnLiLg"
          />
        </share-network>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

const URL = 'https://mytiki.com/money'
const TITLE = 'title goes here'
const DESCRIPTION = 'description goes here'
const HASHTAGS = 'hashtag1 hashtag2'

export default {
  name: 'SocialShareCmp',
  components: { UtilsSvgCmp },
  data() {
    return {
      facebook: {
        url: URL,
        title: TITLE,
        description: DESCRIPTION,
        hashtags: HASHTAGS,
      },
      instagram: {
        url: URL,
        title: TITLE,
        description: DESCRIPTION,
        hashtags: HASHTAGS,
        profile: 'https://instagram.com/my.tiki',
      },
      twitter: {
        url: URL,
        title: TITLE,
        description: DESCRIPTION,
        hashtags: HASHTAGS,
      },
      linkedin: {
        url: URL,
        title: TITLE,
        description: DESCRIPTION,
        hashtags: HASHTAGS,
      },
      web: {
        url: URL,
        title: TITLE,
        description: DESCRIPTION,
        hashtags: HASHTAGS,
      },
    }
  },
  methods: {
    copy(url) {
      this.$toast.clear()
      const input = document.createElement('textarea')
      input.innerHTML = url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      this.shownToast = this.$toast
        .show('Link copied, now share.', {
          position: 'bottom-right',
        })
        .goAway(5000)
    },
    share(title, url, description, hashtags) {
      let text = description
      if (hashtags) text = description + ' #' + hashtags.replace(' ', ' #')
      navigator.share({ title, url, text })
    },
    canShare() {
      return !!(process.client && navigator && navigator.share)
    },
    webShare(clickEvent) {
      clickEvent.preventDefault()
      if (process.client) {
        if (navigator && navigator.share)
          this.share(
            this.web.title,
            this.web.url,
            this.web.description,
            this.web.hashtags
          )
        else this.copy(this.web.url)
      }
    },
    igShare(clickEvent) {
      clickEvent.preventDefault()
      if (process.client) {
        if (navigator && navigator.share)
          this.share(
            this.instagram.title,
            this.instagram.url,
            this.instagram.description,
            this.instagram.hashtags
          )
        else window.location.href = this.instagram.profile
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.socialShareCnt
  width: 100%
  background: rgba($money-yellow-light, 0.10)

.socialShareSketchShare
  margin: 0 auto

.socialShareFight
  font-family: $font-family-koara
  color: $money-purple
  font-weight: bold
  text-align: center

.socialShareBtnFb
  margin: 0 auto

::v-deep .socialShareBtn.svg > .bkg
  fill: $money-blue-light

::v-deep .socialShareBtn.svg > .ico
  fill: $money-blue-dark

.socialShareBtn:hover
  animation: wiggle 0.75s infinite

::v-deep .socialShareBtn:hover.svg > .bkg
  fill: $money-yellow-light

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

.socialShareBtnRow1
  display: flex
  align-items: center
  justify-content: space-between

.socialShareBtnRow3
  display: flex
  align-items: center
  justify-content: space-between

@include for-phone
  .socialShareCnt
    padding-top: 23vw

  ::v-deep .socialShareSketchShare.svg
    height: 13vw

  .socialShareFight
    font-size: 5vw
    margin: 6vw auto 0 auto
    width: 80%

  ::v-deep .socialShareBtnTwt.svg
    height: 30vw

  ::v-deep .socialShareBtnIg.svg
    height: 30vw

  ::v-deep .socialShareBtnFb.svg
    height: 30vw

  ::v-deep .socialShareBtnSh.svg
    height: 50vw

  ::v-deep .socialShareBtnShLg.svg
    display: none
    height: 0

  ::v-deep .socialShareBtnLi.svg
    height: 35vw

  ::v-deep .socialShareBtnLiLg.svg
    display: none
    height: 0

  .socialShareBtnRow3
    margin-top: -10vw

  .socialShareBtnGroup
    margin-top: 10vw
@include for-tablet
  .socialShareCnt
    padding-top: 19vw

  ::v-deep .socialShareSketchShare.svg
    height: 4vw

  .socialShareFight
    font-size: 1.25vw
    margin: 2vw auto 0 auto
    width: 80%

  ::v-deep .socialShareBtnTwt.svg
    height: 6vw

  ::v-deep .socialShareBtnIg.svg
    height: 6vw

  ::v-deep .socialShareBtnFb.svg
    height: 6vw

  ::v-deep .socialShareBtnSh.svg
    height: 0
    display: none

  ::v-deep .socialShareBtnShLg.svg
    display: unset
    height: 10vw

  ::v-deep .socialShareBtnLi.svg
    height: 0
    display: none

  ::v-deep .socialShareBtnLiLg.svg
    display: unset
    height: 7vw

  .socialShareBtnRow1, .socialShareBtnRow2, .socialShareBtnRow3
    width: 33%

  .socialShareBtnGroup
    display: flex
    align-items: center
    justify-content: space-between
    width: 60%
    margin: 2vw auto 0 auto
    padding-bottom: 2vw
</style>
