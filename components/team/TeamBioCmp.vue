<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div style="cursor: pointer" @click="onClick">
    <img class="bioImg" :sizes="sizes" :srcset="srcset" :src="src" alt="" />
    <div class="bioName">{{ name }}</div>
    <div class="bioRole">{{ role }}</div>
  </div>
</template>

<script>
export default {
  name: 'TeamCmp',
  props: {
    name: {
      type: String,
      required: true,
    },
    imgSizes: {
      type: Array,
      required: true,
    },
    imgName: {
      type: String,
      required: true,
    },
    imgType: {
      type: String,
      default: 'jpg',
    },
    role: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    srcset() {
      const len = this.imgSizes.length
      let srcSet
      for (let i = 0; i < len; i++) {
        if (srcSet !== undefined) srcSet += ','
        srcSet += `${require(`@/assets/images/${this.imgName}_w_${this.imgSizes[i]}.${this.imgType}`)} ${
          this.imgSizes[i]
        }w`
      }
      return srcSet
    },
    sizes() {
      const len = this.imgSizes.length
      return `(max-width: ${this.imgSizes[len - 1]}px) 100vw, ${
        this.imgSizes[len - 1]
      }px`
    },
    src() {
      const len = this.imgSizes.length
      return `${require(`@/assets/images/${this.imgName}_w_${
        this.imgSizes[len - 1]
      }.${this.imgType}`)}`
    },
  },
  methods: {
    onClick() {
      this.$plausible.trackEvent('Outbound Link: Click', {
        props: { url: this.link },
      })
      window.location.href = this.link
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.bioName
  font-weight: bold
  font-size: .95em
  text-align: center

.bioRole
  font-size: .95em
  text-align: center

@include for-tablet
  .bioImg
    height: 150px
    border-radius: 150px

  .bioName
    margin-top: 20px
    max-width: 150px

  .bioRole
    margin-top: 5px
    max-width: 150px

@include for-phone
  .bioImg
    width: 100%
    border-radius: 100%

  .bioName
    margin-top: 20px

  .bioRole
    margin-top: 5px
</style>
