<template>
  <div class="utilsShareCmpCnt">
    <share-network
      network="twitter"
      class="shareNetwork shareNetworkTwitter"
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :hashtags="sharing.hashtags"
    >
      <div class="shareNetworkIcon">
        <utils-svg-cmp name="twitter-nostyle" class="utilsSvgCmp" />
      </div>
      <span class="shareNetworkText">Tweet</span>
    </share-network>
    <share-network
      network="facebook"
      class="shareNetwork shareNetworkFacebook"
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :hashtags="sharing.hashtags"
    >
      <div class="shareNetworkIcon">
        <utils-svg-cmp name="facebook-nostyle" class="utilsSvgCmp" />
      </div>
      <span class="shareNetworkText">Share</span>
    </share-network>
    <div
      v-if="showOther === true"
      class="shareNetwork shareNetworkMore"
      @click="shareNetworkLinkWebShare"
    >
      <div class="shareNetworkIcon">
        <utils-svg-cmp name="share" class="utilsSvgCmp" />
      </div>
      <span class="shareNetworkText">Other</span>
    </div>
    <div
      v-if="showOther === false"
      class="shareNetwork shareNetworkLink"
      @click="shareNetworkLinkClick"
    >
      <div class="shareNetworkIcon">
        <utils-svg-cmp name="link" class="utilsSvgCmp" />
      </div>
      <span class="shareNetworkText">Link</span>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'

export default {
  name: 'UtilsSignupCmp',
  components: { UtilsSvgCmp },
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sharing: {
        url: 'https://mytiki.com/join',
        title: "Tiki. It's Your Data",
        description:
          'Your data is worth thousands a year. Why aren’t you getting your fair share? Take back control. ' +
          'Get paid. Tiki’s got your back.',
        hashtags: 'mytiki,mydata',
      },
      showOther: false,
    }
  },
  mounted() {
    this.showOther = !!navigator.share
  },
  methods: {
    shareNetworkLinkClick(clickEvent) {
      this.$toast.clear()
      clickEvent.preventDefault()
      const input = document.createElement('textarea')
      input.innerHTML = this.sharing.url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      this.shownToast = this.$toast
        .show('Link copied to clipboard', {
          position: 'bottom-right',
        })
        .goAway(5000)
    },
    shareNetworkLinkWebShare(clickEvent) {
      console.log('clicked more')
      if (process.client) {
        navigator.share({
          title: this.sharing.title,
          url: this.sharing.url,
          text: this.sharing.description,
        })
      } else this.shareNetworkLinkClick(clickEvent)
    },
  },
}
</script>

<style scoped lang="sass">
.utilsShareCmpCnt
  display: flex
  align-items: center
  justify-content: flex-end
  flex-wrap: wrap

.shareNetworkText
  color: $white
  font-size: x-small
  word-break: break-word
  overflow: hidden
  font-weight: normal
  letter-spacing: 0.2ch
  width: 3.3em
  padding: 0 0.7em 0.1em 0

.shareNetworkIcon
  padding: 0.35em 0.5em

.shareNetwork
  color: $white
  display: flex
  align-items: center
  border-radius: 0.25em
  margin: 0 0 0 0.5em
  cursor: pointer

.shareNetworkFacebook
  background-color: #1877f2

.shareNetworkTwitter
  background-color: #1da1f2

.shareNetworkMore
  background-color: $green-dark

.shareNetworkLink
  background-color: $green-dark

::v-deep .utilsSvgCmp.svg
  fill: $white
  height: 0.7em
</style>
