<template>
  <div class="background">
    <a :href="deeplink" class="continue">
      <div>CONTINUE</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Deeplink',
  data() {
    return {
      deeplink: '',
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search)
    this.deeplink = 'tiki://' + urlParams.get('redirect')
    window.open(this.deeplink, '_self')
  },
}
</script>

<style scoped lang="sass">
.background
  width: 100vw
  height: 100vh
  background-color: $yellow-light

.continue
  cursor: pointer
  background-color: #00133F
  padding: 1.25em 3em
  width: 6em
  height: 1em
  font-family: "Nunito Sans", Arial, sans-serif
  color: #FFFFFF
  font-weight: bold
  font-size: x-large
  display: block
  margin: auto
  text-align: center
  border-radius: 20em
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  text-decoration: none
</style>
