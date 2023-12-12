<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as monaco from "monaco-editor"
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    return new editorWorker()
  }
}

const editor = ref()

const emits = defineEmits(['update'])

const props = defineProps({
  table: {
    type: String,
    required: false
  }
})

let editorMonaco: monaco.editor.IStandaloneCodeEditor

onMounted(() => {
  editorMonaco = monaco.editor.create(editor.value, {
    value: `SELECT * FROM ${props.table ? props.table : 'TABLE'}`,
    language: 'mysql',
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: {
      enabled: false
    }
  })
})

const submitQuery = () => {
  let query = editorMonaco.getValue()
  
  if (query.endsWith(';')) {
    query = query.slice(0, -1)
  }
  console.log(query)

  // fetch using this value
  const exampleJson = {
    costs: '$3,000 - $4,000/month',
    stats: ['700k Users', '1,5M Records', '2 Publishers'],
    sample: [
      {
        userid: 'usr123',
        receiptID: 'rec456',
        receipt_date: '2023-11-28',
        merchant_name: 'Store ABC',
        merchant_address: '123 Main St',
        merchant_city: 'Exampleville',
        merchant_state: 'XY',
        merchant_zip: '12345',
        channel: 'Online',
        amount: 55.67,
        brand: 'Brand XYZ',
        product_name: 'Product One',
        product_description: 'Description for Product One',
        quantity: 2,
        unit_price: 25.99,
        total_price: 51.98,
        category_level1: 'Category A',
        category_level2: 'Subcategory 1',
        category_level3: 'Subcategory 2',
        size: 'Medium',
        upc: '123456789012'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      },
      {
        userid: 'usr456',
        receiptID: 'rec789',
        receipt_date: '2023-11-27',
        merchant_name: 'Shop XYZ',
        merchant_address: '456 Oak St',
        merchant_city: 'New Town',
        merchant_state: 'AB',
        merchant_zip: '54321',
        channel: 'In-store',
        amount: 79.99,
        brand: 'Brand ABC',
        product_name: 'Product Two',
        product_description: 'Description for Product Two',
        quantity: 1,
        unit_price: 79.99,
        total_price: 79.99,
        category_level1: 'Category B',
        category_level2: 'Subcategory 3',
        category_level3: 'Subcategory 4',
        size: 'Large',
        upc: '987654321098'
      }
    ]
  }
  emits('update', exampleJson)
}

watch(
  () => props.table,
  (newValue) => {
    editorMonaco.setValue(`SELECT * FROM ${newValue?.toUpperCase()}`)
  }
)
</script>

<template>
  <div id="editor" ref="editor" class="h-60"></div>
  <button class="border py-3 bg-green rounded-md w-60 text-white mt-5" @click="submitQuery">
    Estimate Cost
  </button>
</template>

<style></style>
