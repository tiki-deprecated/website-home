<template>
  <div class="tile">
    <NuxtLink
      :to="{
        name: 'blog-category-slug',
        params: { slug: category },
      }"
      class="link"
    >
      <div class="imageContainer">
        <img :src="image" alt="icon" class="image" />
      </div>
      <h2 class="name">{{ name }}</h2>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'BlogCardCmp',
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.link
  text-decoration: none
  font-family: $font-family-nunito-sans

.imageContainer
  overflow: hidden
  position: relative
  width: 100%

.image
  height: 100%
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.name
  text-align: center
  color: $purple

@include for-phone
  .tile
    width: 20vh

  .imageContainer
    border-radius: 4vw
    height: 20vh

  .name
    font-size: 5vw
    margin-top: 2vw

@include for-tablet
  .tile
    width: 20vh

  .imageContainer
    border-radius: 1vw
    height: 20vh

  .name
    font-size: 1.5vw
    margin-top: 1vw
</style>
