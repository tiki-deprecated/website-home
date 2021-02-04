<template>
  <div class="formBetaCmpContactCnt">
    <div v-if="errorMessage !== null" class="formBetaCmpContactError">
      {{ errorMessage }}
    </div>
    <div class="formBetaCmpContactField">
      <input
        type="text"
        placeholder="Your email or phone #"
        autocomplete="off"
        autocapitalize="none"
        class="formBetaCmpContactInput"
        :class="{ formBetaCmpContactInputError: errorMessage !== null }"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="formBetaCmpContactSend"
        :class="{
          formBetaCmpContactSendReady: isReady,
          formBetaCmpContactSendNotReady: !isReady,
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
  name: 'FormBetaCmpContact',
  props: {
    cta: {
      type: String,
      required: true,
    },
    how: {
      type: Boolean,
      required: false,
      default: true,
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

.formBetaCmpContactInput, .formBetaCmpContactSend
  display: block
  border-style: solid
  border-color: $gray-xlight
  font-family: $font-family-montserrat
  font-weight: 600

.formBetaCmpContactInput
  color: $blue
  background: $gray-xlight
  margin: 0 auto

.formBetaCmpContactSend
  color: $black-dark

.formBetaCmpContactSend
  font-family: $font-family-montserrat
  color: $black-dark

.formBetaCmpContactField
  width: 100%
  margin: 0 auto

.formBetaCmpContactInput::placeholder
  color: $gray

.formBetaCmpContactInput:focus
  outline: 0
  border-color: $gray

.formBetaCmpContactInputError, .formBetaCmpContactInputError:focus
  border-color: $orange

.formBetaCmpContactSend
  cursor: pointer

.formBetaCmpContactSendReady
  background: $gray-dark
  border-color: $gray-dark

.formBetaCmpContactSendNotReady
  background: $gray
  border-color: $gray

.formBetaCmpContactError
  font-family: $font-family-montserrat
  font-weight: 600
  color: $orange
  text-align: center

@include for-phone
  .formBetaCmpContactCnt
    width: 100%

  .formBetaCmpContactInput, .formBetaCmpContactSend
    height: 15vw
    border-radius: 4vw
    font-size: 6vw
    text-indent: 4vw
    width: 88%

  .formBetaCmpContactInput:focus
    border-radius: 4vw

  .formBetaCmpContactSend
    margin: 5vw auto 0 auto
    line-height: 15vw

  .formBetaCmpContactError
    margin-bottom: 2vw
    font-size: 3.5vw

@include for-tablet
  .formBetaCmpContactCnt
    margin: 1vw auto 0 auto
    width: 100%

  .formBetaCmpContactInput, .formBetaCmpContactSend
    height: 2.5vw
    border-radius: 0.75vw
    font-size: 1vw
    text-indent: 0.75vw
    width: 100%

  .formBetaCmpContactInput:focus
    border-radius: 0.75vw

  .formBetaCmpContactSend
    margin: 1vw auto 0 auto
    line-height: 2.5vw

  .formBetaCmpContactError
    margin-bottom: 0.5vw
    font-size: 0.9vw
</style>
