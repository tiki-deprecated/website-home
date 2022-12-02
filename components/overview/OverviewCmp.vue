<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div class="ovrIcons">
      <overview-icon-cmp
        title="Propose"
        subtitle="Your voice, not a central authority, fuels the data marketplace. Propose changes and improvements."
        icon="icon-propose"
        class="ovrIcon"
      />
      <overview-icon-cmp
        title="Vote"
        subtitle="Popular proposals move onto community vote. Your choices set marketplace standards and guidelines."
        icon="icon-vote"
        class="ovrIcon"
      />
      <overview-icon-cmp
        title="Influence"
        subtitle="Participation matters. Propose, vote, share and more to earn influence. More influence, more power."
        icon="icon-influence"
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
