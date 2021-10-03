<template>
  <div>
    <div class="imgWrapper">
      <img :src="src" alt="TIKI" class="img" />
    </div>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'LinkTitleCmp',
  props: {
    image: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    src() {
      return require('~/assets/images/png/link/' + this.image)
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.imgWrapper
  margin: 0 auto
  width: fit-content

.img
  height: 100%
  border: 1px solid $white
  box-shadow: 1px 1px 15px 5px rgb(0, 0, 0, 0.1)

.subtitle
  font-family: $font-family-nunito-sans
  color: $blue-dark
  font-weight: 600
  text-align: center
  //text-shadow: 1px 1px 15px rgb(0, 0, 0, 0.15)

@include for-phone
  .img
    border-radius: 30vw
    width: 30vw

  .subtitle
    font-size: 4.5vw
    margin: 4vw auto 0 auto
    max-width: 75%

@include for-tablet
  .img
    border-radius: 7vw
    width: 7vw

  .subtitle
    font-size: 1.2vw
    margin: 1vw auto 0 auto
    max-width: 30%
</style>
