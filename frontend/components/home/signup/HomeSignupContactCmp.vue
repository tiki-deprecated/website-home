<template>
  <div class="signupContact">
    <div class="field">
      <input
        type="text"
        placeholder="Your email"
        autocomplete="off"
        autocapitalize="none"
        class="input"
        :class="{ inputError: isFailed }"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="send"
        :class="{
          sendReady: isReady,
          sendNotReady: !isReady,
          sendError: isFailed,
        }"
        @click="onSubmit"
      >
        <utils-svg-cmp name="home/signup/send" class="icoSend" />
      </div>
    </div>
    <div v-if="isFailed" :class="{ errorText: isFailed }">
      Please enter a valid email
    </div>
    <home-signup-secure-cmp class="secure" />
  </div>
</template>

<script>
import UtilsSvgCmp from '../../utils/UtilsSvgCmp'
import HomeSignupSecureCmp from './HomeSignupSecureCmp'
import { post } from '~/libs/api'

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
    isFailed() {
      return this.$store.getters['form_signup/isPosFailed']
    },
  },
  methods: {
    onInput(inputEvent) {
      this.contact = inputEvent.target.value
      const isFailed = this.$store.getters['form_signup/isPosFailed']
      if (isFailed) this.$store.commit('form_signup/setPosContact')
    },
    async onSubmit(submitEvent) {
      submitEvent.preventDefault()
      if (this.isReady) {
        this.$store.commit('form_signup/setContact', this.contact)
        this.$store.commit('form_signup/setPosOpt')
        const success = await post(
          this.$axios,
          this.contact,
          this.$store.state.code,
          null,
          null
        ).then(function (data) {
          return data.success
        })
        if (success) {
          this.$plausible.trackEvent('Signup', {
            props: { affiliate: this.$store.state.code },
          })
        } else this.$store.commit('form_signup/setPosFailed')
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

.inputError
  border-color: $red-dark
  color: $red-dark

.input::placeholder
  color: $gray-xlight

.input:focus
  outline: 0

.errorText
  font-family: $font-family-montserrat
  color: $red-dark

.send
  position: relative
  border-style: solid
  cursor: pointer

.sendReady
  background: $blue-dark
  border-color: $blue-dark

.sendError
  background: $red-dark
  border-color: $red-dark

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

  .errorText
    margin: 1vw 0 0 2vw
    font-size: 3.5vw

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

  .errorText
    margin: 0.25vw 0 0 1vw
    font-size: 1vw
</style>
