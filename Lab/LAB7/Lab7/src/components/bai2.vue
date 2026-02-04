<template>
  <div v-if="!isLoggedIn">
    <h3>Đăng nhập</h3>

    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" />
      <p v-if="emailError" style="color:red">{{ emailError }}</p>

      <input type="password" v-model="password" placeholder="Mật khẩu" />
      <p v-if="passwordError" style="color:red">{{ passwordError }}</p>

      <button>Đăng nhập</button>
    </form>
  </div>

  <div v-else>
    <h3>Chào mừng {{ email }}</h3>
    <button @click="logout">Đăng xuất</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

const login = () => {
  emailError.value = ''
  passwordError.value = ''

  if (!email.value) emailError.value = 'Email không được trống'
  if (!password.value) passwordError.value = 'Mật khẩu không được trống'

  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true
  }
}

const logout = () => {
  isLoggedIn.value = false
  email.value = ''
  password.value = ''
}
</script>
