<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <span class="fw-bold fs-5">Fake Facebook</span>
      </a>

      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="menu" class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav me-4 gap-3">
          <li class="nav-item"><router-link class="nav-link fw-semibold" to="/">Trang chủ</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/profile">Thông tin</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/create-post">Đăng bài</router-link></li>
        </ul>

        <router-link to="/register" class="btn btn-primary fw-bold px-4">Đăng ký</router-link>
      </div>
    </div>
  </nav>
</template>
