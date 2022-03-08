<template>
  <div class="hero">
    <div class="imgContainer">
      <img :sizes="sizes" :srcset="srcset" :src="src" alt="" class="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCmp',
  data() {
    return {
      imgSizes: [1400],
      imgName: 'hero-1',
    }
  },
  computed: {
    srcset() {
      let srcSet
      const len = this.imgSizes.length
      for (let i = 0; i < len; i++) {
        if (srcSet !== undefined) srcSet += ','
        srcSet += `${require(`@/assets/images/png/${this.imgName}_w_${this.imgSizes[i]}.png`)} ${
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
      return `${require(`@/assets/images/png/${this.imgName}_w_${
        this.imgSizes[len - 1]
      }.png`)}`
    },
  },
  mounted() {
    if (Math.round(Math.random()) === 0) {
      this.imgSizes = [
        200, 381, 518, 617, 704, 780, 848, 916, 981, 1033, 1085, 1143, 1209,
        1233, 1318, 1373, 1396, 1400,
      ]
      this.imgName = 'hero-1'
    } else {
      this.imgSizes = [
        200, 348, 457, 550, 638, 715, 789, 852, 909, 966, 1022, 1073, 1124,
        1177, 1223, 1278, 1321, 1343, 1393, 1400,
      ]
      this.imgName = 'hero-2'
    }
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

@include for-phone
  .hero
    position: relative
    width: 100%
    height: 100vh

  .imgContainer
    position: absolute
    height: 100vh
    top: 0
    left: 0
    overflow: hidden
    width: 100%

  .img
    height: 100%
    position: absolute
    top: 0
    left: 50%
    transform: translateX(-50%)

@include for-tablet
</style>
