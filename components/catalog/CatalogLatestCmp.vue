<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="latestTitle">Latest <strong class="hlt">content</strong></div>
    <div class="contents">
      <catalog-wide-cmp
        :img-sizes="[200, 573, 828, 1033, 1249, 1373, 1400]"
        img-type="jpg"
        img-name="influence"
        img-alt="influence"
        title="Decentralizing Marketplace Governance"
        subtitle="Decentralized marketplaces demand decentralized governance. The TIKI DAO is a governance model of influence relative to market impact, measured by participation."
        extra="Dec 9"
        href="https://blog.mytiki.com/p/decentralizing-marketplace-governance"
        :color="txtColor"
        class="content"
      />
      <catalog-wide-cmp
        :img-sizes="[200, 499, 714, 888, 1037, 1180, 1400]"
        img-name="choose_better_data"
        img-alt="Choose better data"
        title="The Current State of Your Data, and TIKI’s Hopeful Future"
        subtitle="The time for action is now."
        extra="Nov 27"
        href="https://blog.mytiki.com/p/the-current-state-of-your-data-and"
        :color="txtColor"
        class="content"
      />
      <catalog-wide-cmp
        :img-sizes="[
          200, 349, 450, 541, 597, 661, 735, 780, 825, 882, 930, 960, 979, 1066,
          1107, 1150, 1152, 1282, 1400,
        ]"
        img-name="data_voyage"
        img-alt="Your data's voyage"
        title="Your Data's Voyage"
        subtitle="Your data is everywhere. Time to take control."
        extra="Nov 27"
        href="https://blog.mytiki.com/p/your-datas-voyage"
        :color="txtColor"
        class="content"
      />
      <catalog-wide-cmp
        :img-sizes="[200, 511, 728, 914, 1065, 1247, 1400]"
        img-name="sdk_for_users"
        img-alt="TIKI SDK for users"
        title="How the TIKI SDK Works for Users"
        subtitle="Coming soon to applications near you!"
        extra="Nov 27"
        href="https://blog.mytiki.com/p/how-the-tiki-sdk-works-for-users"
        :color="txtColor"
        class="content"
      />
      <catalog-wide-cmp
        :img-sizes="[200, 474, 681, 883, 1086, 1276, 1400]"
        img-type="jpg"
        img-name="data_pooling"
        img-alt="sun tanning pineapple"
        title="DataDAOs and Data Pooling"
        subtitle="Getting the most out of the TIKI user experience"
        extra="Nov 21"
        href="https://blog.mytiki.com/p/datadaos-and-data-pooling"
        :color="txtColor"
        class="content"
      />
      <catalog-wide-cmp
        :img-sizes="[200, 458, 706, 864, 1048, 1151, 1287, 1400]"
        img-type="jpg"
        img-name="lady_liberty"
        img-alt="lady liberty"
        title="Governance and Non-Intervention in Decentralized Data Exchange with TIKI DAO"
        subtitle="An initial breakdown of the proposed TIKI DAO"
        extra="Nov 8"
        href="https://blog.mytiki.com/p/governance-and-non-intervention-in"
        :color="txtColor"
        class="content"
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
import CatalogWideCmp from '@/components/catalog/CatalogWideCmp'

export default {
  name: 'CatalogLatestCmp',
  components: { UtilsBtnCmp, CatalogWideCmp },
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
