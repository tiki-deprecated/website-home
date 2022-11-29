<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <a :href="href" class="catalogWideWrapper">
    <div class="imgWrapper">
      <img
        :sizes="sizes"
        :srcset="srcset"
        :src="src"
        :alt="imgAlt"
        class="img"
      />
    </div>
    <div class="title" :style="'color:' + color">{{ title }}</div>
    <div class="subtitle" :style="'color:' + color">
      {{ subtitle }}
    </div>
    <div class="extra">{{ extra }}</div>
  </a>
</template>

<script>
import theme from 'assets/styles/_export.scss'

export default {
  name: 'CatalogWideCmp',
  props: {
    imgName: {
      type: String,
      required: true,
    },
    imgSizes: {
      type: Array,
      required: true,
    },
    imgAlt: {
      type: String,
      required: false,
      default: '',
    },
    imgType: {
      type: String,
      required: false,
      default: 'png',
    },
    title: {
      type: String,
      required: false,
      default: 'Title',
    },
    subtitle: {
      type: String,
      required: false,
      default: 'Subtitle',
    },
    color: {
      type: String,
      required: false,
      default: theme.greenDark,
    },
    extra: {
      type: String,
      required: false,
      default: '',
    },
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    srcset() {
      const len = this.imgSizes.length
      let srcSet = ''
      for (let i = 0; i < len; i++) {
        if (srcSet !== '') srcSet += ','
        srcSet += `${require(`@/assets/images/${this.imgType}/${this.imgName}_w_${this.imgSizes[i]}.${this.imgType}`)} ${
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
      return `${require(`@/assets/images/${this.imgType}/${this.imgName}_w_${
        this.imgSizes[len - 1]
      }.${this.imgType}`)}`
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.catalogWideWrapper
  text-decoration: none

.imgWrapper
  position: relative
  display: block

.img
  width: 100%
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.title
  font-weight: bold

.subtitle
  font-size: .95em

.extra
  color: $gray-dark
  font-size: .95em
  font-style: italic

@include for-phone
@include for-tablet
  .imgWrapper
    overflow: clip
    border-radius: 15px
    width: 275px
    height: 146px

  .title
    width: 275px
    margin-top: 20px
    font-size: 1.2em

  .subtitle
    width: 275px
    margin-top: 5px

  .extra
    width: 275px
    margin-top: 20px
</style>
