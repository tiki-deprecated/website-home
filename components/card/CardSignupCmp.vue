<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="signup">
      <form class="form" @submit.stop.prevent="cardSignupCmpSubmit">
        <input
          class="input"
          name="input"
          :type="inputType"
          :placeholder="placeholder"
          required
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSignupCmp',
  props: {
    title: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: false,
      default: 'email',
    },
    placeholder: {
      type: String,
      required: false,
      default: 'user@email.com',
    },
  },
  methods: {
    cardSignupCmpSubmit() {
      this.$emit('CardSignupCmpSubmit')
    },
  },
}
</script>

<style scoped lang="sass">
.container
  width: 100%
  text-align: center

.title
  font-size: large
  margin-bottom: 1.5em
  font-weight: bold
  text-align: left

.signup
  display: inline-block
  width: 85%

.form .input
  width: 100%

.input
  height: 2em
  font-size: medium
  text-align: center
  border: .05em solid rgba($grey, 0.75)
  border-radius: 0.5em
  color: $black

.input:focus
  outline: none
  border: 0.1em solid $orange
  height: 1.9em

.input::placeholder
  font-family: $font-family
  color: $grey
</style>
