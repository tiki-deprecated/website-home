<template>
  <div class="cardVideoCmpCnt">
    <iframe
      width="560"
      height="315"
      :src="'https://www.youtube.com/embed/' + id"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="cardVideoCmpIframe"
    />
  </div>
</template>

<script>
export default {
  name: 'CardVideoCmp',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.cardVideoCmpCnt
  overflow: hidden
  padding-bottom: 56.25%
  position: relative
  height: 0

.cardVideoCmpCnt .cardVideoCmpIframe
  left: 0
  top: 0
  height: 100%
  width: 100%
  position: absolute
  border: none
</style>
