<!--
  - Copyright (c) TIKI Inc.
  - MIT license. See LICENSE file in root directory.
  -->

<template>
  <div>
    <div ref="itemWrapper" class="itemWrapper">
      <div class="title">
        <div class="titleText">{{ title }}</div>
        <div v-if="!isOpen" class="titleBtn" @click="onClick">+</div>
        <div v-if="isOpen" class="titleBtn" @click="onClick">-</div>
      </div>
      <div class="body" v-html="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqItemCmp',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      title: 'Loading',
      body: '',
      isOpen: false,
    }
  },
  async mounted() {
    const rsp = await this.$axios.$get(
      'https://help.mytiki.com/api/v2/help_center/en-us/articles/' + this.id
    )
    if (rsp.article != null) {
      this.title = rsp.article.title
      this.body = rsp.article.body
    }
  },
  methods: {
    onClick(clickEvent) {
      clickEvent.preventDefault()
      clickEvent.stopPropagation()
      if (this.isOpen) {
        this.isOpen = false
        this.$refs.itemWrapper.style.height = '3em'
      } else {
        this.isOpen = true
        this.$refs.itemWrapper.style.height = 'auto'
      }
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/theme"
@import "assets/styles/mixins"

.title
  display: flex
  align-items: center
  justify-content: space-between

.itemWrapper
  height: 3em
  overflow: hidden
  border: solid 1px $purple
  border-radius: 25px
  width: fit-content
  padding: 0 15px

.titleBtn
  width: fit-content
  font-weight: 100
  font-size: 2em
  padding: 0 3px 0 10px
  color: $purple

.titleText
  overflow: clip
  text-overflow: ellipsis
  height: 1.2em
  white-space: nowrap
  font-size: .95em
  font-weight: bold

.body
  font-size: .95em

@include for-tablet
  .titleText
    width: 500px

  .body
    width: 500px

@include for-phone
  .titleText
    width: 75vw

  .body
    width: 75vw
</style>
