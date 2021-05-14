<template>
  <div class="footer">
    <div class="col col1">
      <utils-footer-logo-cmp />
    </div>
    <div class="col col2">
      <utils-footer-info-cmp />
    </div>
    <div class="col col3">
      <utils-footer-contact-cmp />
    </div>
    <div class="col col4">
      <utils-footer-follow-cmp />
    </div>
  </div>
</template>

<script>
import UtilsFooterLogoCmp from './UtilsFooterLogoCmp'
import UtilsFooterInfoCmp from './UtilsFooterInfoCmp'
import UtilsFooterContactCmp from './UtilsFooterContactCmp'
import UtilsFooterFollowCmp from './UtilsFooterFollowCmp'

export default {
  name: 'UtilsFooterCmp',
  components: {
    UtilsFooterFollowCmp,
    UtilsFooterContactCmp,
    UtilsFooterLogoCmp,
    UtilsFooterInfoCmp,
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.footer
  background: $blue-dark
  display: flex
  align-items: flex-start
  justify-content: center
  flex-wrap: wrap

@include for-phone
  .footer
    height: 57vw

  .col
    margin-top: 5vw
    text-align: center

  .col1, .col4
    width: 100%
    justify-content: space-between

  .col2, .col3
    width: 50%

  .col4
    margin-bottom: 5vw

@include for-tablet
  .footer
    height: 7vw

  .col
    margin-top: 1.5vw

  .col1
    width: 35%

  .col2, .col3, .col4
    width: 15%
</style>
