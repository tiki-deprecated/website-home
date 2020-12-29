<template>
  <div class="form382CmpContactCnt">
    <div class="form382CmpContactField">
      <input
        type="text"
        placeholder="email or phone"
        autocomplete="off"
        autocapitalize="none"
        class="form382CmpContactInput"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="form382CmpContactSend"
        :class="{
          form382CmpContactSendReady: isReady,
          form382CmpContactSendNotReady: !isReady,
        }"
        @click="onSubmit"
      >
        <utils-svg-cmp name="icon/send" class="form382CmpContactSendIco" />
      </div>
    </div>
    <form382-cmp-secure class="form382CmpSecure" />
  </div>
</template>

<script>
import Form382CmpSecure from '@/components/form_382/Form382CmpSecure'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { signUp } from '@/libs/api'

export default {
  name: 'Form382CmpContact',
  components: { UtilsSvgCmp, Form382CmpSecure },
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
          props: { page: 'signup', affiliate: this.$store.state.code },
        })
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.form382CmpContactField
  display: flex
  align-items: center

.form382CmpContactInput
  background: $white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $gray-xlight
  font-family: $font-family-montserrat
  color: $blue
  font-weight: 600

.form382CmpContactInput::placeholder
  color: $gray-xlight

.form382CmpContactInput:focus
  outline: 0

.form382CmpContactSend
  position: relative
  border-style: solid
  cursor: pointer

.form382CmpContactSendReady
  background: $blue-dark
  border-color: $blue-dark

.form382CmpContactSendNotReady
  background: $gray-xlight
  border-color: $gray-xlight

.form382CmpContactSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .form382CmpContactSendIco.svg
  fill: $white

@include for-phone
  .form382CmpContactCnt
    margin-top: 8vw
    width: 100%

  .form382CmpContactInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px
    font-size: 4vw
    text-indent: 2vw

  .form382CmpContactSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 2px
    margin-left: -1px

  .form382CmpContactSendIco
    width: 8vw

  .form382CmpSecure
    margin-top: 6vw

@include for-tablet
  .form382CmpContactCnt
    margin: 0 auto
    width: 50%

  .form382CmpContactInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px
    font-size: 1.5vw
    text-indent: 0.75vw

  .form382CmpContactSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 2px
    margin-left: -1px

  .form382CmpContactSendIco
    width: 1.75vw

  .form382CmpSecure
    margin-top: 1.25vw
</style>
