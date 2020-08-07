<template>
  <div class="cnt">
    <iframe
      :src="'https://www.youtube.com/embed/' + id"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="vid"
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

.vid
  border: 0
  width: 100%

@include for-tablet
  .vid
    width: 560px
    height: 315px
    display: block
    margin: 0 auto
</style>
