<template>
  <h3>Đăng ký</h3>

  <input v-model="user.name" placeholder="Họ tên" />
  <input v-model="user.email" placeholder="Email" />
  <input type="password" v-model="user.password" placeholder="Mật khẩu" />
  <input type="date" v-model="user.birth" />

  <select v-model="user.gender">
    <option>Nam</option>
    <option>Nữ</option>
  </select>

  <label>
    <input type="checkbox" v-model="user.languages" value="JavaScript" /> JS
  </label>
  <label>
    <input type="checkbox" v-model="user.languages" value="Vue" /> Vue
  </label>

  <button @click="register">Đăng ký</button>

  <div v-if="submitted">
    <h4>Thông tin đăng ký</h4>
    <p>Họ tên: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Ngày sinh: {{ user.birth }}</p>
    <p>Giới tính: {{ user.gender }}</p>
    <p>Ngôn ngữ: {{ user.languages.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)

const user = ref({
  name: '',
  email: '',
  password: '',
  birth: '',
  gender: 'Nam',
  languages: []
})

const register = () => {
  submitted.value = true
}
</script>
