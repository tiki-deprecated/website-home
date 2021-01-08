<template>
  <div class="formSimpleCmpDoneCnt">
    <div class="formSimpleCmpDoneTitle">Done!</div>
    <div class="formSimpleCmpDoneText">
      <div class="formSimpleCmpDoneTextLine">Thank you for signing up.</div>
      <div
        class="formSimpleCmpDoneTextLine"
        :class="{ formSimpleCmpDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches in January and we may get in
        touch beforehand for feedback.
      </div>
      <div
        class="formSimpleCmpDoneTextLine"
        :class="{ formSimpleCmpDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches in January.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormSimpleCmpDone',
  computed: {
    opt() {
      return this.$store.state.form_signup.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formSimpleCmpDoneTextLineHide
  display: none

.formSimpleCmpDoneTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.formSimpleCmpDoneText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .formSimpleCmpDoneCnt
    width: 90%
    margin: 0 auto

  .formSimpleCmpDoneTitle
    font-size: 8vw

  .formSimpleCmpDoneText
    font-size: 5vw
    margin-top: 3vw

  .formSimpleCmpDoneTextLine
    padding: 2vw 0

@include for-tablet
  .formSimpleCmpDoneTitle
    font-size: 2.5vw
    text-align: center

  .formSimpleCmpDoneText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw

  .formSimpleCmpDoneTextLine
    padding: 0.5vw 0
</style>
