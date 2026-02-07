<template>
  <div class="container">

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#dangnhap">
          Đăng Nhập
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#dangky">
          Đăng Ký
        </button>
      </li>
    </ul>

    <div class="tab-content mt-3">

      <!-- ===== ĐĂNG NHẬP ===== -->
      <div class="tab-pane fade show active" id="dangnhap">
        <h3 class="text-center">Đăng Nhập</h3>
        <form>
          <div class="mb-3">
            <label>Email</label>
            <input type="email" class="form-control" v-model="loginEmail">
          </div>
          <div class="mb-3">
            <label>Mật khẩu</label>
            <input type="password" class="form-control" v-model="loginPassword">
          </div>
          <p class="text-danger" v-if="loginError">{{ loginError }}</p>
          <button @click="login" class="btn btn-primary">Đăng Nhập</button>
        </form>
      </div>

      <!-- ===== ĐĂNG KÝ ===== -->
<div class="tab-pane fade" id="dangky">
  <h3 class="text-center">Đăng Ký</h3>
  <form>
    <div class="mb-3">
      <label>Họ và tên</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="mb-3">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email">
    </div>
    <div class="mb-3">
      <label>Mật khẩu</label>
      <input type="password" class="form-control" v-model="password">
    </div>
    <div class="mb-3">
      <label>Nhập lại mật khẩu</label>
      <input type="password" class="form-control" v-model="confirm">
    </div>
    <p class="text-success" v-if="registerSuccess1">{{ registerSuccess1 }}</p>
    <p class="text-danger" v-if="registerError">{{ registerError }}</p>

    <button type="button" class="btn btn-primary" @click="register">Đăng Ký</button>
  </form>
</div>



    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// tham khảo
import { useRouter } from 'vue-router'
const router = useRouter()


// load user
const user = ref([])
const fetchUser = async () => {
      try { 
  const user1 = await axios.get('http://localhost:3000/user')
  user.value = user1.data
      } catch (error) { 
        console.error('Lỗi khi lấy dữ liệu:', error); 
    } 
}

onMounted(fetchUser)

// đăng nhập
const loginEmail = ref('')
const loginPassword = ref('')
const loginError = ref('')
// 
const registerSuccess = ref(false)

const login = () => {
  const foundUser = user.value.find(
    user => user.mail === loginEmail.value && user.matkhau === loginPassword.value
  )

  if (!foundUser) {
    loginError.value = 'sai'
    return
  }

// tham khảo
localStorage.setItem('user', JSON.stringify(foundUser))
router.push('/')
}

// đăng ký
const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const registerError = ref('')
const registerSuccess1 = ref('')

const register = async () => {
  if (!name.value || !email.value || !password.value || !confirm.value) return
  if (password.value !== confirm.value) return

  try {

    const kiemtra = user.value.some(
      user => user.mail === email.value
    )

    if (kiemtra) {
      registerError.value = 'Email đã tồn tại'
      return
    }

    await axios.post('http://localhost:3000/user', {
      fullname: name.value,
      mail: email.value,
      matkhau: password.value,
      img: 'https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg'
    })
    registerSuccess1.value = 'Đăng ký thành công!'



    // reset 
    name.value = ''
    email.value = ''
    password.value = ''
    confirm.value = ''
  } catch (error) {
    console.error('Lỗi khi đăng ký:', error)
  }
}

</script>
