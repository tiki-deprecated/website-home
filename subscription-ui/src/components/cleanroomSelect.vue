<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Subscription } from '../subscription/index'
import { type Cleanroom } from '../interfaces/Cleanroom'
import CollapseIcon from '../assets/images/collapse_icon.svg'

const subscription = new Subscription()

const token = sessionStorage.getItem('authToken')

let cleanrooms: Cleanroom[]

onMounted(async () => {
  cleanrooms = await subscription.getCleanrooms(token!)
})

const emit = defineEmits(['update', 'close'])

const isShowMenu = ref<boolean>(false)

const cleanroom = ref()

const selectCleanroom = (selectedCleanroom: Cleanroom) => {
  cleanroom.value = selectedCleanroom
  isShowMenu.value = false
  emit('update', selectedCleanroom.cleanroomId)
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
        {{ cleanroom ? cleanroom.description : 'Select a Cleanroom' }}
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
          v-for="cleanroom in cleanrooms"
          :key="cleanroom.cleanroomId"
          @click="selectCleanroom(cleanroom)"
        >
          <span
            class="flex items-center border border-solid border-dark-gray/10 bg-dark-gray/10 px-2 rounded-md"
            >{{ cleanroom.description }}
          </span>
          {{ cleanroom.cleanroomId }}
        </li>
      </ul>
    </div>
    <button
      class="border border-light-gray border-solid rounded-lg shadow-md p-1"
      @click="$emit('close')"
    >
      <CollapseIcon alt="Collapse panel" />
    </button>
  </div>
</template>
