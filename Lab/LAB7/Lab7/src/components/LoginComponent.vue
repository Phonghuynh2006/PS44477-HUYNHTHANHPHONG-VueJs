<template>
  <form @submit.prevent="login">
    <input v-model="username" placeholder="Tên đăng nhập" />
    <button>Đăng nhập</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['login'])

const username = ref('')

const login = () => {
  emit('login', username.value)
}
</script>
