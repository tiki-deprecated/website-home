<template>
  <div class="body">
    <p>
      Welcome to the TIKI tribe! Due to exciting but overwhelming demand, we are
      slowly adding more and more people to the beta (it's quite buggy 🤫).
    </p>
    <p>
      <b>Your spot is reserved.</b> We add more users every month, so keep an
      eye out for your invite!
    </p>
    <p>
      Thank you for your support and patience; we can't wait for you to get your
      hands on the app!
    </p>
  </div>
</template>

<script>
export default {
  name: 'ConfirmedBodyCmp',
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.body
  font-family: $font-family-montserrat
  color: $blue-dark
  font-weight: normal
  margin-left: auto
  margin-right: auto

@include for-phone
  .body
    font-size: 5vw
    width: 90%

@include for-tablet
  .body
    font-size: 1.2vw
    width: 40%
    text-align: left
</style>
