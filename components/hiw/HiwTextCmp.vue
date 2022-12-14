<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="title">Less data = worse products & services</div>
    <div class="subtitle">Property rights for data.</div>
    <div class="body">
      TIKI is infrastructure to handle consumer data ownership, consent,
      licensing, and rewards. Build powerful features to use and monetize data
      legally and transparently —maximize opt-ins, minimize risk, deal users in.
      <br /><br /><b>Decentralized</b> —don't change your backend or pipelines;
      data stays in your system, where it belongs.
    </div>
    <utils-btn-cmp
      class="hiwBtn"
      :bkg-color="btnColor"
      :txt-color="txtColor"
      txt="See how it works"
      link="https://github.com/tiki"
    />
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import UtilsBtnCmp from '@/components/utils/UtilsBtnCmp'

export default {
  name: 'HiwTextCmp',
  components: { UtilsBtnCmp },
  data: function () {
    return {
      btnColor: theme.green,
      txtColor: theme.greenLight,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.title
  color: $green-dark
  font-weight: bold

.subtitle
  color: $green-dark
  font-size: .95em
  font-weight: bold

.body
  color: $green-dark
  font-size: .95em

@include for-phone
  .title
    font-size: 2em
    margin-bottom: 40px

  .subtitle
    margin-bottom: 15px

  .body
    margin-bottom: 70px

  .hiwBtn
    margin: 0 auto 50px auto
    display: block

@include for-tablet
  .title
    font-size: 2.25em
    margin-bottom: 40px

  .subtitle
    margin-bottom: 20px

  .body
    margin-bottom: 70px

  .hiwBtn
    margin-left: 0
</style>
