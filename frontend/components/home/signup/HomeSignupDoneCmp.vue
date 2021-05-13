<template>
  <div class="signupDone">
    <div class="title">Done!</div>
    <div class="text">
      <div class="line">Thank you for signing up.</div>
      <div class="line" :class="{ lineHide: !opt }">
        We will let you know when our Beta launches and we may get in touch
        beforehand for feedback.
      </div>
      <div class="line" :class="{ lineHide: opt }">
        We will let you know when our Beta launches.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSignupDoneCmp',
  computed: {
    opt() {
      return this.$store.state.form_signup.opt
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.lineHide
  display: none

.title
  color: $blue-dark
  font-family: $font-family-montserrat
  font-weight: 600

.text
  color: $blue-dark
  font-family: $font-family-nunito
  font-weight: 700

@include for-phone
  .title
    font-size: 8vw

  .text
    font-size: 4vw
    margin-top: 3vw

  .line
    padding: 2vw 0
@include for-tablet
  .title
    font-size: 2.5vw
    text-align: center

  .text
    font-size: 1.25vw
    text-align: center
    margin-top: 1vw

  .line
    padding: 0.5vw 0
</style>
