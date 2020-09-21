<template>
  <div class="utilsSignupCmpCnt">
    <div class="utilsSignupCmpTitle">{{ title }}</div>
    <div v-if="submitted == null" class="utilsSignupCmpWrapper">
      <div
        class="utilsSignupCmpInputWrapper"
        :class="{ utilsSignupCmpInputWrapperFocus: isFocus }"
      >
        <input
          class="utilsSignupCmpInput utilsSignupCmpText utilsSignupCmpBorder"
          :class="{
            utilsSignupCmpBorderFocus: isFocus,
            utilsSignupCmpBorderFocusError: isError,
          }"
          name="input"
          type="text"
          placeholder="Email or Phone"
          autocomplete="off"
          autocapitalize="none"
          @focusin="utilsSignupCmpFocusIn"
          @focusout="utilsSignupCmpFocusOut"
          @input="utilsSignupCmpInput"
          @keypress.enter="utilsSignupSubmit"
        />
      </div>
      <div
        v-if="isFocus === true"
        class="utilsSignupCmpSubmit"
        :class="{
          utilsSignupCmpSubmitReady: ready,
          utilsSignupCmpSubmitError: ready == null && isError,
          utilsSignupCmpSubmitReadyError: ready != null && isError,
        }"
        @click="utilsSignupSubmit"
      >
        <div class="utilsSignupCmpSubmitCnt">
          <utils-svg-cmp name="send" class="utilsSignupCmpSubmitSvg" />
        </div>
      </div>
    </div>
    <div
      v-if="submitted != null"
      class="utilsSignupCmpWrapper utilsSignupCmpBorder utilsSignupCmpSubmitted"
    >
      <utils-svg-cmp name="check" class="utilsSignupCmpSubmittedIcon" />
      <div class="utilsSignupCmpSubmittedText utilsSignupCmpText">
        {{ submitted }}
      </div>
    </div>
    <div v-if="disclaimer != null" class="utilsSignupCmpDisclaimer">
      {{ disclaimer.text }}
      <span v-if="disclaimer.privacy != null || disclaimer.github != null"
        >See
        <nuxt-link
          v-if="disclaimer.privacy != null"
          :to="disclaimer.privacy"
          class="utilsSignupCmpDisclaimerLink"
        >
          privacy-policy</nuxt-link
        >
        <span v-if="disclaimer.privacy != null && disclaimer.github != null"
          >&nbsp;or&nbsp;</span
        >
        <a
          v-if="disclaimer.github != null"
          class="utilsSignupCmpDisclaimerLink"
          :href="disclaimer.github"
        >
          github</a
        >
      </span>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'

export default {
  name: 'UtilsSignupCmp',
  components: { UtilsSvgCmp },
  props: {
    title: {
      type: String,
      required: true,
    },
    isUser: {
      type: Boolean,
      required: false,
      default: true,
    },
    disclaimer: {
      type: Object,
      required: false,
      default: null,
    },
    apiVersion: {
      type: String,
      required: false,
      default: '0-0-1',
    },
  },
  data() {
    return {
      isFocus: null,
      ready: null,
      submitted: null,
      isError: null,
    }
  },
  methods: {
    utilsSignupCmpFocusIn(focusInEvent) {
      focusInEvent.preventDefault()
      this.isFocus = true
    },
    utilsSignupCmpFocusOut(focusOutEvent) {
      focusOutEvent.preventDefault()
      if (
        !focusOutEvent.target.value ||
        focusOutEvent.target.value.length === 0
      ) {
        this.isFocus = false
        this.isError = false
      }
    },
    utilsSignupCmpInput(inputEvent) {
      const input = inputEvent.target.value
      if (
        /\S+@\S+\.\S+/.test(input) ||
        /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(input)
      )
        this.ready = input
      else this.ready = null
    },
    async utilsSignupSubmit(submitEvent) {
      submitEvent.preventDefault()
      if (this.ready != null) {
        const parent = this
        const path =
          'https://api.mytiki.com/' +
          this.apiVersion +
          '/signup/' +
          (this.isUser ? 'user' : 'buyer')

        // eslint-disable-next-line no-unused-vars
        const res = await this.$axios
          .$post(
            path,
            {
              contact: this.ready,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
              validateStatus(status) {
                return status === 200
              },
            }
          )
          .then(function (e) {
            parent.submitted = parent.ready
            parent.isError = false
            parent.$emit('utilsSignupCmpSubmit')
          })
          .catch(function (e) {
            parent.isError = true
            parent.submitted = null
          })
      }
    },
  },
}
</script>

