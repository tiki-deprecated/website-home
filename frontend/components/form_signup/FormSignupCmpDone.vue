<template>
  <div class="formSignupCmpDoneCnt">
    <div class="formSignupCmpDoneTitle">Done!</div>
    <div class="formSignupCmpDoneText">
      <div class="formSignupCmpDoneTextLine">Thank you for signing up.</div>
      <div
        class="formSignupCmpDoneTextLine"
        :class="{ formSignupCmpDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches in January and we may get in
        touch beforehand for feedback.
      </div>
      <div
        class="formSignupCmpDoneTextLine"
        :class="{ formSignupCmpDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches in January.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSignupCmpDone',
  computed: {
    opt() {
      return this.$store.state.form_signup.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formSignupCmpDoneTextLineHide
  display: none

.formSignupCmpDoneTitle
  color: $money-green
  font-family: $font-family-montserrat
  font-weight: 600

.formSignupCmpDoneText
  color: $money-blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .formSignupCmpDoneTitle
    font-size: 8vw

  .formSignupCmpDoneText
    font-size: 4vw
    margin-top: 3vw

  .formSignupCmpDoneTextLine
    padding: 2vw 0
@include for-tablet
  .formSignupCmpDoneTitle
    font-size: 2.5vw
    text-align: center

  .formSignupCmpDoneText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw

  .formSignupCmpDoneTextLine
    padding: 0.5vw 0
</style>
