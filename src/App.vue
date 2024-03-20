<template>
    <div id="app">
      <h2>This is a Vue 3 starter project</h2>
      <router-view></router-view>
    </div>
</template>

<script lang="ts">
  export default 
  {
    name: "App",
  }
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
</style>
