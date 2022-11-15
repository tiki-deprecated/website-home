<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="footerContainer">
    <utils-svg-cmp
      name="footer-bkg-desktop"
      class="footerBkg desktop"
      :style="'fill: ' + bkgColor"
    />
    <utils-svg-cmp
      name="footer-bkg-mobile"
      class="footerBkg mobile"
      :style="'fill: ' + bkgColor"
    />
    <div class="content">
      <div class="col colfwm">
        <div class="section">Always Open Source</div>
        <a class="link" href="https://github.com/tiki">Github</a>
      </div>
      <div class="col">
        <div class="section">Get Involved</div>
        <a class="link" href="https://discord.gg/tiki">Discord</a>
        <a class="link" href="https://angel.co/company/mytiki/jobs">Careers</a>
      </div>
      <div class="col">
        <div class="section">Blog</div>
        <a class="link" href="https://blog.mytiki.com">Substack</a>
      </div>
      <div class="col">
        <div class="section">Podcast</div>
        <a
          class="link"
          href="https://open.spotify.com/show/3Nv7VXe7VzmnpSh1cVjY7S"
          >Spotify</a
        >
        <a
          class="link"
          href="https://podcasts.apple.com/us/podcast/tiki-talk/id1603707793"
          >Apple</a
        >
        <a class="link" href="https://www.youtube.com/@TIKI-data">YouTube</a>
      </div>
      <div class="col">
        <div class="section">Social</div>
        <a class="link" href="https://twitter.com/my_tiki_">Twitter</a>
      </div>
    </div>
  </div>
</template>

<script>
import theme from '../../assets/styles/_export.scss'
import UtilsSvgCmp from './UtilsSvgCmp'

export default {
  name: 'UtilsFooterCmp',
  components: { UtilsSvgCmp },
  props: {
    bkgColor: {
      type: String,
      default: theme.yellowLight,
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"
@import "assets/styles/theme"

.footerContainer
  position: relative
  display: block

.footerBkg
  width: 100vw
  display: block
  height: auto
  margin-top: -1px

.content
  position: absolute
  top: 0
  left: 0
  right: 0
  z-index: 1
  font-size: .95em

.section
  font-weight: bold
  margin-bottom: 10px

.link
  text-decoration: none
  color: $blue
  display: block

@include for-phone
  .col
    margin: 20px 0
    width: 40%

  .content
    width: fit-content
    margin: 40% auto
    display: flex
    align-items: flex-start
    justify-content: flex-end
    flex-wrap: wrap

  .colfwm
    width: 80%

  .desktop
    display: none

@include for-tablet
  .col
    margin: 15% 20px 20px 20px

  .content
    display: flex
    width: 85%
    margin: auto
    justify-content: space-between
    align-items: flex-start

  .mobile
    display: none
</style>
