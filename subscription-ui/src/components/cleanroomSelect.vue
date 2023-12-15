<script setup lang="ts">
import { ref, watch } from 'vue'
const selectedTable = ref<string>()
const emit = defineEmits(['update', 'close'])
watch(
  () => selectedTable.value,
  (newValue) => {
    emit('update', newValue)
  }
)

const isShowMenu = ref<boolean>(false);

const cleanroom = ref();

const clearoomList = [
  {
    cleanroom_name: 'starbucks1',
    id: 'masidajsdu10932x'
  },
  {
    cleanroom_name: 'starbucks2',
    id: '54fmasidajsdu10932x'
  },
  {
    cleanroom_name: 'starbucks3',
    id: 'g68masidajsdu10932x'
  },
  {
    cleanroom_name: 'starbucks4',
    id: 'x312masidajsdu10932x'
  },
]

const selectCleanroom = (selectedCleanroom: object)=>{
  cleanroom.value = selectedCleanroom
  isShowMenu.value = false
}
</script>

<template>
  <div class="flex justify-between mr-4 mt-2 relative">
    <div class="w-full">
      <button
        type="button"
        class="inline-flex w-5/6 justify-between border border-solid border-light-gray rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-md hover:border-black"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="isShowMenu = !isShowMenu"
      >
      {{cleanroom ? cleanroom.cleanroom_name : 'Select a Cleanroom'}}
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      class="absolute mt-10 w-5/6 rounded-md bg-white shadow-md"
      role="menu"
      tabindex="-1"
      v-if="isShowMenu"
    >
      <ul class="py-1" role="none">
        <li
          href="#"
          class="flex gap-x-2 px-4 py-2 text-sm cursor-pointer hover:border rounded-md"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
          v-for="cleanroom in clearoomList"
          :key="cleanroom.id"
          @click="selectCleanroom(cleanroom)"
        >
          <span class="border border-solid border-dark-gray/10 bg-dark-gray/10   px-2 rounded-md">{{ cleanroom.cleanroom_name }} </span>
          {{ cleanroom.id }}
        </li>
      </ul>
    </div>
    <button
      class="border border-light-gray border-solid rounded-lg shadow-md p-1"
      @click="$emit('close')"
    >
      <img src="../assets/images/collapse_icon.svg" alt="" />
    </button>
  </div>
</template>
