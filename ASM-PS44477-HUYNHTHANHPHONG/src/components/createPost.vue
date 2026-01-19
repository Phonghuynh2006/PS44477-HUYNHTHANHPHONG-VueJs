<template>
  <div class="container py-5">

    <!-- Breadcrumb -->
    <nav class="mb-3 text-secondary small">
      <span>Dashboard</span> /
      <span>Bài viết</span> /
      <strong>Tạo bài viết mới</strong>
    </nav>

    <!-- Page Title -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="fw-bold">Tạo bài viết mới</h1>
    </div>

    <div class="row g-4">

      <!-- LEFT FORM -->
      <div class="col-lg-8 d-flex flex-column gap-4">

        <!-- Title -->
        <div class="card shadow-sm">
          <div class="card-body">
            <label class="form-label fw-semibold">Tiêu đề bài viết</label>
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Nhập tiêu đề bài viết"
            >
          </div>
        </div>

        <!-- Content -->
        <div class="card shadow-sm">
          <div class="card-body">
            <label class="form-label fw-semibold">Nội dung</label>
            <textarea
              rows="12"
              class="form-control"
              placeholder="Hãy bắt đầu viết nội dung bài viết..."
            ></textarea>
          </div>
        </div>

      </div>

      <!-- RIGHT SIDEBAR -->
      <div class="col-lg-4 d-flex flex-column gap-4">

        <!-- Featured Image -->
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="fw-bold mb-3">Ảnh nổi bật</h5>

            <label class="w-100">
              <div
                class="border border-2 border-secondary border-dashed rounded
                       text-center py-5 text-secondary"
                style="cursor: pointer;"
              >
                <div class="mb-2 fw-bold">Tải ảnh lên</div>
                <small>Hỗ trợ PNG, JPG, GIF</small>
              </div>
              <input type="file" class="d-none">
            </label>

          </div>
        </div>

        <!-- Summary -->
        <div class="card shadow-sm">
          <div class="card-body">
            <label class="form-label fw-bold">Tóm tắt</label>
            <textarea
              rows="4"
              class="form-control"
              placeholder="Viết đoạn mô tả ngắn..."
            ></textarea>
          </div>
        </div>

        <!-- Buttons -->
        <div class="d-flex gap-2">
          <button class="btn btn-outline-secondary w-50">Lưu nháp</button>
          <button class="btn btn-primary w-50">Đăng bài</button>
        </div>

      </div>

    </div>

  </div>
</template>
