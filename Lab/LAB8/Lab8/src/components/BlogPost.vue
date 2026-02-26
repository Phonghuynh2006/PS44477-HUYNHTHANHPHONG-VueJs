<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    <h2>Blog Post ID: {{ route.params.id }}</h2>
  </div>
</template>