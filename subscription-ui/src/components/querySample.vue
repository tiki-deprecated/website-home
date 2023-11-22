<script setup lang="ts">
const sampleData = [
    {
        Song: "Foo",
        Artirts: "Bar",
        Year: "2006"
    },
    {
        song: "Foo",
        Artirts: "Bar",
        Year: "2006"
    },
    {
        song: "Foo",
        Artirts: "Bar",
        Year: "2006"
    },
    {
        song: "Foo",
        Artirts: "Bar",
        Year: "2008"
    },
    {
        song: "Foo",
        Artirts: "Bar",
        Year: "2008"
    },
    {
        song: "Flashing Lights",
        Artirts: "Kanye West",
        Year: "2008"
    }
]


</script>

<template>
  <table class="table-fixed">
    <thead>
        <tr>
            <th class="bg-green text-white border border-black border-solid" v-for="(value, key) in sampleData[0]" :key="key">{{key}}</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in sampleData" :key="item.song" class="border">
          <td v-for="(value, key) in item" :key="key" class="border px-10 py-2 text-center">{{ value }}</td>
        </tr>
    </tbody>
  </table>
</template>
