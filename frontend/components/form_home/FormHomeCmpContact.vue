<template>
  <div class="formHomeCmpContactCnt">
    <div class="formHomeCmpContactField">
      <input
        type="text"
        placeholder="email or phone"
        autocomplete="off"
        autocapitalize="none"
        class="formHomeCmpContactInput"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="formHomeCmpContactSend"
        :class="{
          formHomeCmpContactSendReady: isReady,
          formHomeCmpContactSendNotReady: !isReady,
        }"
        @click="onSubmit"
      >
        <utils-svg-cmp name="icon/send" class="formHomeCmpContactSendIco" />
      </div>
    </div>
    <form-home-cmp-secure class="formHomeCmpSecure" />
  </div>
</template>

<script>
import FormHomeCmpSecure from '@/components/form_home/FormHomeCmpSecure'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { signUp } from '@/libs/api'

export default {
  name: 'FormHomeCmpContact',
  components: { UtilsSvgCmp, FormHomeCmpSecure },
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
        await signUp(this.$axios, this.contact, '').then(function (data) {
          return data.success
        })
        this.$plausible.trackEvent('Signup', {
          props: { page: 'home', affiliate: this.$store.state.code },
        })
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formHomeCmpContactField
  display: flex
  align-items: center

.formHomeCmpContactInput
  background: $white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $gray-xlight
  font-family: $font-family-montserrat
  color: $blue
  font-weight: 600

.formHomeCmpContactInput::placeholder
  color: $gray-xlight

.formHomeCmpContactInput:focus
  outline: 0

.formHomeCmpContactSend
  position: relative
  border-style: solid
  cursor: pointer

.formHomeCmpContactSendReady
  background: $blue-dark
  border-color: $blue-dark

.formHomeCmpContactSendNotReady
  background: $gray-xlight
  border-color: $gray-xlight

.formHomeCmpContactSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .formHomeCmpContactSendIco.svg
  fill: $white

@include for-phone
  .formHomeCmpContactCnt
    width: 100%

  .formHomeCmpContactInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px
    font-size: 4vw
    text-indent: 2vw

  .formHomeCmpContactSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 2px
    margin-left: -1px

  .formHomeCmpContactSendIco
    width: 8vw

  .formHomeCmpSecure
    margin-top: 6vw

@include for-tablet
  .formHomeCmpContactCnt
    margin: 0 auto
    width: 33%

  .formHomeCmpContactInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px
    font-size: 1.5vw
    text-indent: 0.75vw

  .formHomeCmpContactSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 2px
    margin-left: -1px

  .formHomeCmpContactSendIco
    width: 1.75vw

  .formHomeCmpSecure
    margin-top: 1.25vw
</style>
