<template>
  <div class="teamFactCmpCnt">
    <div v-if="cms.num != null" class="teamFactCmpNum">
      {{ cms.num }}
    </div>
    <div v-if="cms.fact != null" class="teamFactCmpFact">
      {{ cms.fact }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamFactCmp',
  props: {
    cms: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.teamFactCmpCnt
  display: flex
  align-items: center
  width: fit-content

.teamFactCmpNum
  color: $green-dark
  letter-spacing: 0.2ch
  font-size: x-large
  font-weight: bold
  margin-right: 0.75em
  width: 3ch
  text-align: center

.teamFactCmpFact
  color: $text-light
  letter-spacing: 0.2ch
  font-size: small
  text-align: left
  width: 95%
</style>
