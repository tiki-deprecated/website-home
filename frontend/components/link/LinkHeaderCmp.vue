<template>
  <div class="header">
    <div @click="onClick($event, 'logo', '/')">
      <utils-svg-cmp name="logo" class="logo" />
    </div>
    <div class="right">
      <div class="signup" @click="onClick($event, 'signup', '/')">Join the beta app</div>
      <div class="blog blogHide" @click="onClick($event, 'blog', '/blog')">
        BLOG
      </div>
    </div>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp.vue'

export default {
  name: 'LinkHeaderCmp',
  components: { UtilsSvgCmp },
  methods: {
    onClick(clickEvent, name, path) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      this.$plausible.trackEvent('header', {
        props: { selected: name },
      })
      this.$router.push(path)
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

::v-deep .logo.svg
  fill: $tiki-blue

.right
  display: flex
  align-items: center

.blog
  font-family: $font-family-nunito-sans
  color: $tiki-blue
  text-decoration: none
  font-weight: 600
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center

.signup
  font-family: $font-family-nunito-sans
  color: $white
  text-decoration: none
  font-weight: 600
  background: $red

.blog:hover, .blog:visited, .blog:link, .blog:active, .signup:hover, .signup:visited, .signup:link, .signup:active
  text-decoration: none

.header
  display: flex
  align-items: center
  justify-content: space-between

@include for-phone
  ::v-deep .logo.svg
    height: 8vw

  .signup
    font-size: 5vw
    padding: 2vw 10vw
    border-radius: 2.5vw

  .blog
    font-size: 5vw
    margin-right: 4vw

  .blogHide
    display: none

@include for-tablet
  ::v-deep .logo.svg
    height: 2vw

  .signup
    font-size: 1vw
    padding: 0.5vw 1.75vw
    border-radius: 0.6vw

  .blog
    font-size: 1vw
    margin-left: 2vw
</style>
