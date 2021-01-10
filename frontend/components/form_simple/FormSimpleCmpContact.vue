<template>
  <div class="formSimpleCmpContactCnt">
    <div class="formSimpleCmpContactField">
      <input
        type="text"
        placeholder="Your email or phone #"
        autocomplete="off"
        autocapitalize="none"
        class="formSimpleCmpContactInput"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="formSimpleCmpContactSend"
        :class="{
          formSimpleCmpContactSendReady: isReady,
          formSimpleCmpContactSendNotReady: !isReady,
        }"
        @click="onSubmit"
      >
        {{ cta }}
      </div>
    </div>
    <formSimple-cmp-secure class="formSimpleCmpSecure" />
  </div>
</template>

<script>
import FormSimpleCmpSecure from '@/components/form_simple/FormSimpleCmpSecure'
import { signUp } from '@/libs/api'

export default {
  name: 'FormSimpleCmpContact',
  components: { FormSimpleCmpSecure },
  props: {
    cta: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: '',
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
        this.$store.commit('form_signup/setContact', this.contact)
        this.$store.commit('form_signup/setPosOpt')
        await signUp(this.$axios, this.contact, this.$store.state.code).then(
          function (data) {
            return data.success
          }
        )
        this.$plausible.trackEvent('Signup', {
          props: { affiliate: this.$store.state.code },
        })
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formSimpleCmpContactInput, .formSimpleCmpContactSend
  background: $white
  display: block
  border-style: solid
  border-color: $gray
  font-family: $font-family-montserrat
  font-weight: 600

.formSimpleCmpContactInput
  color: $blue
  margin: 0 auto

.formSimpleCmpContactSend
  color: $black-dark

.formSimpleCmpContactSend
  font-family: $font-family-montserrat
  color: $white

.formSimpleCmpContactField
  width: 100%
  margin: 0 auto

.formSimpleCmpContactInput::placeholder
  color: $gray

.formSimpleCmpContactInput:focus
  outline: 0
  border-color: $blue

.formSimpleCmpContactSend
  cursor: pointer

.formSimpleCmpContactSendReady
  background: $green
  border-color: $green

.formSimpleCmpContactSendNotReady
  background: $blue-dark
  border-color: $blue-dark

@include for-phone
  .formSimpleCmpContactCnt
    width: 100%

  .formSimpleCmpContactInput, .formSimpleCmpContactSend
    height: 15vw
    border-radius: 4vw
    font-size: 6vw
    text-indent: 4vw
    width: 88%

  .formSimpleCmpContactInput:focus
    border-radius: 4vw

  .formSimpleCmpContactSend
    margin: 5vw auto 0 auto
    line-height: 15vw

  .formSimpleCmpSecure
    margin-top: 5vw

@include for-tablet
  .formSimpleCmpContactCnt
    margin: 1vw auto 0 auto
    width: 33%

  .formSimpleCmpContactInput, .formSimpleCmpContactSend
    height: 3vw
    border-radius: 0.5vw
    font-size: 1.5vw
    text-indent: 0.75vw
    width: 95%

  .formSimpleCmpContactInput:focus
    border-radius: 0.5vw

  .formSimpleCmpContactSend
    margin: 1.25vw auto 0 auto
    line-height: 3vw

  .formSimpleCmpSecure
    margin-top: 1.25vw
</style>
