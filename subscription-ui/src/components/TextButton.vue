<script setup lang="ts">

import {ButtonState} from '@/interfaces/ButtonState';
import type { PropType } from 'vue';

defineEmits(['submit']);

defineProps({
    state:{
        type: Object as PropType<ButtonState>,
        required: true
    },
    text:{
        type: String,
        required: true
    }
});

</script>

<template>
      <div class="w-full flex justify-end mt-4">
        <button
          class="mt-6 bg-green text-white w-40 px-2 py-3 text-lg rounded-lg"
          @click="$emit('submit')"
          :disabled="state === ButtonState.DISABLED"
          :class="state === ButtonState.DISABLED ? 'bg-green/50' : ''"
        >
          {{ text }}
        </button>
      </div>
</template>