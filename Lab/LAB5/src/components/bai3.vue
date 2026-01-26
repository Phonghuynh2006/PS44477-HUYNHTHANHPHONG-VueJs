<template>
  <div class="col-sm-8">
    <h1>Thông tin cá nhân</h1>

    <form>
      <div class="mb-3">
        <label>Họ và Tên:</label>
        <input v-model="thongtin.hoten" type="text" class="form-control" placeholder="Nhập họ và tên" />
      </div>

      <div class="mb-3">
        <label>Tuổi:</label>
        <input v-model="thongtin.tuoi" type="number" class="form-control" placeholder="Nhập tuổi" />
      </div>

      <div class="mb-3">
        <label>Email:</label>
        <input v-model="thongtin.email" type="email" class="form-control" placeholder="Nhập email" />
      </div>
    </form>

    <div class="info-display mt-4 p-3 bg-primary text-white rounded">
      <h2>Thông tin đã nhập:</h2>
      <p><strong>Họ và Tên:</strong> {{ thongtin.hoten }}</p>
      <p><strong>Tuổi:</strong> {{ thongtin.tuoi }}</p>
      <p><strong>Email:</strong> {{ thongtin.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const thongtin = reactive({
  hoten: '',
  tuoi: null,
  email: ''
})
</script>




























































<!-- _____  _    _  ____  _   _  _____ _    _ _    ___     ___   _ _    _ 
 |  __ \| |  | |/ __ \| \ | |/ ____| |  | | |  | \ \   / / \ | | |  | |
 | |__) | |__| | |  | |  \| | |  __| |__| | |  | |\ \_/ /|  \| | |__| |
 |  ___/|  __  | |  | | . ` | | |_ |  __  | |  | | \   / | . ` |  __  |
 | |    | |  | | |__| | |\  | |__| | |  | | |__| |  | |  | |\  | |  | |
 |_|    |_|  |_|\____/|_| \_|\_____|_|  |_|\____/   |_|  |_| \_|_|  |_|
                                                                        -->
                                                                       