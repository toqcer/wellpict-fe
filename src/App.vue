<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Header } from './components'

export default defineComponent({
  name: "App",
  components: {Header},
  setup(){
    const count = ref(0)
    
    return { count }
  }
})
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</template>


<style scoped>
.card {
  background: red
}
</style>
