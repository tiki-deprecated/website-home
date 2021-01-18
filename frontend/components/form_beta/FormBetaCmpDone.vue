<template>
  <div class="formBetaCmpDoneCnt">
    <div class="formBetaCmpDoneTitle">Done!</div>
    <div class="formBetaCmpDoneText">
      <div class="formBetaCmpDoneTextLine">Thank you for signing up.</div>
      <div
        class="formBetaCmpDoneTextLine"
        :class="{ formBetaCmpDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches in January and we may get in
        touch beforehand for feedback.
      </div>
      <div
        class="formBetaCmpDoneTextLine"
        :class="{ formBetaCmpDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches in January.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormBetaCmpDone',
  computed: {
    opt() {
      return this.$store.state.form_signup.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formBetaCmpDoneTextLineHide
  display: none

.formBetaCmpDoneTitle
  color: $green
  font-family: $font-family-montserrat

.formBetaCmpDoneText
  color: $blue-dark
  font-family: $font-family-montserrat

@include for-phone
  .formBetaCmpDoneCnt
    width: 90%
    margin: 0 auto

  .formBetaCmpDoneTitle
    font-size: 8vw

  .formBetaCmpDoneText
    font-size: 5vw
    margin-top: 3vw

  .formBetaCmpDoneTextLine
    padding: 2vw 0

@include for-tablet
  .formBetaCmpDoneTitle
    font-size: 1.5vw
    text-align: center

  .formBetaCmpDoneText
    font-size: 1vw
    text-align: center
    margin-top: 1vw

  .formBetaCmpDoneTextLine
    padding: 0.5vw 0
</style>
