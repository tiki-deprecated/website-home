<template>
  <transition name="modalFade">
    <div class="backdrop" @click="close">
      <div class="window">
        <div v-show="text != null" class="text">{{ text }}</div>
        <header-icon-cmp v-show="icon != null" class="icon" :name="icon" />
        <div class="buttons">
          <card-button-v-cmp
            v-if="followButton1Icon != null && followButton1Url != null"
            :icon="followButton1Icon"
            :url="followButton1Url"
          />
          <card-button-v-cmp
            v-if="followButton2Icon != null && followButton2Url != null"
            :icon="followButton2Icon"
            :url="followButton2Url"
          />
          <card-button-v-cmp
            v-if="followButton3Icon != null && followButton3Url != null"
            :icon="followButton3Icon"
            :url="followButton3Url"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import HeaderIconCmp from '~/components/header/HeaderIconCmp'
import CardButtonVCmp from '~/components/card/CardButtonVCmp'

export default {
  name: 'ModalSuccessCmp',
  components: { HeaderIconCmp, CardButtonVCmp },
  props: {
    text: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    followButton1Url: {
      type: String,
      required: false,
      default: null,
    },
    followButton1Icon: {
      type: String,
      required: false,
      default: null,
    },
    followButton2Url: {
      type: String,
      required: false,
      default: null,
    },
    followButton2Icon: {
      type: String,
      required: false,
      default: null,
    },
    followButton3Url: {
      type: String,
      required: false,
      default: null,
    },
    followButton3Icon: {
      type: String,
      required: false,
      default: null,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped lang="sass">
.modalFade-enter-active, .modalFade-leave-active
  transition: opacity .5s ease

.backdrop
  height: 100%
  width: 100%
  background-color: rgba($black, 0.75)
  backdrop-filter: blur(0.1em)

.window
  background-color: $white
  width: 90%
  max-width: 20em
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  border-radius: .5em

.text
  font-size: x-large
  font-weight: bold
  color: $brown
  margin: 1.5em
  text-align: center

.icon
  width: 7em
  margin: 1.5em auto

.buttons
  display: flex
  margin-top: 3em
  margin-bottom: 1.5em
  justify-content: space-evenly
</style>
