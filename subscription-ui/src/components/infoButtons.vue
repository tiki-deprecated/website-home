<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(["cost", "stats", "sample"])
const infoState = ref<string>()

const handleState = (state: "cost" | "stats" | "sample") =>{
    infoState.value = state
    emit(state)
}

</script>

<template>
    <div class="mt-10 flex">
        <button
          class="text-lg px-5"
          :class="infoState === 'cost' ? 'bg-green text-white' : 'border bg-light-gray'"
          @click="handleState('cost')"
        >
          Cost
        </button>
        <button
          class="text-lg px-5"
          :class="infoState === 'stats' ? 'bg-green text-white' : 'border bg-light-gray'"
          @click="handleState('stats')"
        >
          Stats
        </button>
        <button
          class="text-lg px-5"
          :class="infoState === 'sample' ? 'bg-green text-white' : 'border bg-light-gray'"
          @click="handleState('sample')"
        >
          Sample
        </button>
      </div>
</template>