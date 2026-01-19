<script setup>
import AppHeader from './components/header.vue'
import AppFooter from './components/footer.vue'
</script>

<template>
  <AppHeader />
  <div class="container">
    <router-view />
  </div>
  <AppFooter />
</template>

<style scoped>

</style>
