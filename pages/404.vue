<template>
  <div class="errorCnt">
    <div class="errorCode">404</div>
    <div class="errorCheekyText">You Outsmarted Us!</div>
    <nuxt-link to="/" class="errorLink">
      <utils-svg-cmp class="errorHomeIcon" name="icon-hacky" />
      <div class="errorHomeText">Come Home</div>
    </nuxt-link>
  </div>
</template>

<script>
import UtilsSvgCmp from '~/components/utils/UtilsSvgCmp'

export default {
  name: '404',
  components: { UtilsSvgCmp },
}
</script>

<style scoped lang="sass">
.errorCode
  color: $text
  font-size: 4em
  text-align: center
  font-weight: bold
  letter-spacing: 0.2ch
  margin-top: 1.5em

.errorCheekyText, .errorHomeText
  color: $text-light
  font-size: large
  text-align: center
  letter-spacing: 0.2ch
  font-weight: normal
  text-transform: uppercase
  margin: 1em auto 0 auto

.errorCheekyText
  width: 20ch

.errorHomeIcon
  margin: 8em auto 0 auto
  width: 5em

.errorLink
  text-decoration: none
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  -webkit-tap-highlight-color: transparent

.errorLink:focus
  outline: none !important
</style>
