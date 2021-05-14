<template>
  <div>
    <div class="section">Follow us</div>
    <div class="follow">
      <div
        @click="socialClick($event, 'https:twitter.com/my_tiki_', 'Twitter')"
      >
        <utils-svg-cmp name="utils/footer/twitter" class="followBtn" />
      </div>
      <div
        @click="socialClick($event, 'https:www.tiktok.com/@my.tiki', 'TikTok')"
      >
        <utils-svg-cmp name="utils/footer/tiktok" class="followBtn" />
      </div>
      <div
        @click="
          socialClick($event, 'https:www.facebook.com/mytikiapp', 'Facebook')
        "
      >
        <utils-svg-cmp name="utils/footer/facebook" class="followBtn" />
      </div>
      <div
        @click="
          socialClick($event, 'https:www.instagram.com/my.tiki/', 'Instagram')
        "
      >
        <utils-svg-cmp name="utils/footer/instagram" class="followBtn" />
      </div>
      <div
        @click="
          socialClick(
            $event,
            'https:www.linkedin.com/company/mytiki',
            'LinkedIn'
          )
        "
      >
        <utils-svg-cmp name="utils/footer/linkedin" class="followBtn" />
      </div>
      <div @click="socialClick($event, 'https:medium.com/mytiki', 'Medium')">
        <utils-svg-cmp name="utils/footer/medium" class="followBtn" />
      </div>
      <div
        @click="socialClick($event, 'https:discord.gg/evjYQq48Be', 'Discord')"
      >
        <utils-svg-cmp name="utils/footer/discord" class="followBtn" />
      </div>
      <div @click="socialClick($event, 'https:t.me/mytikiapp', 'Telegram')">
        <utils-svg-cmp name="utils/footer/telegram" class="followBtn" />
      </div>
      <div
        @click="
          socialClick(
            $event,
            'https:signal.group/#CjQKIA66Eq2VHecpcCd-cu-dziozMRSH3EuQdcZJNyMOYNi5EhC0coWtjWzKQ1dDKEjMqhkP',
            'Signal'
          )
        "
      >
        <utils-svg-cmp name="utils/footer/signal" class="followBtn" />
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '../UtilsSvgCmp'

export default {
  name: 'UtilsFooterFollowCmp',
  components: { UtilsSvgCmp },
  methods: {
    socialClick(clickEvent, href, platform) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Follow', {
        props: { location: 'Footer', platform },
      })
      const win = window.open(href, '_blank')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.section
  font-family: $font-family-montserrat
  color: $gray-xlight
  font-weight: 500

::v-deep .followBtn.svg
  fill: $yellow-light
  cursor: pointer

.follow
  display: flex
  align-items: center
  flex-wrap: wrap

@include for-phone
  .text, .link, .section
    font-size: 3vw

  .section
    margin-bottom: 0.25vw

  ::v-deep .followBtn.svg
    height: 4vw

  .followBtn
    margin: 2vw 2vw 0 2vw

  .follow
    justify-content: center

@include for-tablet
  .text, .link, .section
    font-size: 0.9vw

  .section
    margin-bottom: 0.25vw

  ::v-deep .followBtn.svg
    height: 1vw

  .followBtn
    margin-right: 1vw
    margin-top: 0.5vw
</style>
