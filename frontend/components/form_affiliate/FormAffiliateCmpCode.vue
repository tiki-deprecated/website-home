<template>
  <div class="formAffiliateCmpCode">
    <input
      type="text"
      placeholder="code"
      autocomplete="off"
      autocapitalize="none"
      class="formAffiliateCmpCodeInput"
      @input="onInput"
      @keypress.enter="onSubmit"
    />
    <div
      class="formAffiliateCmpCodeSend"
      :class="{
        formAffiliateCmpCodeSendReady: isReady,
        formAffiliateCmpCodeSendNotReady: !isReady,
      }"
      @click="onSubmit"
    >
      <utils-svg-cmp name="icon/send" class="formAffiliateCmpCodeSendIco" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '@/components/utils/UtilsSvgCmp'

export default {
  name: 'FormAffiliateCmpCode',
  components: { UtilsSvgCmp },
  data() {
    return {
      code: '',
    }
  },
  computed: {
    isReady() {
      return !!(this.code && this.code.length > 0)
    },
  },
  mounted() {
    this.code = this.$nuxt.$route.query.code
    if (this.isReady) this.submit(this.code)
  },
  methods: {
    onInput(inputEvent) {
      this.code = inputEvent.target.value
    },
    onSubmit(submitEvent) {
      submitEvent.preventDefault()
      if (this.isReady) this.submit(this.code)
    },
    submit(code) {
      this.$store.commit('form_affiliate/setCode', code)
      this.$store.commit('form_affiliate/setPosContact')
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.formAffiliateCmpCode
  display: flex
  align-items: center

.formAffiliateCmpCodeInput
  background: $white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $gray-xlight
  font-family: $font-family-montserrat
  color: $blue
  font-weight: 600

.formAffiliateCmpCodeInput::placeholder
  color: $gray-xlight

.formAffiliateCmpCodeInput:focus
  outline: 0

.formAffiliateCmpCodeSend
  position: relative
  border-style: solid
  cursor: pointer

.formAffiliateCmpCodeSendReady
  background: $blue-dark
  border-color: $blue-dark

.formAffiliateCmpCodeSendNotReady
  background: $gray-xlight
  border-color: $gray-xlight

.formAffiliateCmpCodeSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .formAffiliateCmpCodeSendIco.svg
  fill: $white

@include for-phone
  .formAffiliateCmpCode
    margin-top: 8vw
    width: 100%

  .formAffiliateCmpCodeInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px
    font-size: 4vw
    text-indent: 2vw

  .formAffiliateCmpCodeSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 2px
    margin-left: -1px

  .formAffiliateCmpCodeSendIco
    width: 8vw

@include for-tablet
  .formAffiliateCmpCode
    margin: 0 auto
    width: 50%

  .formAffiliateCmpCodeInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px
    font-size: 1.5vw
    text-indent: 0.75vw

  .formAffiliateCmpCodeSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 2px
    margin-left: -1px

  .formAffiliateCmpCodeSendIco
    width: 1.75vw
</style>
