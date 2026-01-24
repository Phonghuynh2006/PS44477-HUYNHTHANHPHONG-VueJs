<template>
  <div class="container">

      <h1 class="text-center">Tạo bài viết mới</h1>

    <div class="row">
      <!-- LEFT FORM -->
      <div class="col-md-8">

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
        <br>
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
      <div class="col-md-4">

        <!-- Featured Image -->
        <div class="card">
          <div class="card-body">
            <h5 class="fw-bold mb-3">Tải ảnh lên</h5>
            <!-- <label class="w-100">
              <div
                class="border border-2 border-secondary border-dashed rounded
                       text-center py-5 text-secondary"
                style="cursor: pointer;"
              >
                <div class="mb-2 fw-bold">Tải ảnh lên</div>
                <small>Hỗ trợ PNG, JPG, GIF</small>
              </div>
              <input type="file" class="d-none">
            </label> -->
<div>
  <!-- <label for="formFileLg" class="form-label">tải ảnh lên</label> -->
  <input class="form-control form-control-lg" id="formFileLg" type="file">
</div>

          </div>
        </div>

        <!-- Summary -->
        <div class="card">
          <div class="card-body">
            <label class="form-label fw-bold">Tóm tắt</label>
            <textarea
              rows="4"
              class="form-control"
              placeholder="Viết đoạn mô tả ngắn..."
            ></textarea>
          </div>
        </div>
        <br>
        <!-- Buttons -->
        <div class="d-flex gap-2">
          <button class="btn btn-outline-secondary w-50">Lưu nháp</button>
          <button class="btn btn-primary w-50">Đăng bài</button>
        </div>

      </div>

    </div>

  </div>
</template>
