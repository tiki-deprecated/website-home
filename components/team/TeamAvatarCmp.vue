<template>
  <div class="teamAvatarCmpCnt">
    <img :src="src" :alt="name" class="teamAvatarCmpImg" />
  </div>
</template>

<script>
export default {
  name: 'TeamAvatarCmp',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      return require('~/assets/images/team/' + this.name)
    },
  },
}
</script>

<style scoped lang="sass">
.teamAvatarCmpImg
  border-radius: 50%
  max-width: 100%
  max-height: 100%
  display: block
</style>
