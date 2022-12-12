<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <a
      ref="catalogSqWrapper"
      :href="href"
      class="catalogSqWrapper"
      :style="'border-color:' + borderInactive"
      @mouseover="focusIn"
      @mouseleave="focusOut"
    >
      <div class="imgWrapper">
        <img
          :sizes="sizes"
          :srcset="srcset"
          :src="src"
          :alt="imgAlt"
          class="img"
        />
      </div>
    </a>
    <div class="title" :style="'color:' + color">{{ title }}</div>
  </div>
</template>

<script>
import theme from 'assets/styles/_export.scss'

export default {
  name: 'CatalogSqCmp',
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
    color: {
      type: String,
      required: false,
      default: theme.greenDark,
    },
    borderActive: {
      type: String,
      required: false,
      default: theme.green,
    },
    borderInactive: {
      type: String,
      required: false,
      default: theme.greenLight,
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
  methods: {
    focusIn(focusEvent) {
      focusEvent.preventDefault()
      this.$refs.catalogSqWrapper.style.borderColor = this.borderActive
    },
    focusOut(focusEvent) {
      focusEvent.preventDefault()
      this.$refs.catalogSqWrapper.style.borderColor = this.borderInactive
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.imgWrapper
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.img
  width: 100%
  height: auto
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.title
  font-weight: bold
  text-align: center

.catalogSqWrapper
  border-style: solid
  display: block
  position: relative

@include for-phone
  .catalogSqWrapper
    width: 146px
    height: 146px
    border-radius: 15px
    border-width: 3px

  .imgWrapper
    overflow: clip
    width: 100px
    height: 100px

  .title
    width: 146px
    margin-top: 15px
    font-size: 1.2em

@include for-tablet
  .catalogSqWrapper
    width: 146px
    height: 146px
    border-radius: 15px
    border-width: 3px

  .imgWrapper
    overflow: clip
    width: 100px
    height: 100px

  .title
    width: 146px
    margin-top: 15px
    font-size: 1.2em
</style>
