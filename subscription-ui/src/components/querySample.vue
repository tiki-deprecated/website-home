<script setup lang="ts">
import { type PropType } from 'vue';

defineProps({
  sample: {
    type: Array as PropType<any[]>, 
    required: false,
  }
})


</script>

<template>
  <div class="overflow-scroll w-[60rem] h-[60rem]">
  <table class="table-auto h-full" v-if="sample">
    <thead>
        <tr>
            <th class="bg-green text-white border border-black border-solid px-10 py-2" v-for="(value, key) in sample![0]" :key="key">{{key}}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in sample" :key="item.song" class="border">
          <td v-for="(value, key) in item" :key="key" class="border px-10 py-2 text-center">{{ value }}</td>
        </tr>
    </tbody>
  </table>
</div>

</template>
