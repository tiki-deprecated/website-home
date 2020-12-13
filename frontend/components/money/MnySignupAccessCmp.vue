<template>
  <div class="mnySignupAccess">
    <input
      type="text"
      placeholder="code"
      autocomplete="off"
      autocapitalize="none"
      class="mnySignupAccessInput"
      @input="onInput"
      @keypress.enter="onSubmit"
    />
    <div
      class="mnySignupAccessSend"
      :class="{
        mnySignupAccessSendReady: isReady,
        mnySignupAccessSendNotReady: !isReady,
      }"
      @click="onSubmit"
    >
      <utils-svg-cmp name="money/ico-send" class="mnySignupAccessSendIco" />
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'
export default {
  name: 'MnySignupAccessCmp',
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
      this.$emit('signupAccessCode', code)
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.mnySignupAccess
  display: flex
  align-items: center

.mnySignupAccessInput
  background: $money-white
  width: 100%
  display: flex
  align-items: center
  border-style: solid
  border-color: $money-gray-xlight
  font-family: $font-family-montserrat
  color: $money-blue
  font-weight: 600

.mnySignupAccessInput::placeholder
  color: $money-gray-xlight

.mnySignupAccessInput:focus
  outline: 0

.mnySignupAccessSend
  position: relative
  border-style: solid

.mnySignupAccessSendReady
  background: $money-blue-dark
  border-color: $money-blue-dark

.mnySignupAccessSendNotReady
  background: $money-gray-xlight
  border-color: $money-gray-xlight

.mnySignupAccessSendIco
  width: 8vw
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

::v-deep .mnySignupAccessSendIco.svg
  fill: $money-white

@include for-phone
  .mnySignupAccess
    margin-top: 8vw
    width: 100%

  .mnySignupAccessInput
    height: 15vw
    border-radius: 4vw 0 0 4vw
    border-width: 1px
    font-size: 4vw
    text-indent: 2vw

  .mnySignupAccessSend
    height: 15vw
    width: 20vw
    border-radius: 0 4vw 4vw 0
    border-width: 2px
    margin-left: -1px

  .mnySignupAccessSendIco
    width: 8vw

@include for-tablet
  .mnySignupAccess
    margin: 0 auto
    width: 50%

  .mnySignupAccessInput
    height: 3vw
    border-radius: 0.5vw 0 0 0.5vw
    border-width: 1px
    font-size: 1.5vw
    text-indent: 0.75vw

  .mnySignupAccessSend
    height: 3vw
    width: 4vw
    border-radius: 0 0.5vw 0.5vw 0
    border-width: 2px
    margin-left: -1px

  .mnySignupAccessSendIco
    width: 1.75vw
</style>
