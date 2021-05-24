<template>
  <ul class="noBullets">
    <li v-for="blog of blogs" :key="blog.slug">
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
        class="link"
      >
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
        <p class="subtitle">{{ blog.description }}</p>
        <img :src="blog.img" :alt="blog.alt" class="image" />
        <div class="divider" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BlogListCmp',
  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.noBullets
  list-style-type: none
  padding: 0
  margin: 0

.link
  text-decoration: none
  font-family: $font-family-nunito-sans

.title
  color: $purple
  font-weight: bold

.subtitle
  color: $gray-dark

.byline
  color: $purple

.divider
  background-color: $yellow

@include for-phone
  .image
    width: 100%
    margin: 4vw 0 0 0

  .title
    font-size: 10vw
    margin: 0 4vw

  .subtitle
    margin: 2vw 4vw 0 4vw
    font-size: 6vw

  .byline
    font-size: 5vw
    margin: 0 4vw

  .divider
    height: 1px
    width: 100%
    margin: 4vw 0

  .noBullets
    margin-top: 4vw

@include for-tablet
  .image
    width: 100%
    margin: 2vw 0 0 0

  .title
    font-size: 2.5vw
    margin: 0

  .subtitle
    margin: 1vw 0 0 0
    font-size: 1.5vw

  .byline
    font-size: 1.25vw
    margin: 0

  .divider
    height: 2px
    width: 100%
    margin: 2vw 0

  .noBullets
    margin-top: 2vw
</style>
