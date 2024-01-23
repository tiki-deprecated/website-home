<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Subscription } from '../subscription/index'
import { type Cleanroom } from '../interfaces/Cleanroom'

const subscription = new Subscription()

const token = sessionStorage.getItem('authToken')

const cleanrooms = ref<Cleanroom[]>()

subscription.getCleanrooms(token!).then((response) => {
  cleanrooms.value = response
})

const cleanroomSelected = ref()
</script>

<template>
  <select
    name="cleanroom"
    id="cleanroom"
    v-model="cleanroomSelected"
    class="text-tiki-gray/70"
    @change="$emit('changeCleanroom', cleanroomSelected)"
  >
    <option value="undefined" disabled>My cleanroom</option>
    <option
      :value="cleanroom.cleanroomId"
      v-for="cleanroom in cleanrooms"
      :key="cleanroom.cleanroomId"
    >
      {{ cleanroom.name }}
    </option>
  </select>
</template>

<style scoped>
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('@/assets/images/select-arrow.svg');
  background-repeat: no-repeat, repeat;
  background-position:
    right 0.7em top 50%,
    0 0;
  background-size:
    0.65em auto,
    100%;
}
</style>
