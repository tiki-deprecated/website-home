<template>
  <div v-if="mantra != null" class="teamMantraText">
    <b class="teamMantraLabel">Daily Mantra:</b>
    {{ mantra }}
  </div>
</template>

<script>
export default {
  name: 'TeamMantraCmp',
  props: {
    mantra: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.teamMantraText
  color: $text-light
  font-size: small
  font-weight: normal
  letter-spacing: 0.2ch
  margin-top: 1em

.teamMantraLabel
  font-weight: bold
</style>
