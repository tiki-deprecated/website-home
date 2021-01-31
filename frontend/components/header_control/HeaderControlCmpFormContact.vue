<template>
  <div class="headerControlCmpFormContactCnt">
    <div v-if="errorMessage !== null" class="headerControlCmpFormContactError">
      {{ errorMessage }}
    </div>
    <div class="headerControlCmpFormContactField">
      <input
        type="text"
        placeholder="Your email or phone #"
        autocomplete="off"
        autocapitalize="none"
        class="headerControlCmpFormContactInput"
        :class="{
          headerControlCmpFormContactInputError: errorMessage !== null,
        }"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="headerControlCmpFormContactSend"
        :class="{
          headerControlCmpFormContactSendReady: isReady,
          headerControlCmpFormContactSendNotReady: !isReady,
        }"
        @click="onSubmit"
      >
        {{ cta }}
      </div>
    </div>
  </div>
</template>

<script>
import { signUp } from '@/libs/api'

export default {
  name: 'HeaderControlCmpFormContact',
  props: {
    cta: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: '',
      errorMessage: null,
    }
  },
  computed: {
    isReady() {
      return (
        /\S+@\S+\.\S+/.test(this.contact) ||
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
          this.contact
        )
      )
    },
  },
  methods: {
    onInput(inputEvent) {
      this.contact = inputEvent.target.value
    },
    async onSubmit(submitEvent) {
      submitEvent.preventDefault()
      if (this.isReady) {
        this.errorMessage = null
        this.$store.commit('form_signup/setContact', this.contact)
        this.$store.commit('form_signup/setPosOpt')
        const rsp = await signUp(
          this.$axios,
          this.contact,
          this.$store.state.code
        ).then(function (data) {
          return data.success
        })
        if (!rsp) {
          this.errorMessage =
            "Uh oh, something went wrong. Send us a note, we'll fix it!"
          this.$plausible.trackEvent('Signup', {
            props: { affiliate: this.$store.state.code, error: true },
          })
        } else {
          this.$plausible.trackEvent('Signup', {
            props: { affiliate: this.$store.state.code },
          })
        }
      } else this.errorMessage = 'Uh oh, we need a valid email to notify you :)'
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.headerControlCmpFormContactInput, .headerControlCmpFormContactSend
  display: block
  border-style: solid
  border-color: $gray-xlight
  font-family: $font-family-montserrat
  font-weight: 600

.headerControlCmpFormContactInput
  color: $blue
  background: $gray-xlight
  margin: 0 auto

.headerControlCmpFormContactSend
  color: $black-dark

.headerControlCmpFormContactSend
  font-family: $font-family-montserrat
  color: $black-dark

.headerControlCmpFormContactField
  width: 100%
  margin: 0 auto

.headerControlCmpFormContactInput::placeholder
  color: $gray

.headerControlCmpFormContactInput:focus
  outline: 0
  border-color: $gray

.headerControlCmpFormContactInputError, .headerControlCmpFormContactInputError:focus
  border-color: $orange

.headerControlCmpFormContactSend
  cursor: pointer

.headerControlCmpFormContactSendReady
  background: $gray-dark
  border-color: $gray-dark

.headerControlCmpFormContactSendNotReady
  background: $gray
  border-color: $gray

.headerControlCmpFormContactError
  font-family: $font-family-montserrat
  font-weight: 600
  color: $orange
  text-align: center

@include for-phone
  .headerControlCmpFormContactCnt
    width: 100%

  .headerControlCmpFormContactInput, .headerControlCmpFormContactSend
    height: 15vw
    border-radius: 4vw
    font-size: 6vw
    text-indent: 4vw
    width: 88%

  .headerControlCmpFormContactInput:focus
    border-radius: 4vw

  .headerControlCmpFormContactSend
    margin: 5vw auto 0 auto
    line-height: 15vw

  .headerControlCmpFormSecure
    margin-top: 5vw

  .headerControlCmpFormContactError
    margin-bottom: 2vw
    font-size: 3.5vw

@include for-tablet
  .headerControlCmpFormContactCnt
    margin: 0 auto
    width: 100%

  .headerControlCmpFormContactInput, .headerControlCmpFormContactSend
    height: 2.5vw
    border-radius: 0.75vw
    font-size: 1vw
    text-indent: 0.75vw
    width: 100%

  .headerControlCmpFormContactInput:focus
    border-radius: 0.75vw

  .headerControlCmpFormContactSend
    margin: 1vw auto 0 auto
    line-height: 2.5vw

  .headerControlCmpFormContactError
    margin-bottom: 0.5vw
    font-size: 0.9vw
</style>
