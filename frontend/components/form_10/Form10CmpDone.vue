<template>
  <div class="form10CmpDoneCnt">
    <div class="form10CmpDoneTitle">Done!</div>
    <div class="form10CmpDoneText">
      <div class="form10CmpDoneTextLine">Thank you for signing up.</div>
      <div
        class="form10CmpDoneTextLine"
        :class="{ form10CmpDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches in January and we may get in
        touch beforehand for feedback.
      </div>
      <div
        class="form10CmpDoneTextLine"
        :class="{ form10CmpDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches in January.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form10CmpDone',
  computed: {
    opt() {
      return this.$store.state.form_signup.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.form10CmpDoneTextLineHide
  display: none

.form10CmpDoneTitle
  color: $green
  font-family: $font-family-montserrat
  font-weight: 600

.form10CmpDoneText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .form10CmpDoneTitle
    font-size: 8vw

  .form10CmpDoneText
    font-size: 4vw
    margin-top: 3vw

  .form10CmpDoneTextLine
    padding: 2vw 0

@include for-tablet
  .form10CmpDoneTitle
    font-size: 2.5vw
    text-align: center

  .form10CmpDoneText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw

  .form10CmpDoneTextLine
    padding: 0.5vw 0
</style>
