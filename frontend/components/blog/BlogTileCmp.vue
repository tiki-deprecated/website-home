<template>
  <div class="tile" :style="'background-color: ' + color">
    <NuxtLink
      :to="{
        name: 'blog-category-slug',
        params: { slug: category },
      }"
      class="link"
    >
      <utils-svg-cmp :name="icon" class="icon" />
      <h2 class="name">{{ name }}</h2>
    </NuxtLink>
  </div>
</template>

<script>
import UtilsSvgCmp from '../utils/UtilsSvgCmp'
export default {
  name: 'BlogCardCmp',
  components: { UtilsSvgCmp },
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    color: {
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

.name
  text-align: center
  color: $blue-dark

::v-deep .icon.svg
  fill: $blue-dark

@include for-phone
  .tile
    width: 42vw
    border-radius: 4vw

  .name
    font-size: 5vw
    margin-top: 2vw

  ::v-deep .icon.svg
    height: 12vw
    margin: 6vw auto 2vw auto

@include for-tablet
  .tile
    width: 11vw
    border-radius: 1vw

  .name
    font-size: 1.25vw
    margin-top: 1vw

  ::v-deep .icon.svg
    height: 4vw
    margin: 2vw auto 1vw auto
</style>
