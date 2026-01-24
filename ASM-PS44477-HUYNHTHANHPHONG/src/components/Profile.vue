<template>
    <div class="container">
      <!-- TIÊU ĐỀ -->
        <h1 class="text-center">Trang cá nhân</h1>

      <div class="row">
        <!-- CỘT TRÁI – ẢNH & THÔNG TIN NGẮN -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-body text-center">

              <img
                src="https://yeudialy.edu.vn/upload/2025/05/anime-chibi-nam03.webp"
                class="rounded-circle mb-3"
                width="150"
                height="150"
              />
              <h4 class="fw-bold">phonghuynh</h4>
              <p class="text-muted">@phong</p>
              <button class="btn btn-outline-primary w-100 mt-3">
                Tải ảnh mới
              </button>
            </div>
          </div>
        </div>

        <!-- CỘT PHẢI – THÔNG TIN CHI TIẾT -->
        <div class="col-md-8">
          <!-- THÔNG TIN CƠ BẢN -->
          <div class="card">
            <div class="card-body">

              <h5 class="fw-bold mb-4">Thông tin cá nhân</h5>

              <form class="row g-3">

                <!-- Họ tên -->
                <div class="col-sm-6">
                  <label class="form-label">Họ và tên</label>
                  <input type="text" class="form-control" value="phonghuynh" />
                </div>

                <!-- Username -->
                <div class="col-sm-6">
                  <label class="form-label">Tên người dùng</label>
                  <input type="text" class="form-control" value="@phonghuynh" readonly />
                </div>

                <!-- Email -->
                <div class="col-12">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" value="phonghuynh@gmail.com" />
                </div>

                <!-- Giới thiệu -->
                <div class="col-12">
                  <label class="form-label">Giới thiệu bản thân</label>
                  <textarea rows="4" class="form-control">
                    phonghuynh
                  </textarea>
                </div>

                <!-- Nút -->
                <div class="col-12 d-flex justify-content-end gap-2 pt-3 border-top">
                  <button type="button" class="btn btn-outline-secondary">Hủy</button>
                  <button type="submit" class="btn btn-primary" disabled>Lưu thay đổi</button>
                </div>

              </form>

            </div>
          </div>
        </div>

      </div>
<hr>
          <!-- ĐỔI MẬT KHẨU -->
          <div class="card">
            <div class="card-body">
              <h5 class="fw-bold mb-4">Đổi mật khẩu</h5>
              <form class="row g-3">

                <div class="col-12">
                  <label class="form-label">Mật khẩu hiện tại</label>
                  <input type="password" class="form-control" placeholder="Nhập mật khẩu hiện tại" />
                </div>

                <div class="col-12">
                  <label class="form-label">Mật khẩu mới</label>
                  <input type="password" class="form-control" placeholder="Nhập mật khẩu mới" />
                </div>

                <div class="col-12">
                  <label class="form-label">Nhập lại mật khẩu mới</label>
                  <input type="password" class="form-control" placeholder="Xác nhận mật khẩu mới" />
                </div>

                <div class="col-12 d-flex justify-content-end pt-3 border-top">
                  <button type="submit" class="btn btn-primary">Cập nhật mật khẩu</button>
                </div>
              </form>
            </div>
          </div>
    </div>

</template>
