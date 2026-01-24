<template>
  <h1>26 - HUYNH THANH PHONG</h1>
  <h2>Nhập năm sinh</h2>
  <input type="number" max="2026" v-model="namSinh" placeholder="Nhập năm sinh" />
  <button @click="tinhTuoi">Xem tuổi</button>
  <div v-if="tuoi !== null">
    <p>Năm sinh: {{ namSinh }}</p>
    <p>Tuổi: {{ tuoi }}</p>
    <p>Nhóm tuổi: {{ nhomTuoi }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const namSinh = ref('')
const tuoi = ref(null)
const nhomTuoi = ref('')

function tinhTuoi() {
  const namHienTai = new Date().getFullYear()
  tuoi.value = namHienTai - namSinh.value

    if (!namSinh.value || namSinh.value > namHienTai) {
    tuoi.value = null
    nhomTuoi.value = ''
    return
  }
  
  if (tuoi.value <= 11) {
    nhomTuoi.value = 'Trẻ em'
  } else if (tuoi.value <= 17) {
    nhomTuoi.value = 'Thiếu niên'
  } else if (tuoi.value <= 35) {
    nhomTuoi.value = 'Thanh niên'
  } else if (tuoi.value <= 59) {
    nhomTuoi.value = 'Trung niên'
  } else {
    nhomTuoi.value = 'Lớn tuổi'
  }
}
</script>
