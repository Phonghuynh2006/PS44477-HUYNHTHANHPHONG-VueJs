<template>
  <div class="bg-light min-vh-100">

    <!-- HERO -->
    <section class="py-5 text-center">
      <div class="container">
        <h1 class="fw-bold display-5">Bài Viết Mới Nhất</h1>
      </div>
    </section>

    <!-- POSTS GRID -->
    <section class="py-4">
      <div class="container">
        <div class="row g-4">

          <!-- POST 1 -->
          <div class="col-lg-4 col-md-6">
            <div class="card shadow-sm h-100 border-0">
              <img
                class="card-img-top"
                src="https://photo-baomoi.bmcdn.me/w700_r16x9/2025_11_21_14_53820038/f16588cc2585ccdb9594.jpg.avif"
              >
              <div class="card-body d-flex flex-column">
                <h5 class="fw-bold">Bộ Quốc phòng yêu cầu các đơn vị tập trung ứng phó mưa lũ tại khu vực Trung Bộ</h5>
                <p class="text-muted flex-grow-1">Bộ Quốc phòng yêu cầu các đơn vị tập trung ứng phó mưa lũ tại khu vực Trung Bộ</p>
                <router-link to="/post/1" class="text-primary fw-semibold">Đọc thêm →</router-link>
              </div>
            </div>
          </div>

          <!-- POST 2 -->
          <div class="col-lg-4 col-md-6">
            <div class="card shadow-sm h-100 border-0">
              <img
                class="card-img-top"
                src="https://photo-baomoi.bmcdn.me/w250_r3x2/2025_11_21_294_53820530/b9955d19f050190e4041.jpg.avif"
              >
              <div class="card-body d-flex flex-column">
                <h5 class="fw-bold">Tìm hiểu Bootstrap 5</h5>
                <p class="text-muted flex-grow-1">Cách xây dựng giao diện nhanh chóng với Bootstrap.</p>
                <router-link to="/post/2" class="text-primary fw-semibold">Đọc thêm →</router-link>
              </div>
            </div>
          </div>

          <!-- POST 3 -->
          <div class="col-lg-4 col-md-6">
            <div class="card shadow-sm h-100 border-0">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              >
              <div class="card-body d-flex flex-column">
                <h5 class="fw-bold">Nghệ thuật viết nội dung</h5>
                <p class="text-muted flex-grow-1">Làm thế nào để viết bài blog chất lượng.</p>
                <router-link to="/post/3" class="text-primary fw-semibold">Đọc thêm →</router-link>
              </div>
            </div>
          </div>

          <!-- POST 4 -->
          <div class="col-lg-4 col-md-6">
            <div class="card shadow-sm h-100 border-0">
              <img
                class="card-img-top"
                src="https://photo-baomoi.bmcdn.me/w250_r3x2/2025_11_21_65_53820081/b04794fa39b3d0ed89a2.jpg.avif"
              >
              <div class="card-body d-flex flex-column">
                <h5 class="fw-bold">Thiết kế giao diện hiện đại</h5>
                <p class="text-muted flex-grow-1">Các phương pháp UI hiện đại bạn nên biết.</p>
                <router-link to="/post/4" class="text-primary fw-semibold">Đọc thêm →</router-link>
              </div>
            </div>
          </div>

          <!-- POST 5 -->
          <div class="col-lg-4 col-md-6">
            <div class="card shadow-sm h-100 border-0">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              >
              <div class="card-body d-flex flex-column">
                <h5 class="fw-bold">Lộ trình học lập trình</h5>
                <p class="text-muted flex-grow-1">Định hướng học tập cho người mới bắt đầu.</p>
                <router-link to="/post/5" class="text-primary fw-semibold">Đọc thêm →</router-link>
              </div>
            </div>
          </div>

          <!-- POST 6 -->
          <div class="col-lg-4 col-md-6">
            <div class="card shadow-sm h-100 border-0">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              >
              <div class="card-body d-flex flex-column">
                <h5 class="fw-bold">Xây dựng website cá nhân</h5>
                <p class="text-muted flex-grow-1">Tự tay tạo trang web portfolio dễ dàng.</p>
                <router-link to="/post/6" class="text-primary fw-semibold">Đọc thêm →</router-link>
              </div>
            </div>
          </div>

        </div>

        <!-- PAGINATION -->
        <div class="d-flex justify-content-center my-5">
          <nav>
            <ul class="pagination pagination-lg">
              <li class="page-item disabled">
                <button class="page-link">‹</button>
              </li>
              <li class="page-item active"><button class="page-link">1</button></li>
              <li class="page-item"><button class="page-link">2</button></li>
              <li class="page-item"><button class="page-link">3</button></li>
              <li class="page-item"><button class="page-link">›</button></li>
            </ul>
          </nav>
        </div>

      </div>
    </section>

  </div>
</template>
