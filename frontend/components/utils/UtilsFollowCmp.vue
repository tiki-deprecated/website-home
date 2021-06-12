<template>
  <div class="followBtn">
    <div class="row1">
      <div
        @click="socialClick($event, 'https://twitter.com/my_tiki_', 'Twitter')"
      >
        <utils-svg-cmp name="home/follow/twitter" class="btn twt" />
      </div>
      <div
        @click="
          socialClick($event, 'https://www.instagram.com/my.tiki/', 'Instagram')
        "
      >
        <utils-svg-cmp name="home/follow/instagram" class="btn ig" />
      </div>
    </div>
    <div
      @click="
        socialClick($event, 'https://www.facebook.com/mytikiapp', 'Facebook')
      "
    >
      <utils-svg-cmp name="home/follow/facebook" class="btn fb" />
    </div>
    <div class="row3">
      <div
        @click="
          socialClick($event, 'https://www.tiktok.com/@my.tiki', 'TikTok')
        "
      >
        <utils-svg-cmp name="home/follow/tiktok" class="btn tiktok" />
        <utils-svg-cmp name="home/follow/tiktok-lg" class="btn tiktokLg" />
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
        <utils-svg-cmp name="home/follow/linkedin" class="btn li" />
        <utils-svg-cmp name="home/follow/linkedin-lg" class="btn liLg" />
      </div>
    </div>
    <div
      @click="socialClick($event, 'https://discord.gg/evjYQq48Be', 'Discord')"
    >
      <utils-svg-cmp name="home/follow/discord" class="btn discord" />
    </div>
    <div class="row5">
      <div @click="socialClick($event, 'https://t.me/mytikiapp', 'Telegram')">
        <utils-svg-cmp name="home/follow/telegram" class="btn telegram" />
      </div>
      <div
        @click="
          socialClick(
            $event,
            'https://signal.group/#CjQKIA66Eq2VHecpcCd-cu-dziozMRSH3EuQdcZJNyMOYNi5EhC0coWtjWzKQ1dDKEjMqhkP',
            'Signal'
          )
        "
      >
        <utils-svg-cmp name="home/follow/signal" class="btn signal" />
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from './UtilsSvgCmp'

export default {
  name: 'UtilsFollowCmp',
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
@import "assets/styles/mixins"

.fb, .discord
  margin: 0 auto

::v-deep .btn.svg > .bkg
  fill: $blue-light

::v-deep .btn.svg > .icoLock
  fill: $blue-dark

.btn:hover
  animation: wiggle 0.75s infinite

::v-deep .btn:hover.svg > .bkg
  fill: $yellow-light

.btn
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

.row1, .row3, .row5
  display: flex
  align-items: center
  justify-content: space-between

@include for-phone
  ::v-deep .twt.svg, ::v-deep .ig.svg, ::v-deep .fb.svg, ::v-deep .tiktok.svg, ::v-deep .signal.svg, ::v-deep .telegram.svg, ::v-deep .discord.svg
    height: 30vw

  ::v-deep .tiktokLg.svg
    display: none
    height: 0

  ::v-deep .li.svg
    height: 35vw

  ::v-deep .liLg.svg
    display: none
    height: 0

  .followBtn
    margin-top: 10vw

@include for-tablet
  ::v-deep .twt.svg, ::v-deep .ig.svg, ::v-deep .fb.svg, ::v-deep .signal.svg, ::v-deep .telegram.svg, ::v-deep .discord.svg
    height: 6vw

  ::v-deep .tiktok.svg
    height: 0
    display: none

  ::v-deep .tiktokLg.svg
    display: unset
    height: 6vw

  ::v-deep .li.svg
    height: 0
    display: none

  ::v-deep .liLg.svg
    display: unset
    height: 7vw

  .row1, .row3, .row5
    width: 22%

  .followBtn
    display: flex
    align-items: center
    justify-content: space-between
    width: 70%
    margin: 2vw auto 0 auto
    padding-bottom: 2vw
</style>
