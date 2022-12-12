<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <a :href="href" class="catalogWideWrapper">
    <div class="imgWrapper">
      <img :src="src" class="img" alt="" />
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
  name: 'CatalogSubstackCmp',
  props: {
    color: {
      type: String,
      required: false,
      default: theme.greenDark,
    },
    exOverride: {
      type: String,
      required: false,
      default: '',
    },
    href: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      title: '',
      subtitle: '',
      src: '',
      extra: '',
    }
  },
  async mounted() {
    const html = document.createElement('html')
    html.innerHTML = await this.$axios.$get(this.href)
    this.title = html.getElementsByTagName('title')[0].innerHTML
    if (this.exOverride === '') {
      this.extra = html
        .getElementsByClassName('publish-context')[0]
        .getElementsByTagName('time')[0].innerHTML
    } else {
      this.extra = this.exOverride
    }
    const meta = html.getElementsByTagName('meta')
    for (let i = 0; i < meta.length; i++) {
      if (meta[i].getAttribute('name') === 'description') {
        this.subtitle = meta[i].getAttribute('content')
      } else if (meta[i].getAttribute('property') === 'og:image') {
        this.src = meta[i].getAttribute('content')
      }
    }
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
    margin-top: 10px

  .extra
    width: 275px
    margin-top: 20px

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
    height: 3em
    overflow: hidden
    text-overflow: ellipsis

  .extra
    width: 275px
    margin-top: 20px
</style>
