<template>
  <div class="cardSignupCmpCnt">
    <div class="cardSignupCmpTitle">{{ title }}</div>
    <div class="cardSignupCmpFormWrapper">
      <form
        v-if="submitted == null"
        class="cardSignupCmpForm"
        @submit.stop.prevent="cardSignupCmpSubmit"
      >
        <input
          class="cardSignupCmpInput"
          name="email"
          type="email"
          placeholder="user@email.com"
          required
        />
      </form>
      <div v-if="submitted != null" class="cardSignupCmpSubmitted">
        <utils-svg-cmp name="check" class="cardSignupCmpSubmittedIcon" />
        <div class="cardSignupCmpSubmittedText">{{ submitted }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'CardSignupCmp',
  components: { UtilsSvgCmp },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      submitted: null,
    }
  },
  methods: {
    cardSignupCmpSubmit(submitEvent) {
      this.submitted = submitEvent.target.elements.email.value
      this.$emit('cardSignupCmpSubmit')
    },
  },
}
</script>

<style scoped lang="sass">
.cardSignupCmpCnt
  width: 100%
  text-align: center

.cardSignupCmpTitle
  font-size: large
  margin-bottom: 1.5em
  font-weight: bold
  text-align: left
  letter-spacing: 0.2ch
  text-transform: uppercase
  color: $text

.cardSignupCmpFormWrapper
  display: inline-block
  width: 75%

.cardSignupCmpForm, .cardSignupCmpInput
  width: 100%

.cardSignupCmpInput
  height: 2.5em
  text-align: center
  border: 0.1em solid rgba($blue, 0.25)
  box-shadow: 0 0 0.25em rgba($blue, 0.5)
  border-radius: 0.5em
  color: $text-light
  letter-spacing: 0.2ch
  font-size: small
  text-transform: lowercase

.cardSignupCmpInput:focus
  outline: none
  border: 0.1em solid rgba($orange, 0.25)
  box-shadow: 0 0 0.25em rgba($orange, 0.5)
  height: 2.5em

.cardSignupCmpInput::placeholder
  font-family: $font-family
  color: $grey

.cardSignupCmpSubmitted
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

.cardSignupCmpSubmittedIcon
  width: 1.2em
  margin: 0 0.5em

::v-deep .cardSignupCmpSubmittedIcon.svg
  fill: $white

.cardSignupCmpSubmittedText
  color: $white
  letter-spacing: 0.2ch
  margin-right: 0.5em
  overflow: hidden
  text-transform: lowercase
  padding-bottom: 0.3em
</style>
