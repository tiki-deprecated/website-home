<template>
  <div class="formAffiliateCmpDoneCnt">
    <div class="formAffiliateCmpDoneTitle">Done!</div>
    <div class="formAffiliateCmpDoneText">
      <div class="formAffiliateCmpDoneTextLine">Thank you for signing up.</div>
      <div
        class="formAffiliateCmpDoneTextLine"
        :class="{ formAffiliateCmpDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches in January and we may get in
        touch beforehand for feedback.
      </div>
      <div
        class="formAffiliateCmpDoneTextLine"
        :class="{ formAffiliateCmpDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches in January.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAffiliateCmpDone',
  computed: {
    opt() {
      return this.$store.state.form_affiliate.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formAffiliateCmpDoneTextLineHide
  display: none

.formAffiliateCmpDoneTitle
  color: $money-green
  font-family: $font-family-montserrat
  font-weight: 600

.formAffiliateCmpDoneText
  color: $money-blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .formAffiliateCmpDoneTitle
    font-size: 8vw

  .formAffiliateCmpDoneText
    font-size: 4vw
    margin-top: 3vw

  .formAffiliateCmpDoneTextLine
    padding: 2vw 0
@include for-tablet
  .formAffiliateCmpDoneTitle
    font-size: 2.5vw
    text-align: center

  .formAffiliateCmpDoneText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw

  .formAffiliateCmpDoneTextLine
    padding: 0.5vw 0
</style>
