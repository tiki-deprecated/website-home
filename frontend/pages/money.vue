<template>
  <div class="mnyPageCnt">
    <div class="mnyPageStack">
      <header-money-cmp class="mnyHeaderCmp" />
      <how-beta-cmp class="mnyWorkCmp" />
      <social-share-cmp class="mnyShareCmp" />
      <footer-cmp class="mnyFooterCmp" />
    </div>
    <form-affiliate-cmp class="mnySignupCmp" />
    <popup-privacy-cmp class="mnyPopupDataCmp" />
  </div>
</template>

<script>
import HeaderMoneyCmp from '@/components/header_money/HeaderMoneyCmp'
import HowBetaCmp from '@/components/how_beta/HowBetaCmp'
import SocialShareCmp from '@/components/social/SocialShareCmp'
import FormAffiliateCmp from '@/components/form_affiliate/FormAffiliateCmp'
import FooterCmp from '@/components/footer/FooterCmp'
import PopupPrivacyCmp from '@/components/popup/PopupPrivacyCmp'

export default {
  name: 'Money',
  layout: 'tiki',
  components: {
    FooterCmp,
    FormAffiliateCmp,
    SocialShareCmp,
    HowBetaCmp,
    HeaderMoneyCmp,
    PopupPrivacyCmp,
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnyPageCnt
  position: relative

.mnyPageStack
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%

.mnySignupCmp
  position: absolute
  z-index: 2

.mnyPopupDataCmp
  position: fixed
  z-index: 9

@include for-phone
  .mnySignupCmp
    width: 70%
    top: 140%
    left: 50%
    transform: translate(-50%, 140%)
    height: 65vw

@include for-tablet
  .mnySignupCmp
    width: 50%
    top: 155%
    left: 50%
    transform: translate(-50%, 155%)
    height: 14.7vw
</style>
