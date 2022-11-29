<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="latestTitle">Latest <strong class="hlt">content</strong></div>
    <div class="contents">
      <catalog-substack-cmp
        href="https://blog.mytiki.com/p/the-current-state-of-your-data-and"
        class="content"
        :color="txtColor"
      />
      <catalog-substack-cmp
        href="https://blog.mytiki.com/p/your-datas-voyage"
        class="content"
        :color="txtColor"
      />
      <catalog-substack-cmp
        href="https://blog.mytiki.com/p/how-the-tiki-sdk-works-for-users"
        class="content"
        :color="txtColor"
      />
      <catalog-substack-cmp
        href="https://blog.mytiki.com/p/datadaos-and-data-pooling"
        class="content"
        :color="txtColor"
      />
      <catalog-substack-cmp
        href="https://blog.mytiki.com/p/governance-and-non-intervention-in"
        class="content"
        :color="txtColor"
      />
      <catalog-substack-cmp
        href="https://blog.mytiki.com/p/apple-shook-up-the-mobile-ad-market"
        class="content"
        :color="txtColor"
      />
    </div>
    <utils-btn-cmp
      txt="See more"
      :txt-color="btnTxtColor"
      :bkg-color="btnBkgColor"
      link="https://blog.mytiki.com"
      class="moreBtn"
    />
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'
import UtilsBtnCmp from '@/components/utils/UtilsBtnCmp'
import CatalogSubstackCmp from '@/components/catalog/CatalogSubstackCmp'

export default {
  name: 'CatalogLatestCmp',
  components: { UtilsBtnCmp, CatalogSubstackCmp },
  data: function () {
    return {
      btnTxtColor: theme.white,
      btnBkgColor: theme.purple,
      txtColor: theme.blue,
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.latestTitle
  font-weight: bold
  color: $purple

@include for-phone
  .latestTitle
    font-size: 2.25em
    margin: 0 auto 40px auto
    text-align: center

  .contents
    display: flex
    align-items: flex-start
    justify-content: space-evenly
    flex-wrap: wrap

  .content
    margin: 20px 10px

  .moreBtn
    margin: 20px auto
    display: block

@include for-tablet
  .latestTitle
    font-size: 2.25em
    margin: 0 0 40px 5%

  .contents
    display: flex
    align-items: flex-start
    justify-content: space-evenly
    flex-wrap: wrap

  .content
    margin: 10px 10px

  .moreBtn
    margin: 20px auto
    display: block
</style>
