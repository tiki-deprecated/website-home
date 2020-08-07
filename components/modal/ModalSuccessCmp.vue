<template>
  <transition name="modalFade">
    <div class="backdrop" @click="close">
      <div class="window">
        <div v-show="cms.text != null" class="text">{{ cms.text }}</div>
        <header-icon-cmp
          v-show="cms.icon != null"
          class="icon"
          :name="cms.icon"
        />
        <div class="buttons">
          <card-button-v-cmp
            v-if="cms.follow.button.one != null"
            :cms="cms.follow.button.one"
          />
          <card-button-v-cmp
            v-if="cms.follow.button.two != null"
            :cms="cms.follow.button.two"
          />
          <card-button-v-cmp
            v-if="cms.follow.button.three != null"
            :cms="cms.follow.button.three"
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
    cms: {
      type: Object,
      required: true,
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
