<template>
  <div class="signupContact">
    <div class="field">
      <input
        type="text"
        placeholder="Your email"
        autocomplete="off"
        autocapitalize="none"
        class="input"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="send"
        :class="{
          sendReady: isReady,
          sendNotReady: !isReady,
        }"
        @click="onSubmit"
      >
        <utils-svg-cmp name="home/signup/send" class="icoSend" />
      </div>
    </div>
    <home-signup-secure-cmp class="secure" />
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'
import HomeSignupSecureCmp from './HomeSignupSecureCmp'
import { signUp } from '~/libs/api'

export default {
  name: 'HomeSignupContactCmp',
  components: { UtilsSvgCmp, HomeSignupSecureCmp },
  data() {
    return {
      contact: '',
    }
  },
  computed: {
    isReady() {
      return /\S+@\S+\.\S+/.test(this.contact)
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
        await signUp(this.$axios, this.contact, '').then(function (data) {
          return data.success
        })
        this.$plausible.trackEvent('Signup', {
          props: { affiliate: this.$store.state.code },
        })
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.field
  display: flex
  align-items: center

.input
  background: $white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $gray-xlight
  font-family: $font-family-montserrat
  color: $blue
  font-weight: 600

.input::placeholder
  color: $gray-xlight

.input:focus
  outline: 0

.send
  position: relative
  border-style: solid
  cursor: pointer

.sendReady
  background: $blue-dark
  border-color: $blue-dark

.sendNotReady
  background: $gray-xlight
  border-color: $gray-xlight

.icoSend
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .icoSend.svg
  fill: $white

@include for-phone
  .signupContact
    width: 100%

  .input
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 0
    font-size: 4vw
    text-indent: 2vw

  .send
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 1px
    margin-left: -1px

  .icoSend
    width: 8vw

  .secure
    margin-top: 6vw

@include for-tablet
  .signupContact
    margin: 0 auto
    width: 33%

  .input
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 0
    font-size: 1.5vw
    text-indent: 0.75vw

  .send
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 1px
    margin-left: -1px

  .icoSend
    width: 1.75vw

  .secure
    margin-top: 1.25vw
</style>
