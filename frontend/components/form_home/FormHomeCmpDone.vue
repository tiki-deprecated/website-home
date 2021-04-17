<template>
  <div class="formHomeCmpDoneCnt">
    <div class="formHomeCmpDoneTitle">Done!</div>
    <div class="formHomeCmpDoneText">
      <div class="formHomeCmpDoneTextLine">Thank you for signing up.</div>
      <div
        class="formHomeCmpDoneTextLine"
        :class="{ formHomeCmpDoneTextLineHide: !opt }"
      >
        We will let you know when our Beta launches and we may get in touch
        beforehand for feedback.
      </div>
      <div
        class="formHomeCmpDoneTextLine"
        :class="{ formHomeCmpDoneTextLineHide: opt }"
      >
        We will let you know when our Beta launches.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormHomeCmpDone',
  computed: {
    opt() {
      return this.$store.state.form_signup.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formHomeCmpDoneTextLineHide
  display: none

.formHomeCmpDoneTitle
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600

.formHomeCmpDoneText
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .formHomeCmpDoneTitle
    font-size: 8vw

  .formHomeCmpDoneText
    font-size: 4vw
    margin-top: 3vw

  .formHomeCmpDoneTextLine
    padding: 2vw 0
@include for-tablet
  .formHomeCmpDoneTitle
    font-size: 2.5vw
    text-align: center

  .formHomeCmpDoneText
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw

  .formHomeCmpDoneTextLine
    padding: 0.5vw 0
</style>
