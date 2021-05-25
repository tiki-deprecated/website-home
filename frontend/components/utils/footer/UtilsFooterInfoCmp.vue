<template>
  <div>
    <div class="section">Information</div>
    <nuxt-link to="/blog/privacy" class="link content"
      >Privacy Notice</nuxt-link
    >
    <div class="link content" @click="githubClick">Github</div>
  </div>
</template>

<script>
export default {
  name: 'UtilsFooterInfoCmp',
  methods: {
    githubClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('Github', {
        props: { location: 'Footer' },
      })
      const win = window.open('https://github.com/tiki', '_blank')
      win.focus()
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.link, .link:hover, .link:link, .link:visited, .link:active
  font-family: $font-family-montserrat
  text-decoration: none
  color: $gray-xlight
  font-weight: 300
  cursor: pointer

.section
  font-family: $font-family-montserrat
  color: $gray-xlight
  font-weight: 500

.content
  display: block

@include for-phone
  .text, .link, .section
    font-size: 3vw

  .content
    margin: 0.25vw 0

  .section
    margin-bottom: 0.25vw

@include for-tablet
  .text, .link, .section
    font-size: 0.9vw

  .content
    margin: 0.25vw 0

  .section
    margin-bottom: 0.25vw
</style>
