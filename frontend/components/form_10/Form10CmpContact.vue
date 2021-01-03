<template>
  <div class="form10CmpContactCnt">
    <div class="form10CmpContactField">
      <input
        type="text"
        placeholder="email or phone"
        autocomplete="off"
        autocapitalize="none"
        class="form10CmpContactInput"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="form10CmpContactSend"
        :class="{
          form10CmpContactSendReady: isReady,
          form10CmpContactSendNotReady: !isReady,
        }"
        @click="onSubmit"
      >
        <utils-svg-cmp name="icon/send" class="form10CmpContactSendIco" />
      </div>
    </div>
    <form10-cmp-secure class="form10CmpSecure" />
  </div>
</template>

<script>
import Form10CmpSecure from '@/components/form_10/Form10CmpSecure'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { signUp } from '@/libs/api'

export default {
  name: 'Form10CmpContact',
  components: { UtilsSvgCmp, Form10CmpSecure },
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

.form10CmpContactField
  display: flex
  align-items: center

.form10CmpContactInput
  background: $white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $gray-xlight
  font-family: $font-family-montserrat
  color: $blue
  font-weight: 600

.form10CmpContactInput::placeholder
  color: $gray-xlight

.form10CmpContactInput:focus
  outline: 0

.form10CmpContactSend
  position: relative
  border-style: solid
  cursor: pointer

.form10CmpContactSendReady
  background: $blue-dark
  border-color: $blue-dark

.form10CmpContactSendNotReady
  background: $gray-xlight
  border-color: $gray-xlight

.form10CmpContactSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .form10CmpContactSendIco.svg
  fill: $white

@include for-phone
  .form10CmpContactCnt
    margin-top: 6vw
    width: 100%

  .form10CmpContactInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px
    font-size: 4vw
    text-indent: 2vw

  .form10CmpContactSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 2px
    margin-left: -1px

  .form10CmpContactSendIco
    width: 8vw

  .form10CmpSecure
    margin-top: 6vw

@include for-tablet
  .form10CmpContactCnt
    margin: 1vw auto 0 auto
    width: 50%

  .form10CmpContactInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px
    font-size: 1.5vw
    text-indent: 0.75vw

  .form10CmpContactSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 2px
    margin-left: -1px

  .form10CmpContactSendIco
    width: 1.75vw

  .form10CmpSecure
    margin-top: 1.25vw
</style>
