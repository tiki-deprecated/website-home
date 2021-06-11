<template>
  <div class="card">
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
      class="link"
    >
      <div class="imageContainer">
        <img :src="image" :alt="blog.alt" class="image" />
      </div>
      <h2 class="title">{{ blog.title }}</h2>
      <p class="byline">
        <span class="author">{{ blog.author }}</span>
        <span class="date"
          >&nbsp;•&nbsp;
          {{
            new Date(blog.updatedAt).toLocaleDateString(undefined, {
              month: 'long',
              day: 'numeric',
            })
          }}</span
        >
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
  computed: {
    image() {
      return this.blog.img != null
        ? this.blog.img
        : '/blog-images/card-default.jpg'
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
  color: $blue-dark
  font-weight: bold

.byline
  font-weight: bold

.author
  color: $yellow

.date
  color: $gray

.imageContainer
  overflow: hidden

@include for-phone
  .image
    width: 100%
    border-radius: 4vw

  .title
    font-size: 5vw
    margin: 3vw 0 0 0
    line-height: 5vw

  .byline
    font-size: 4vw
    margin: 1vw 0 0 0

  .imageContainer
    height: 20vh
    border-radius: 4vw

@include for-tablet
  .image
    width: 100%
    border-radius: 1vw

  .title
    font-size: 1.25vw
    margin: 0.5vw 0 0 0

  .byline
    font-size: 1vw
    margin: 0

  .imageContainer
    height: 20vh
    border-radius: 1vw
</style>
