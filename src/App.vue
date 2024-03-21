<template>
    <div id="app">
      <NavBar/>
      
      <strong>Current route path:</strong> {{ $route.fullPath }}
      <router-view></router-view>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from '@/components/NavBar.vue';
  
  export default defineComponent(
  {
    name: "App",
    components: {
      NavBar
    }
  })
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>./components/NavBar.vue
