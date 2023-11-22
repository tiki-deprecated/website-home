<script setup lang="ts">
import { ref } from 'vue'
import queryEditor from './components/queryEditor.vue'
import queryInfo from './components/queryInfo.vue';
const selectedTable = ref<string>()
</script>

<template>
  <div class="flex mt-5 mx-5">
    <h1 class="underline text-blue text-4xl self-center grow">Configure and Subscribe</h1>
    <img src="./assets/images/tiki-pineapple.svg" alt="" />
  </div>
  <div class="flex mt-5 mx-5">
    <div id="col-1" class="w-2/5">
      <div class="flex-col">
        <div class="">
          <select
            v-model="selectedTable"
            name="tables"
            id="tables"
            class="w-4/5 text-center py-1.5 bg-light-gray border border-solid border-dark-gray rounded-md"
          >
            <option value="">Select a Table</option>
            <option>Receipts</option>
            <option>Transactions</option>
          </select>
        </div>
        <div class="mt-10">
          <h2 class="text-blue text-3xl underline">{{ selectedTable }}</h2>
          <ul v-if="selectedTable">
            <li class="mt-2 w-2/5 flex justify-between text-blue">
              user_id <span class="text-yellow">string</span>
            </li>
            <li class="mt-2 w-2/5 flex justify-between">
              user_id <span class="text-yellow">string</span>
            </li>
            <li class="mt-2 w-2/5 flex justify-between">
              Transactions<span class="text-yellow">string</span>
            </li>
            <li class="mt-2 w-2/5 flex justify-between">
              user_id <span class="text-yellow">string</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="col-2" class="grow h-screen-1/2">
      <query-editor />
      <div class="mt-10 flex">
        <button class="text-lg px-5 bg-green text-white">Cost</button>
        <button class="text-lg px-5 bg-light-gray border">Stats</button>
        <button class="text-lg px-5 border bg-light-gray">Sample</button>
      </div>
      <div
        class="h-52 mt-3"
      >
       <query-info/>
      </div>
    </div>
  </div>
  <div class="flex justify-end mt-5 mx-5">
    <button type="submit" class="bg-green text-white py-3 rounded-md w-60">
      Agree & Subscribe
    </button>
  </div>
</template>

<style scoped></style>
