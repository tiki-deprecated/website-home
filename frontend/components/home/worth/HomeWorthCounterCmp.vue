<template>
  <div>
    <div class="value">$ {{ total }}</div>
    <div class="text">money made this year <b>from our data</b></div>
  </div>
</template>

<script>
export default {
  name: 'HomeWorthCounterCmp',
  data() {
    return {
      total: '...',
    }
  },
  mounted() {
    this.update()
  },
  beforeDestroy() {
    window.clearTimeout(this.$options.timer)
  },
  methods: {
    update() {
      const freq = 100
      const dpms = 12.113140537798072
      const now = new Date(Date.now())
      const start = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0)
      const raw = Math.round((now.getTime() - start.getTime()) * dpms)
      this.total = raw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      this.$options.timer = window.setTimeout(this.update, freq)
    },
  },
}
</script>

<style scoped lang="sass">
@import "assets/styles/mixins"

.value
  font-family: $font-family-koara
  color: $yellow
  text-align: center
  font-weight: 300

.text
  font-family: $font-family-nunito
  color: $yellow
  text-align: center
  font-weight: 300

@include for-phone
  .value
    font-size: 12vw

  .text
    font-size: 4vw

@include for-tablet
  .value
    font-size: 3.25vw

  .text
    font-size: 1vw
</style>
