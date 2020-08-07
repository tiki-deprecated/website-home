<template>
  <div>
    <img
      v-if="src != null"
      :src="src"
      :srcset="srcSet"
      alt="hero image"
      class="hero"
    />
  </div>
</template>

<script>
export default {
  name: 'HeaderHeroCmp',
  props: {
    name: {
      type: String,
      required: false,
      default: null,
    },
    type: {
      type: String,
      required: false,
      default: 'png',
    },
    size1: {
      type: String,
      required: false,
      default: '320',
    },
    size2: {
      type: String,
      required: false,
      default: '640',
    },
    size3: {
      type: String,
      required: false,
      default: '828',
    },
    size4: {
      type: String,
      required: false,
      default: '1536',
    },
    size5: {
      type: String,
      required: false,
      default: '1920',
    },
  },
  computed: {
    srcSet() {
      try {
        return `
        ${require(`~/assets/images/${this.name}-${this.size1}.${this.type}`)}
        ${this.size1}w,
        ${require(`~/assets/images/${this.name}-${this.size2}.${this.type}`)}
        ${this.size2}w,
        ${require(`~/assets/images/${this.name}-${this.size3}.${this.type}`)}
        ${this.size3}w,
        ${require(`~/assets/images/${this.name}-${this.size4}.${this.type}`)}
        ${this.size4}w,
        ${require(`~/assets/images/${this.name}-${this.size5}.${this.type}`)}
        ${this.size5}w
        `
      } catch (e) {
        return null
      }
    },
    src() {
      try {
        return require('~/assets/images/' + this.name + '.' + this.type)
      } catch (e) {
        return null
      }
    },
  },
}
</script>

<style scoped lang="sass">
.hero
  width: 100%
  display: block
</style>
