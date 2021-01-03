<template>
  <div class="form382CmpDoneCnt">
    <div class="form382CmpDoneTitle">Done!</div>
    <div class="form382CmpDoneText">
      <div class="form382CmpDoneTextLine">Thank you for signing up.</div>
      <div
        class="form382CmpDoneTextLine"
        :class="{ form382CmpDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches in January and we may get in
        touch beforehand for feedback.
      </div>
      <div
        class="form382CmpDoneTextLine"
        :class="{ form382CmpDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches in January.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form382CmpDone',
  computed: {
    opt() {
      return this.$store.state.form_signup.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.form382CmpDoneTextLineHide
  display: none

.form382CmpDoneTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.form382CmpDoneText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .form382CmpDoneTitle
    font-size: 8vw

  .form382CmpDoneText
    font-size: 4vw
    margin-top: 3vw

  .form382CmpDoneTextLine
    padding: 2vw 0
@include for-tablet
  .form382CmpDoneTitle
    font-size: 2.5vw
    text-align: center

  .form382CmpDoneText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw

  .form382CmpDoneTextLine
    padding: 0.5vw 0
</style>
