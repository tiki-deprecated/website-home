<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="startTitle">Get Started</div>
    <div class="guides">
      <catalog-sq-cmp
        :img-sizes="[200, 600]"
        img-name="apple"
        img-alt="iOS Icon"
        title="iOS"
        class="guide"
        href="https://docs.mytiki.com/docs/tiki-sdk-ios-getting-started"
      />
      <catalog-sq-cmp
        :img-sizes="[200, 600]"
        img-name="android"
        img-alt="Android Icon"
        title="Android"
        class="guide"
        href="https://docs.mytiki.com/docs/tiki-sdk-android-getting-started"
      />
      <catalog-sq-cmp
        :img-sizes="[200, 600]"
        img-name="flutter"
        img-alt="Flutter Icon"
        title="Flutter"
        class="guide"
        href="https://docs.mytiki.com/docs/tiki-sdk-flutter-getting-started"
      />
      <catalog-sq-cmp
        :img-sizes="[200, 511, 601]"
        img-name="dart"
        img-alt="Dart Icon"
        title="Dart"
        class="guide"
        href="https://docs.mytiki.com/docs/tiki-sdk-dart-getting-started"
      />
    </div>
    <div class="more">
      <div class="moreText">
        Check out our tutorials, product features, platform specific
        implementations, recipes, API docs.
      </div>
      <utils-btn-cmp
        :bkg-color="btnBgColor"
        :txt-color="btnTxtColor"
        txt="Docs"
        link="https://docs.mytiki.com"
        class="moreBtn"
      />
      <utils-btn-cmp
        :bkg-color="btnBgColor"
        :txt-color="btnTxtColor"
        txt="Github"
        link="https://github.com/tiki"
        class="moreBtn"
      />
    </div>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import CatalogSqCmp from '@/components/catalog/CatalogSqCmp'
import UtilsBtnCmp from '@/components/utils/UtilsBtnCmp'

export default {
  name: 'CatalogStartCmp',
  components: { CatalogSqCmp, UtilsBtnCmp },
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

.startTitle
  font-weight: bold
  color: $green-dark

.more
  width: fit-content
  margin: 50px auto 100px auto

.moreText
  color: $green-dark
  font-size: .95em
  text-align: center
  margin-bottom: 40px

.moreBtn
  display: block
  margin: 20px auto

@include for-phone
@include for-tablet
  .startTitle
    font-size: 2.25em
    margin: 0 0 40px 5%

  .guides
    display: flex
    align-items: flex-start
    justify-content: space-evenly
    flex-wrap: wrap

  .guide
    margin: 10px 10px

  .more
    width: 50%
</style>