<style scoped lang="sass">
.utilsSignupCmpCnt
  width: 75%
  margin-left: auto
  margin-right: auto

.utilsSignupCmpTitle
  font-size: large
  font-weight: bold
  text-align: center
  letter-spacing: 0.2ch
  text-transform: uppercase
  color: $text

.utilsSignupCmpWrapper
  width: 100%
  height: 2.25em
  margin: 1.5em auto 0 auto

.utilsSignupCmpText
  font-family: $font-family
  letter-spacing: 0.2ch
  font-size: small
  text-transform: lowercase
  padding-bottom: 0.3em
  color: $text

.utilsSignupCmpBorder
  border: 0.1em solid rgba($blue, 0.5)
  -moz-box-shadow: 0 0 0.25em rgba($blue, 1)
  -webkit-box-shadow: 0 0 0.25em rgba($blue, 1)
  box-shadow: 0 0 0.25em rgba($blue, 1)
  border-radius: 0.5em

.utilsSignupCmpBorderFocus
  border: 0.1em solid rgba($orange, 0.5)
  -moz-box-shadow: 0 0 0.25em rgba($orange, 1)
  -webkit-box-shadow: 0 0 0.25em rgba($orange, 1)
  box-shadow: 0 0 0.25em rgba($orange, 1)

.utilsSignupCmpBorderFocusError
  border: 0.1em solid rgba($red, 0.5)
  -moz-box-shadow: 0 0 0.25em rgba($red, 1)
  -webkit-box-shadow: 0 0 0.25em rgba($red, 1)
  box-shadow: 0 0 0.25em rgba($red, 1)

.utilsSignupCmpInput
  height: 100%
  width: 100%
  background: white
  text-indent: 0.5em
  padding: 0

.utilsSignupCmpInputWrapper
  border: 0.1em solid rgba($white, 0)
  height: 100%
  width: 100%
  vertical-align: middle
  display: inline-block

.utilsSignupCmpInputWrapperFocus
  width: calc(100% - 2.5em)

.utilsSignupCmpInput:focus
  outline: none

.utilsSignupCmpInput::placeholder
  color: $grey
  margin: 0 auto
  text-align: center

.utilsSignupCmpInput:focus::placeholder
  text-align: left

.utilsSignupCmpSubmit
  height: 100%
  width: 1.5em
  background: rgba($orange, 0.25)
  border: 0.1em solid rgba($orange, 0)
  border-radius: 0.2em
  vertical-align: middle
  display: inline-block

.utilsSignupCmpSubmitError
  background: rgba($red, 0.25)
  border: 0.1em solid rgba($red, 0)

.utilsSignupCmpSubmitCnt
  display: flex
  height: 100%
  align-items: center
  justify-content: center

::v-deep .utilsSignupCmpSubmitSvg.svg
  fill: $white
  height: 0.9em
  margin: auto

.utilsSignupCmpSubmitReady
  background: $orange

.utilsSignupCmpSubmitReadyError
  background: $red

.utilsSignupCmpSubmitted
  display: flex
  align-items: center
  justify-content: center
  background-color: $blue
  border: 0.1em solid $blue
  -moz-box-shadow: 0 0 0.25em rgba($blue, 0.5)
  -webkit-box-shadow: 0 0 0.25em rgba($blue, 0.5)
  box-shadow: 0 0 0.25em rgba($blue, 0.5)

.utilsSignupCmpSubmittedIcon
  width: 1.2em
  margin: 0 0.5em

::v-deep .utilsSignupCmpSubmittedIcon.svg
  fill: $white

.utilsSignupCmpSubmittedText
  color: $white
  margin-right: 0.5em
  overflow: hidden

.utilsSignupCmpDisclaimer
  font-family: $font-family
  letter-spacing: 0.2ch
  font-size: small
  color: $grey
  text-align: justify
  margin-top: 2em

.utilsSignupCmpDisclaimerLink
  font-weight: bold
  color: $grey
  text-decoration: none
</style>
