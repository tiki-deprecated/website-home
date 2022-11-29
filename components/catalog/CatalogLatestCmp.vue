<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="latestTitle">Latest <strong class="hlt">content</strong></div>
    <div class="contents">
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
        href="https://blog.mytiki.com"
        class="content"
        :color="txtColor"
      />
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
        href="https://blog.mytiki.com"
        class="content"
        :color="txtColor"
      />
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
        href="https://blog.mytiki.com"
        class="content"
        :color="txtColor"
      />
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
        href="https://blog.mytiki.com"
        class="content"
        :color="txtColor"
      />
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
        href="https://blog.mytiki.com"
        class="content"
        :color="txtColor"
      />
      <catalog-wide-cmp
        :img-sizes="[417]"
        img-name="coming_soon"
        img-alt="Coming Soon"
        title="Increase user opt-in rates for data access."
        subtitle="Create data rewards and incentive programs contingent on data access."
        cta="How to add rewards for IDFA Permission →"
        href="https://blog.mytiki.com"
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
import CatalogWideCmp from '@/components/catalog/CatalogWideCmp'

export default {
  name: 'CatalogLatestCmp',
  components: { CatalogWideCmp, UtilsBtnCmp },
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
