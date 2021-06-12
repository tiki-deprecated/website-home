<template>
  <div class="page">
    <div class="bkg">
      <confirmed-confetti-cmp class="confetti" />
    </div>
    <div class="fgd">
      <div class="fdgWrapper">
        <confirmed-header-cmp class="header" />
        <confirmed-pineapple-cmp class="pineapple" />
        <confirmed-title-cmp class="title" />
        <confirmed-body-cmp class="body" />
        <confirmed-follow-cmp class="follow" />
        <utils-footer-cmp class="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmedConfettiCmp from '../components/confirmed/ConfirmedConfettiCmp'
import ConfirmedTitleCmp from '../components/confirmed/ConfirmedTitleCmp'
import ConfirmedPineappleCmp from '../components/confirmed/ConfirmedPineappleCmp'
import ConfirmedBodyCmp from '../components/confirmed/ConfirmedBodyCmp'
import ConfirmedFollowCmp from '../components/confirmed/ConfirmedFollowCmp'
import UtilsFooterCmp from '../components/utils/footer/UtilsFooterCmp'
import ConfirmedHeaderCmp from '../components/confirmed/ConfirmedHeaderCmp'
import { post } from '~/libs/api'

export default {
  name: 'Confirmed',
  components: {
    ConfirmedHeaderCmp,
    UtilsFooterCmp,
    ConfirmedFollowCmp,
    ConfirmedBodyCmp,
    ConfirmedPineappleCmp,
    ConfirmedTitleCmp,
    ConfirmedConfettiCmp,
  },
  async mounted() {
    this.$plausible.trackPageview()
    const email = this.$nuxt.$route.query.email
    const success = await post(this.$axios, email, null, null, true).then(
      function (data) {
        return data.success
      }
    )
    if (success) {
      this.$plausible.trackEvent('Confirmed', {})
    }
  },
}
</script>

<style lang="sass">
body
  background-color: $tan-light
</style>

<style scoped lang="sass">
@import "assets/styles/mixins"

.bkg
  position: absolute
  z-index: 1
  left: 50%
  top: 0
  transform: translate(-50%, 0)

.fgd
  width: 100%
  position: absolute
  z-index: 2
  left: 0
  top: 0

.fdgWrapper
  width: 100%
  position: relative

.pineapple
  width: fit-content
  margin-left: auto
  margin-right: auto

.title
  margin-right: auto
  margin-left: auto

@include for-phone
  .pineapple
    margin-top: 0

  .title
    margin-top: 10vw

  .body
    margin-top: 1.5vw

  .follow
    margin-top: 20vw

  .footer
    margin-top: 15vw

@include for-tablet
  .pineapple
    margin-top: 10vw

  .title
    margin-top: 1.5vw

  .body
    margin-top: 1.5vw

  .follow
    margin-top: 5vw
</style>
