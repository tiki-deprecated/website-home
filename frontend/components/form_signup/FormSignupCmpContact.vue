<template>
  <div class="formSignupCmpContactCnt">
    <div class="formSignupCmpContactField">
      <input
        type="text"
        placeholder="email or phone"
        autocomplete="off"
        autocapitalize="none"
        class="formSignupCmpContactInput"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="formSignupCmpContactSend"
        :class="{
          formSignupCmpContactSendReady: isReady,
          formSignupCmpContactSendNotReady: !isReady,
        }"
        @click="onSubmit"
      >
        <utils-svg-cmp name="icon/send" class="formSignupCmpContactSendIco" />
      </div>
    </div>
    <form-signup-cmp-secure class="formSignupCmpSecure" />
  </div>
</template>

<script>
import FormSignupCmpSecure from '@/components/form_signup/FormSignupCmpSecure'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormSignupCmpContact',
  components: { UtilsSvgCmp, FormSignupCmpSecure },
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
      if (this.isReady) {
        this.$store.commit('form_signup/setContact', this.contact)
        this.$store.commit('form_signup/setPosOpt')
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formSignupCmpContactField
  display: flex
  align-items: center

.formSignupCmpContactInput
  background: $money-white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $money-gray-xlight
  font-family: $font-family-montserrat
  color: $money-blue
  font-weight: 600

.formSignupCmpContactInput::placeholder
  color: $money-gray-xlight

.formSignupCmpContactInput:focus
  outline: 0

.formSignupCmpContactSend
  position: relative
  border-style: solid

.formSignupCmpContactSendReady
  background: $money-blue-dark
  border-color: $money-blue-dark

.formSignupCmpContactSendNotReady
  background: $money-gray-xlight
  border-color: $money-gray-xlight

.formSignupCmpContactSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .formSignupCmpContactSendIco.svg
  fill: $money-white

@include for-phone
  .formSignupCmpContactCnt
    margin-top: 8vw
    width: 100%

  .formSignupCmpContactInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px
    font-size: 4vw
    text-indent: 2vw

  .formSignupCmpContactSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 2px
    margin-left: -1px

  .formSignupCmpContactSendIco
    width: 8vw

  .formSignupCmpSecure
    margin-top: 6vw

@include for-tablet
  .formSignupCmpContactCnt
    margin: 0 auto
    width: 33%

  .formSignupCmpContactInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px
    font-size: 1.5vw
    text-indent: 0.75vw

  .formSignupCmpContactSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 2px
    margin-left: -1px

  .formSignupCmpContactSendIco
    width: 1.75vw

  .formSignupCmpSecure
    margin-top: 1.25vw
</style>
