<template>
  <div class="utilsSignupCmpCnt">
    <div class="utilsSignupCmpTitle">{{ title }}</div>
    <div class="utilsSignupCmpFormWrapper">
      <form
        v-if="submitted == null"
        class="utilsSignupCmpForm"
        @submit.stop.prevent="utilsSignupCmpSubmit"
      >
        <input
          class="utilsSignupCmpInput"
          name="email"
          type="email"
          placeholder="user@email.com"
          required
        />
      </form>
      <div v-if="submitted != null" class="utilsSignupCmpSubmitted">
        <utils-svg-cmp name="check" class="utilsSignupCmpSubmittedIcon" />
        <div class="utilsSignupCmpSubmittedText">{{ submitted }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

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
  },
  data() {
    return {
      submitted: null,
      submitError: null,
    }
  },
  methods: {
    async utilsSignupCmpSubmit(submitEvent) {
      submitEvent.preventDefault()

      const parent = this
      const path =
        'https://d5jdrqbhij.execute-api.us-east-1.amazonaws.com/production/0-0-1/signup/' +
        (this.isUser ? 'user' : 'buyer')

      // eslint-disable-next-line no-unused-vars
      const res = await this.$axios
        .$post(
          path,
          {
            contact: submitEvent.target.elements.email.value,
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
          parent.submitted = submitEvent.target.elements.email.value
          parent.$emit('utilsSignupCmpSubmit')
        })
        .catch(function (e) {
          parent.submitError = 'Uh oh. Double check your info and try again?'
        })
    },
  },
}
</script>

<style scoped lang="sass">
.utilsSignupCmpCnt
  width: 100%
  text-align: center

.utilsSignupCmpTitle
  font-size: large
  margin-bottom: 1.5em
  font-weight: bold
  text-align: left
  letter-spacing: 0.2ch
  text-transform: uppercase
  color: $text

.utilsSignupCmpFormWrapper
  display: inline-block
  width: 75%

.utilsSignupCmpForm, .utilsSignupCmpInput
  width: 100%

.utilsSignupCmpInput
  height: 2.5em
  text-align: center
  border: 0.1em solid rgba($blue, 0.25)
  box-shadow: 0 0 0.25em rgba($blue, 0.5)
  border-radius: 0.5em
  color: $text-light
  letter-spacing: 0.2ch
  font-size: small
  text-transform: lowercase

.utilsSignupCmpInput:focus
  outline: none
  border: 0.1em solid rgba($orange, 0.25)
  box-shadow: 0 0 0.25em rgba($orange, 0.5)
  height: 2.5em

.utilsSignupCmpInput::placeholder
  font-family: $font-family
  color: $grey

.utilsSignupCmpSubmitted
  height: 2.5em
  background-color: $blue
  border: 0.1em solid $blue
  box-shadow: 0 0 0.25em rgba($blue, 0.5)
  border-radius: 0.5em
  padding: 1px 2px
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  font-size: small

.utilsSignupCmpSubmittedIcon
  width: 1.2em
  margin: 0 0.5em

::v-deep .utilsSignupCmpSubmittedIcon.svg
  fill: $white

.utilsSignupCmpSubmittedText
  color: $white
  letter-spacing: 0.2ch
  margin-right: 0.5em
  overflow: hidden
  text-transform: lowercase
  padding-bottom: 0.3em
</style>
