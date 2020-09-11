<template>
  <div class="utilsAvatarCmpCnt">
    <img :src="src" :alt="name" class="utilsAvatarCmpImg" />
  </div>
</template>

<script>
export default {
  name: 'UtilsAvatarCmp',
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
.utilsAvatarCmpImg
  border-radius: 50%
  max-width: 100%
  max-height: 100%
  display: block
</style>
