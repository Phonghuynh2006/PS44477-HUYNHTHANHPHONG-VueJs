<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <a class="navbar-brand" href="/">
        <img src="../assets/img/LOGO.png" class="img-fluid h-50 w-25">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">

          <li class="nav-item">
            <a class="nav-link active" href="/">Trang Chủ</a>
          </li>

          <!-- CHƯA LOGIN -->
          <li class="nav-item" v-if="!isLoggedIn">
            <a class="nav-link" href="/login">Đăng Nhập</a>
          </li>

          <!-- ĐÃ LOGIN -->
          <li class="nav-item dropdown" v-if="isLoggedIn">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
              Thông Tin Khác
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/profile">Tài Khoản</a></li>
              <li><a class="dropdown-item" href="/create-post">Đăng Bài</a></li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item text-danger" href="#" @click.prevent="logout">
                  Đăng Xuất
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <!-- CHÀO USER -->
        <span class="text-success" v-if="user">
          Xin chào {{ user.fullname }}
        </span>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// LẤY USER TỪ LOCALSTORAGE
const user = computed(() => {
  const u = localStorage.getItem('user')
  return u ? JSON.parse(u) : null
})

const isLoggedIn = computed(() => !!user.value)

const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('userId')
  router.push('/login')
}
</script>
