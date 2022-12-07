<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-sm text-red-700 font-bold">Hello World</h1>
    <button class="px-5 py-2 bg-cyan-600 text-white rounded outline-none mr-3" @click="count++">Count</button>
    <span class="font-bold text-2xl">{{count}}</span>
  </div>
</template>

<style scoped>
</style>
