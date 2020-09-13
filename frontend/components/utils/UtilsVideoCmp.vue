<template>
  <div class="utilsVideoCmpCnt">
    <iframe
      width="560"
      height="315"
      :src="'https://www.youtube.com/embed/' + id"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="utilsVideoCmpIframe"
    />
  </div>
</template>

<script>
export default {
  name: 'UtilsVideoCmp',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import "../../assets/styles/mixins"

.utilsVideoCmpCnt
  overflow: hidden
  padding-bottom: 56.25%
  position: relative
  height: 0

.utilsVideoCmpCnt .utilsVideoCmpIframe
  left: 0
  top: 0
  height: 100%
  width: 100%
  position: absolute
  border: none
  clip-path: inset(1px 1px)
</style>
