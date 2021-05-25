<template>
  <ul class="noBullets">
    <li v-for="blog of blogs" :key="blog.slug">
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
        class="link"
      >
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
  color: $blue-dark
  font-weight: bold

.subtitle
  color: $gray-xdark
  font-weight: 600

.byline
  font-weight: bold

.author
  color: $yellow

.date
  color: $gray

.divider
  height: 1px
  width: 100%
  background-color: $yellow

@include for-phone
  .image
    width: 100%
    margin: 4vw 0 0 0

  .title
    font-size: 7vw
    margin: 0 4vw

  .subtitle
    margin: 0 4vw
    font-size: 4.75vw

  .byline
    font-size: 4.5vw
    margin: 1vw 4vw

  .divider
    margin: 4vw 0

  .noBullets
    margin-top: 4vw

@include for-tablet
  .image
    width: 100%
    margin: 1vw 0 0 0

  .title
    font-size: 2.25vw
    margin: 0

  .subtitle
    margin: 0.75vw 0 0 0
    font-size: 1.25vw

  .byline
    font-size: 1vw
    margin: 0

  .divider
    margin: 2vw 0

  .noBullets
    margin-top: 2vw
</style>
