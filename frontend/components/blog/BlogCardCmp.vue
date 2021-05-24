<template>
  <div class="card">
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
      class="link"
    >
      <div class="imageContainer">
        <img :src="blog.img" :alt="blog.alt" class="image" />
      </div>
      <h2 class="title">{{ blog.title }}</h2>
      <p class="byline">
        {{ blog.author }} -
        {{
          new Date(blog.updatedAt).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'BlogCardCmp',
  props: {
    blog: {
      type: Object,
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

.title
  color: $purple
  font-weight: bold

.byline
  color: $purple

.imageContainer
  overflow: hidden

@include for-phone
  .image
    width: 100%

  .title
    font-size: 5vw
    margin: 3vw 0 0 0
    line-height: 5vw

  .byline
    font-size: 4vw
    margin: 1vw 0 0 0

  .imageContainer
    border-radius: 4vw
    height: 20vh

@include for-tablet
  .image
    width: 100%

  .title
    font-size: 1.5vw
    margin: 0

  .byline
    font-size: 1.25vw
    margin: 0

  .imageContainer
    border-radius: 1vw
    height: 20vh
</style>
