<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div class="startWrapper">
    <div class="startText">
      <div class="title">
        <strong class="hlt">Get started</strong> with a free account
      </div>
      <div class="subtitle">
        Your first 100k users are on us. Upgrade to unlimited users at $100 per
        month.
      </div>
      <utils-btn-cmp
        :bkg-color="btnTxtColor"
        :txt-color="btnBgColor"
        txt="Sign up"
        link="https://console.mytiki.com"
        class="startBtn"
      />
      <div class="expert">Or chat with an expert</div>
      <utils-btn-cmp
        :bkg-color="btnBgColor"
        :txt-color="btnTxtColor"
        txt="Book Meeting"
        link="https://meet.mytiki.com"
        class="startBtn"
      />
      <utils-btn-cmp
        :bkg-color="btnBgColor"
        :txt-color="btnTxtColor"
        txt="Discord"
        link="https://discord.gg/tiki"
        class="startBtn"
      />
    </div>
    <start-img-cmp class="startImg" />
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import StartImgCmp from '@/components/start/StartImgCmp'
import UtilsBtnCmp from '@/components/utils/UtilsBtnCmp'

export default {
  name: 'StartCmp',
  components: { StartImgCmp, UtilsBtnCmp },
  data: function () {
    return {
      btnTxtColor: theme.green,
      btnBgColor: theme.greenLight,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.title
  font-weight: bold
  color: $green-dark

.hlt
  font-weight: bold
  color: $green

.subtitle
  color: $green-dark
  font-size: .95em

.expert
  font-weight: bold
  color: $green-dark
  font-size: .95em

@include for-tablet
  .title
    font-size: 2.25em
    text-align: left

  .subtitle
    margin: 10px auto 40px auto

  .startText
    width: 50%
    max-width: 400px
    margin: 0 20px

  .expert
    margin: 20px auto
    text-align: center

  .startBtn
    display: block
    margin: 10px auto

  .startWrapper
    display: flex
    align-items: flex-end
    justify-content: center

  .startImg
    width: 50%
    max-width: 400px
    margin: 0 20px

@include for-phone
  .title
    font-size: 2.25em
    text-align: center

  .subtitle
    margin: 10px auto 40px auto
    text-align: center

  .startBtn
    display: block
    margin: 10px auto

  .expert
    margin: 20px auto
    text-align: center

  .startWrapper
    display: flex
    flex-wrap: wrap-reverse

  .startImg
    width: 75%
    margin: 0 auto 75px auto
</style>
