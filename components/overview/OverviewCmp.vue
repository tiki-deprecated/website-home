<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="ovrIcons">
      <overview-icon-cmp
        t1="Earn a"
        t2="real say"
        subtitle="Every user is a number of the TIKI DAO, where you decide the actual..."
        icon="icon-code"
        class="ovrIcon"
      />
      <overview-icon-cmp
        t1="1 place to manage"
        t2="your data"
        subtitle="Connect your various TIKI- supported... Connect your various TIKI- supported..."
        icon="icon-lock"
        class="ovrIcon"
      />
      <overview-icon-cmp
        t1="Pool for data to"
        t2="earn money"
        subtitle="Pool your data with other TIKI users and create new valuable..."
        icon="icon-heart"
        class="ovrIcon"
      />
    </div>
    <div class="ovrBanner">
      <overview-bkg-cmp />
      <overview-banner-cmp class="ovrBannerContent" />
    </div>
  </div>
</template>

<script>
import OverviewIconCmp from '@/components/overview/OverviewIconCmp'
import OverviewBkgCmp from '@/components/overview/OverviewBkgCmp'
import OverviewBannerCmp from '@/components/overview/OverviewBannerCmp'

export default {
  name: 'OverviewCmp',
  components: { OverviewIconCmp, OverviewBkgCmp, OverviewBannerCmp },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.ovrBanner
  position: relative

.ovrBannerContent
  position: absolute
  top: 55%
  left: 50%
  transform: translate(-50%, -50%)

@include for-phone
  .ovrIcons
    margin: auto
    display: block

  .ovrIcon
    margin: 50px auto
    width: 90%

  .ovrBanner
    margin-top: 50px

  .ovrBannerContent
    width: 90%

@include for-tablet
  .ovrIcons
    margin: auto
    display: flex
    align-items: flex-start
    justify-content: center

  .ovrIcon
    margin: 0 20px

  .ovrBanner
    margin-top: 50px

  .ovrBannerContent
    width: 80%
</style>
