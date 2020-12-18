<template>
  <div class="formAffiliateCmpContactCnt">
    <div class="formAffiliateCmpContactField">
      <input
        type="text"
        placeholder="email or phone"
        autocomplete="off"
        autocapitalize="none"
        class="formAffiliateCmpContactInput"
        @input="onInput"
        @keypress.enter="onSubmit"
      />
      <div
        class="formAffiliateCmpContactSend"
        :class="{
          formAffiliateCmpContactSendReady: isReady,
          formAffiliateCmpContactSendNotReady: !isReady,
        }"
        @click="onSubmit"
      >
        <utils-svg-cmp
          name="icon/send"
          class="formAffiliateCmpContactSendIco"
        />
      </div>
    </div>
    <form-affiliate-cmp-secure class="formAffiliateCmpSecure" />
  </div>
</template>

<script>
import FormAffiliateCmpSecure from '@/components/form_affiliate/FormAffiliateCmpSecure'
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'
import { signUp } from '@/libs/api'

export default {
  name: 'FormAffiliateCmpContact',
  components: { UtilsSvgCmp, FormAffiliateCmpSecure },
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
        this.$store.commit('form_affiliate/setContact', this.contact)
        this.$store.commit('form_affiliate/setPosOpt')
        const rsp = await signUp(
          this.$axios,
          this.contact,
          this.$store.state.form_affiliate.code
        ).then(function (data) {
          return data.success
        })
        this.$store.commit('form_signup/setError', rsp)
        this.$plausible.trackEvent('Signup', {
          props: {
            page: 'signup',
            affiliate: this.$store.state.form_affiliate.code,
          },
        })
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formAffiliateCmpContactField
  display: flex
  align-items: center

.formAffiliateCmpContactInput
  background: $white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $gray-xlight
  font-family: $font-family-montserrat
  color: $blue
  font-weight: 600

.formAffiliateCmpContactInput::placeholder
  color: $gray-xlight

.formAffiliateCmpContactInput:focus
  outline: 0

.formAffiliateCmpContactSend
  position: relative
  border-style: solid
  cursor: pointer

.formAffiliateCmpContactSendReady
  background: $blue-dark
  border-color: $blue-dark

.formAffiliateCmpContactSendNotReady
  background: $gray-xlight
  border-color: $gray-xlight

.formAffiliateCmpContactSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .formAffiliateCmpContactSendIco.svg
  fill: $white

@include for-phone
  .formAffiliateCmpContactCnt
    margin-top: 8vw
    width: 100%

  .formAffiliateCmpContactInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px
    font-size: 4vw
    text-indent: 2vw

  .formAffiliateCmpContactSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 2px
    margin-left: -1px

  .formAffiliateCmpContactSendIco
    width: 8vw

  .formAffiliateCmpSecure
    margin-top: 6vw

@include for-tablet
  .formAffiliateCmpContactCnt
    margin: 0 auto
    width: 50%

  .formAffiliateCmpContactInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px
    font-size: 1.5vw
    text-indent: 0.75vw

  .formAffiliateCmpContactSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 2px
    margin-left: -1px

  .formAffiliateCmpContactSendIco
    width: 1.75vw

  .formAffiliateCmpSecure
    margin-top: 1.25vw
</style>
