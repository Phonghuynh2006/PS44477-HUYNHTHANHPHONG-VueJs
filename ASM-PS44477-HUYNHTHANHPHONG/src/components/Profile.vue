<template>
  <div class="container row mt-4">
    <!-- BÊN TRÁI -->
    <div class="col-6">
      <h2>Thông tin cá nhân</h2>

      <div class="mb-3">
        <label>Họ và tên</label>
        <input type="text" class="form-control" v-model="fullname">
      </div>

      <div class="mb-3">
        <label>Email</label>
        <input type="text" class="form-control" v-model="mail">
      </div>

      <div class="mb-3">
        <label>Link ảnh</label>
        <input type="text" class="form-control" v-model="img">
      </div>

      <button class="btn btn-primary" @click="updateUser">Cập nhật</button>

      <hr>

      <h2>Đổi mật khẩu</h2>

      <div class="mb-3">
        <label>Mật khẩu cũ</label>
        <input type="password" class="form-control" v-model="oldPassword">
      </div>

      <div class="mb-3">
        <label>Mật khẩu mới</label>
        <input type="password" class="form-control" v-model="newPassword">
      </div>

      <button class="btn btn-primary" @click="updatePassword">
        Đổi mật khẩu
      </button>
    </div>

    <!-- BÊN PHẢI -->
    <div class="col-6 d-flex align-items-center">
      <div class="card" style="width: 18rem;">
        <img :src="img" class="card-img-top" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import { useRouter } from 'vue-router'
const router = useRouter()

// Lấy danh sách bài viết
const user11 = ref([]); 
const fetchuser = async () => { 
    try { 
        const response = await axios.get('http://localhost:3000/user'); 
        user11.value = response.data; 
    } catch (error) { 
        console.error('Lỗi khi lấy dữ liệu:', error); 
    } 
}; 
 
onMounted(fetchuser); 


// user
const id = ref(null)
const fullname = ref('')
const mail = ref('')
const img = ref('')
const matkhau = ref('')


// mật khẩu
const oldPassword = ref('')
const newPassword = ref('')

// tham khảo
onMounted(() => {
  const savedUser = localStorage.getItem('user')

  if (!savedUser) {
    router.push('/login')
    return
  }

  const u = JSON.parse(savedUser)

  id.value = u.id
  fullname.value = u.fullname
  mail.value = u.mail
  img.value = u.img
  matkhau.value = u.matkhau
})


// Cập nhật thông tin
const updateUser = async () => {
  try {
    await axios.put(`http://localhost:3000/user/${id.value}`, {
      fullname: fullname.value,
      mail: mail.value,
      img: img.value,
      matkhau: matkhau.value
    })

    localStorage.setItem('user', JSON.stringify({
      id: userId.value,
      fullname: fullname.value,
      mail: mail.value,
      img: img.value,
      matkhau: matkhau.value
    }))

    alert('Cập nhật thông tin thành công!')
  } catch (error) {
    console.error('Lỗi khi cập nhật user:', error)
  }
}


// Cập nhật mật khẩu
const updatePassword = async () => {
  if (oldPassword.value !== matkhau.value) {
    alert('Mật khẩu cũ không đúng!')
    return
  }

  try {
    matkhau.value = newPassword.value

    await axios.put(`http://localhost:3000/user/${id.value}`, {
      fullname: fullname.value,
      mail: mail.value,
      img: img.value,
      matkhau: matkhau.value
    })

    localStorage.setItem('user', JSON.stringify({
      id: id.value,
      fullname: fullname.value,
      mail: mail.value,
      img: img.value,
      matkhau: matkhau.value
    }))

    alert('Đổi mật khẩu thành công!')
    oldPassword.value = ''
    newPassword.value = ''
  } catch (error) {
    console.error('Lỗi khi đổi mật khẩu:', error)
  }
}


</script>
