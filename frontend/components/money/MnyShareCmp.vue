<template>
  <div class="mnyShareCnt">
    <utils-svg-cmp name="money/sketch-share" class="mnyShareSketchShare" />
    <div class="mnyShareFight">
      Together we can fight back against creepy tech.
    </div>
    <div class="mnyShareBtnGroup">
      <div class="mnyShareBtnRow1">
        <share-network
          network="twitter"
          :url="twitter.url"
          :title="twitter.title"
          :description="twitter.description"
          :hashtags="twitter.hashtags"
        >
          <utils-svg-cmp
            name="money/btn-twt"
            class="mnyShareBtn mnyShareBtnTwt"
          />
        </share-network>
        <a class="mnyShareBtnIgShare" @click="igShare">
          <utils-svg-cmp
            name="money/btn-ig"
            class="mnyShareBtn mnyShareBtnIg"
          />
        </a>
      </div>
      <share-network
        network="facebook"
        :url="facebook.url"
        :title="facebook.title"
        :description="facebook.description"
        :hashtags="facebook.hashtags"
        class="mnyShareBtnRow2"
      >
        <utils-svg-cmp name="money/btn-fb" class="mnyShareBtn mnyShareBtnFb" />
      </share-network>
      <div class="mnyShareBtnRow3">
        <a class="mnyShareBtnIgShare" @click="webShare">
          <utils-svg-cmp
            name="money/btn-sh"
            class="mnyShareBtn mnyShareBtnSh"
          />
          <utils-svg-cmp
            name="money/btn-sh-lg"
            class="mnyShareBtn mnyShareBtnShLg"
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
            class="mnyShareBtn mnyShareBtnLi"
          />
          <utils-svg-cmp
            name="money/btn-li-lg"
            class="mnyShareBtn mnyShareBtnLiLg"
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
  name: 'MnyShareCmp',
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
@import "assets/styles/mixins"

.mnyShareCnt
  width: 100%
  background: rgba($money-yellow-light, 0.10)

.mnyShareSketchShare
  margin: 0 auto

.mnyShareFight
  font-family: $font-family-koara
  color: $money-purple
  font-weight: bold
  text-align: center

.mnyShareBtnFb
  margin: 0 auto

::v-deep .mnyShareBtn.svg > .bkg
  fill: $money-blue-light

::v-deep .mnyShareBtn.svg > .ico
  fill: $money-blue-dark

.mnyShareBtn:hover
  animation: wiggle 0.75s infinite

::v-deep .mnyShareBtn:hover.svg > .bkg
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

.mnyShareBtnRow1
  display: flex
  align-items: center
  justify-content: space-between

.mnyShareBtnRow3
  display: flex
  align-items: center
  justify-content: space-between

@include for-phone
  .mnyShareCnt
    padding-top: 23vw

  ::v-deep .mnyShareSketchShare.svg
    height: 13vw

  .mnyShareFight
    font-size: 5vw
    margin: 6vw auto 0 auto
    width: 80%

  ::v-deep .mnyShareBtnTwt.svg
    height: 30vw

  ::v-deep .mnyShareBtnIg.svg
    height: 30vw

  ::v-deep .mnyShareBtnFb.svg
    height: 30vw

  ::v-deep .mnyShareBtnSh.svg
    height: 50vw

  ::v-deep .mnyShareBtnShLg.svg
    display: none
    height: 0

  ::v-deep .mnyShareBtnLi.svg
    height: 35vw

  ::v-deep .mnyShareBtnLiLg.svg
    display: none
    height: 0

  .mnyShareBtnRow3
    margin-top: -10vw

  .mnyShareBtnGroup
    margin-top: 10vw
@include for-tablet
  .mnyShareCnt
    padding-top: 19vw

  ::v-deep .mnyShareSketchShare.svg
    height: 4vw

  .mnyShareFight
    font-size: 1.25vw
    margin: 2vw auto 0 auto
    width: 80%

  ::v-deep .mnyShareBtnTwt.svg
    height: 6vw

  ::v-deep .mnyShareBtnIg.svg
    height: 6vw

  ::v-deep .mnyShareBtnFb.svg
    height: 6vw

  ::v-deep .mnyShareBtnSh.svg
    height: 0
    display: none

  ::v-deep .mnyShareBtnShLg.svg
    display: unset
    height: 10vw

  ::v-deep .mnyShareBtnLi.svg
    height: 0
    display: none

  ::v-deep .mnyShareBtnLiLg.svg
    display: unset
    height: 7vw

  .mnyShareBtnRow1, .mnyShareBtnRow2, .mnyShareBtnRow3
    width: 33%

  .mnyShareBtnGroup
    display: flex
    align-items: center
    justify-content: space-between
    width: 60%
    margin: 2vw auto 0 auto
    padding-bottom: 2vw
</style>
