<template>
  <div class="container-fluid min-vh-100 bg-light">
    <div class="row min-vh-100">

      <!-- LEFT -->
      <div
        class="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-start px-5"
        style="background:#e5e5e5;"
      >
        <h1 class="fw-bold display-5">Nơi ý tưởng của bạn cất cánh</h1>
        <h2 class="fw-normal mt-3">Quản lý blog chuyên nghiệp và đơn giản.</h2>
      </div>

      <!-- RIGHT -->
      <div class="col-lg-6 d-flex justify-content-center align-items-center py-5">
        <div class="w-100" style="max-width: 400px;">

          <h1 class="fw-bold mb-4 text-center">Chào mừng trở lại!</h1>

          <!-- EMAIL -->
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control form-control-lg"
              placeholder="Nhập email của bạn"
            />
          </div>

          <!-- PASSWORD -->
          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>

          <!-- REMEMBER + FORGOT -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="rememberMe" />
              <label class="form-check-label" for="rememberMe">
                Ghi nhớ đăng nhập
              </label>
            </div>
            <a href="#" class="text-primary small">Quên mật khẩu?</a>
          </div>

          <!-- TWO BUTTONS -->
          <div class="row g-2 mt-3">
            <div class="col-6">
              <button class="btn btn-primary w-100 py-2 fw-bold">
                Đăng nhập
              </button>
            </div>
            <div class="col-6">
              <router-link
                to="/register"
                class="btn btn-outline-primary w-100 py-2 fw-bold"
              >
                Đăng ký
              </router-link>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
