<template>
  <div class="mnySignupContact">
    <input
      type="text"
      placeholder="email or phone"
      autocomplete="off"
      autocapitalize="none"
      class="mnySignupContactInput"
      @input="onInput"
      @keypress.enter="onSubmit"
    />
    <div
      class="mnySignupContactSend"
      :class="{
        mnySignupContactSendReady: isReady,
        mnySignupContactSendNotReady: !isReady,
      }"
      @click="onSubmit"
    >
      <utils-svg-cmp name="money/ico-send" class="mnySignupContactSendIco" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
export default {
  name: 'MnySignupContactCmp',
  components: { UtilsSvgCmp },
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
    onSubmit(submitEvent) {
      submitEvent.preventDefault()
      if (this.isReady) this.$emit('signupContact', this.contact)
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnySignupContact
  display: flex
  align-items: center

.mnySignupContactInput
  background: $money-white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $money-gray-xlight
  font-family: $font-family-montserrat
  color: $money-blue
  font-weight: 600

.mnySignupContactInput::placeholder
  color: $money-gray-xlight

.mnySignupContactInput:focus
  outline: 0

.mnySignupContactSend
  position: relative
  border-style: solid

.mnySignupContactSendReady
  background: $money-blue-dark
  border-color: $money-blue-dark

.mnySignupContactSendNotReady
  background: $money-gray-xlight
  border-color: $money-gray-xlight

.mnySignupContactSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .mnySignupContactSendIco.svg
  fill: $money-white

@include for-phone
  .mnySignupContact
    margin-top: 8vw
    width: 100%

  .mnySignupContactInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px
    font-size: 4vw
    text-indent: 2vw

  .mnySignupContactSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 2px
    margin-left: -1px

  .mnySignupContactSendIco
    width: 8vw

@include for-tablet
  .mnySignupContact
    margin: 0 auto
    width: 50%

  .mnySignupContactInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px
    font-size: 1.5vw
    text-indent: 0.75vw

  .mnySignupContactSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 2px
    margin-left: -1px

  .mnySignupContactSendIco
    width: 1.75vw
</style>
