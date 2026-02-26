<template>
  <div class="container">
    
    <div class="row">
      
      <!-- Form Đăng Ký -->
      <div class="col-md-6">
        <h4>Form Đăng Ký</h4>

        <div class="mb-3">
          <label>Họ tên:</label>
          <input v-model="user.name" class="form-control" />
        </div>

        <div class="mb-3">
          <label>Email:</label>
          <input v-model="user.email" type="email" class="form-control" />
        </div>

        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input v-model="user.password" type="password" class="form-control" />
        </div>

        <div class="mb-3">
          <label>Ngày sinh:</label>
          <input v-model="user.birth" type="date" class="form-control" />
        </div>

        <div class="mb-3">
          <label>Giới tính:</label><br>
          <input type="radio" value="Nam" v-model="user.gender" /> Nam
          <input type="radio" value="Nữ" v-model="user.gender" /> Nữ
          <input type="radio" value="Khác" v-model="user.gender" /> Khác
        </div>

        <div class="mb-3">
          <label>Ngôn ngữ:</label><br>
          <input type="checkbox" value="Tiếng Việt" v-model="user.languages" /> Tiếng Việt
          <input type="checkbox" value="Tiếng Anh" v-model="user.languages" /> Tiếng Anh
          <input type="checkbox" value="Tiếng Nhật" v-model="user.languages" /> Tiếng Nhật
        </div>

        <button class="btn btn-primary" @click="register">Đăng ký</button>
      </div>

      <!-- Thông tin đã đăng ký -->
      <div class="col-md-6 border-start">
        <h4>Thông tin đã đăng ký:</h4>

        <div v-if="submitted">
          <p><strong>Họ tên:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Ngày sinh:</strong> {{ user.birth }}</p>
          <p><strong>Giới tính:</strong> {{ user.gender }}</p>
          <p><strong>Ngôn ngữ:</strong> {{ user.languages.join(', ') }}</p>
        </div>
      </div>

    </div>
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