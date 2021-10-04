<template>
  <div class="button" @click="onClick($event, text, url)">{{ text }}</div>
</template>

<script>
export default {
  name: 'LinkFeatureCmp',
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick(clickEvent, name, href) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('featured', {
        props: { selected: name },
      })
      const win = window.open(href, '_blank')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.button
  border: 2px solid $white
  color: $white
  background: rgba($orange, 0.5)
  font-family: $font-family-nunito-sans
  text-align: center
  font-weight: 600
  //box-shadow: 1px 1px 15px 5px rgb(0, 0, 0, 0.1)
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  cursor: pointer

@include for-phone
  .button
    font-size: 4.5vw
    border-radius: 4vw
    padding: 4vw 5vw

@include for-tablet
  .button
    font-size: 1.2vw
    border-radius: 1vw
    padding: 1vw 2vw
</style>
